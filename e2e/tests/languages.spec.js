// @ts-check
/** Languages (flow 05): English, Spanish, French and Korean across the app. */
const { test, expect } = require('@playwright/test');

async function choose(page, label) {
  await page.getByRole('combobox', { name: /Display language|Idioma de la interfaz|Langue d'affichage|표시 언어/ }).click();
  await page.getByRole('option', { name: label }).click();
}

test.describe('Switching', () => {
  test('[I18N-001] Display language offers four languages; each switches the menu', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('combobox', { name: 'Display language' }).click();
    await expect(page.getByRole('option')).toHaveText(['English', 'Español', 'Français', '한국어']);
    await page.keyboard.press('Escape');
    for (const [label, guide, logs] of [
      ['Español', 'Guía del usuario', 'Registros y monitorización'],
      ['Français', "Guide de l'utilisateur", 'Journaux et surveillance'],
      ['한국어', '사용자 가이드', '로그 및 모니터링'],
      ['English', 'User Guide', 'Logs & Monitoring'],
    ]) {
      await choose(page, label);
      const menu = page.getByRole('navigation').first();
      await expect(menu.getByRole('link', { name: guide })).toBeVisible();
      await expect(menu.getByRole('link', { name: logs })).toBeVisible();
    }
  });

  test('[I18N-002] the chosen language is remembered after reload', async ({ page }) => {
    await page.goto('/');
    await choose(page, '한국어');
    await page.reload();
    await expect(page.getByRole('combobox', { name: '표시 언어' })).toHaveText(/한국어/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'ko');
  });

  test.describe('browser language', () => {
    test.use({ locale: 'ko-KR' });
    test('[I18N-003] first visit uses the browser language', async ({ page }) => {
      await page.goto('/');
      await expect(page.getByRole('combobox', { name: '표시 언어' })).toBeVisible();
    });
  });

  test.describe('unsupported browser language', () => {
    test.use({ locale: 'de-DE' });
    test('[I18N-003] an unsupported browser language falls back to English', async ({ page }) => {
      await page.goto('/');
      await expect(page.getByRole('combobox', { name: 'Display language' })).toBeVisible();
    });
  });
});

test.describe('Content', () => {
  test('[I18N-004] the User Guide shows the page in the chosen language', async ({ page }) => {
    await page.goto('/guide/01-getting-started');
    for (const [label, title] of [['Español', 'Primeros pasos'], ['Français', 'Bien démarrer'], ['한국어', '시작하기']]) {
      await choose(page, label);
      await expect(page.getByTestId('guide-article').getByRole('heading', { level: 1 })).toHaveText(title);
    }
  });

  test('[I18N-005] Help answers in the chosen language with links to that guide', async ({ page }) => {
    await page.goto('/');
    await choose(page, '한국어');
    await page.getByRole('button', { name: '도움말', exact: true }).click();
    const chat = page.getByRole('complementary', { name: '도움말 채팅' });
    const input = chat.getByRole('textbox', { name: '질문 입력' });
    await input.fill('자연어로 로그를 검색하려면 어떻게 하나요?');
    await input.press('Enter');
    await expect(chat.getByTestId('chat-answer').last()).toContainText(/[가-힣]/);
    await expect(chat.getByTestId('chat-source').first()).toHaveAttribute('href', /^\/guide\/03-logs-and-monitoring/);
    await input.fill('오늘 서울 날씨 알려줘');
    await input.press('Enter');
    await expect(chat.getByTestId('chat-answer').last()).toHaveText(/사용자 가이드에서 찾지 못했어요/);
  });

  test('[I18N-006] log search Interpreted as and examples are in the chosen language', async ({ page }) => {
    await page.goto('/logs');
    await choose(page, '한국어');
    const chip = page.getByRole('button', { name: '최근 1시간 동안의 오류' });
    await chip.click();
    await expect(page.getByRole('status')).toContainText('해석 결과: (수준: ERROR 그리고 최근 N분 이내(minutes=60))');
  });
});

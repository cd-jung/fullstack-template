import type { Messages } from './en';

export const ko: Messages = {
  "app": {
    "openMenu": "메뉴 열기",
    "mainMenu": "주 메뉴",
    "displayLanguage": "표시 언어"
  },
  "nav": {
    "home": "홈",
    "guide": "사용자 가이드",
    "logs": "로그 및 모니터링",
    "coverage": "커버리지"
  },
  "common": {
    "retry": "다시 시도",
    "close": "닫기",
    "cancel": "취소",
    "notFoundTitle": "페이지를 찾을 수 없어요",
    "goHome": "처음으로 가기"
  },
  "search": {
    "interpretedAs": "해석 결과:",
    "errors": {
      "untranslatable": "질문을 해석하지 못했어요. 다르게 질문해 주세요.",
      "aiDown": "AI 검색을 지금 쓸 수 없어요. 키워드 검색을 이용해 주세요.",
      "tooMany": "질문이 너무 많아요. {{seconds}}초 후에 다시 시도해 주세요",
      "slow": "검색이 너무 오래 걸렸어요. 조건을 더 구체적으로 해 보세요",
      "load": "책을 불러오지 못했어요"
    }
  },
  "guide": {
    "pages": "사용자 가이드 페이지",
    "missing": "이 사용자 가이드 페이지는 없어요."
  },
  "help": {
    "open": "도움말",
    "panel": "도움말 채팅",
    "title": "도움말",
    "welcome": "안녕하세요! {{app}} 사용법을 알려 드릴게요. 무엇이 궁금하세요?",
    "disclaimer": "답변은 사용자 가이드를 바탕으로 하며 정확하지 않을 수 있어요.",
    "suggested": "추천 질문",
    "suggestions": [
      "자연어로 로그를 검색하려면 어떻게 하나요?",
      "커버리지 페이지에는 무엇이 나오나요?",
      "표시 언어는 어떻게 바꾸나요?"
    ],
    "input": "질문 입력",
    "send": "보내기",
    "newConversation": "새 대화",
    "closeHelp": "도움말 닫기",
    "confirmTitle": "새 대화를 시작할까요?",
    "confirmBody": "지금까지의 대화가 지워져요.",
    "clear": "지우기",
    "thinking": "찾는 중…",
    "stop": "생성 중지",
    "stopped": "중지됨.",
    "sources": "출처",
    "copyAnswer": "답변 복사",
    "copied": "답변을 복사했어요",
    "copyFailed": "복사하지 못했어요",
    "helpful": "도움이 됐어요",
    "notHelpful": "도움이 안 됐어요",
    "commentLabel": "의견",
    "commentPlaceholder": "무엇이 문제였나요? (선택)",
    "submit": "보내기",
    "thanks": "의견 감사해요",
    "errors": {
      "timeout": "응답이 너무 오래 걸렸어요. 다시 시도해 주세요.",
      "unavailable": "지금은 도우미를 쓸 수 없어요. 잠시 후 다시 시도해 주세요.",
      "generic": "문제가 생겼어요. 다시 시도해 주세요.",
      "tooMany": "질문이 너무 많아요. {{seconds}}초 후에 다시 시도해 주세요"
    }
  },
  "logs": {
    "title": "로그 및 모니터링",
    "timeRange": "기간",
    "lastHours": "최근 {{count}}시간",
    "lastDays": "최근 {{count}}일",
    "dashboard": "대시보드",
    "dashboardError": "대시보드를 불러오지 못했어요.",
    "requests": "요청 수",
    "errorRate": "오류율 (5xx)",
    "p95": "p95 지연 시간",
    "clientErrors": "클라이언트 오류 (4xx)",
    "perHour": "시간별 요청 수",
    "search": "로그 검색",
    "tabNl": "자연어로 질문 (AI)",
    "tabKeyword": "키워드",
    "nlLabel": "자연어로 로그 검색",
    "nlPlaceholder": "예: 최근 1시간 동안의 오류",
    "nlSubmit": "해석하고 검색",
    "keywordLabel": "키워드로 로그 검색",
    "keywordPlaceholder": "경로 또는 메시지",
    "submit": "검색",
    "level": "수준",
    "allLevels": "모든 수준",
    "count": "로그 {{count}}개",
    "table": "요청 로그",
    "columns": {
      "time": "시간",
      "level": "수준",
      "method": "메서드",
      "path": "경로",
      "status": "상태",
      "duration": "소요 시간",
      "message": "메시지"
    },
    "noMatch": "일치하는 로그가 없어요.",
    "loadError": "로그를 불러오지 못했어요.",
    "chart": {
      "legendRequests": "요청",
      "legendErrors": "서버 오류 (5xx)",
      "max": "최대 시간당 {{count}}건",
      "empty": "이 기간에는 요청이 없어요.",
      "tooltipRequests": "요청 {{count}}건",
      "tooltipErrors": "서버 오류 {{count}}건",
      "caption": "시간별 요청 수와 서버 오류 수",
      "hour": "시간"
    },
    "headroom": {
      "title": "리소스 여유",
      "legend": "한도 대비 사용 비율이에요. 초록: 60% 미만, 주황: 60~85%, 빨강: 85% 이상.",
      "app": "앱 (최근 24시간)",
      "cloudflare": "Cloudflare (CPU는 최근 24시간, 사용량은 이번 달)",
      "notConfigured": "Cloudflare 지표를 보려면 읽기 전용 분석 토큰(CF_ANALYTICS_TOKEN)이 필요해요.",
      "unavailable": "Cloudflare 지표를 가져오지 못했어요: {{reason}}",
      "status": {
        "ok": "정상",
        "watch": "주의",
        "critical": "위험"
      },
      "metric": {
        "latencyP95": "응답 시간 p95",
        "errorBudget": "오류 예산 (5xx)",
        "aiBudget": "하루 AI 예산",
        "rateLimited": "제한된 요청",
        "vectorDims": "벡터 저장 공간",
        "cpuP99": "CPU 시간 p99",
        "requestsMonth": "이번 달 요청 수",
        "d1Storage": "D1 저장 공간",
        "d1RowsRead": "D1 읽은 행",
        "d1RowsWritten": "D1 쓴 행"
      },
      "help": {
        "latencyP95": "목표 1초 대비",
        "errorBudget": "오류 예산 1% 대비",
        "aiBudget": "오늘 실제 AI 호출 / AI_DAILY_LIMIT",
        "rateLimited": "429로 응답한 요청 비율",
        "vectorDims": "저장한 차원 수 / 포함량 1,000만",
        "cpuP99": "요청당 한도 5,000ms 대비",
        "requestsMonth": "월 포함량 1,000만 대비",
        "d1Storage": "DB당 한도 10GB 대비",
        "d1RowsRead": "월 포함량 250억 대비",
        "d1RowsWritten": "월 포함량 5,000만 대비"
      }
    }
  },
  "coverage": {
    "title": "커버리지",
    "openNewTab": "새 탭에서 열기",
    "frame": "커버리지 리포트",
    "missing": "커버리지 리포트가 아직 만들어지지 않았어요. 배포할 때마다 만들어지고, 로컬에서는 {{unit}} 다음에 {{build}}를 실행하세요.",
    "note": "리포트는 개발자용 도구라서 영어로 표시돼요."
  },
  "home": {
    "title": "환영해요",
    "body": "여기에 주요 기능이 들어가요. 메뉴에서 사용자 가이드를 열거나 도움말 도우미에게 물어보세요."
  },
  "admin": {
    "moved": "이 페이지는 관리자 사이트에 있어요:",
    "signInRequired": "로그인이 필요해요. 로그와 모니터링은 로그인한 관리자만 볼 수 있어요."
  }
};

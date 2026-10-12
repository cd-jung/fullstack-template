import { Card, CardContent, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { APP_NAME } from '../config';

/** Placeholder for the project's main feature. Replace this page first in a new project. */
export default function HomePage() {
  const { t } = useTranslation();
  return (
    <Stack spacing={2}>
      <Typography variant="h4" component="h1">
        {APP_NAME}
      </Typography>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" component="h2">{t('home.title')}</Typography>
          <Typography>{t('home.body')}</Typography>
        </CardContent>
      </Card>
    </Stack>
  );
}

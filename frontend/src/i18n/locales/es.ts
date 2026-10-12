import type { Messages } from './en';

export const es: Messages = {
  "app": {
    "openMenu": "Abrir menú",
    "mainMenu": "Menú principal",
    "displayLanguage": "Idioma de la interfaz"
  },
  "nav": {
    "home": "Inicio",
    "guide": "Guía del usuario",
    "logs": "Registros y monitorización",
    "coverage": "Cobertura"
  },
  "common": {
    "retry": "Reintentar",
    "close": "Cerrar",
    "cancel": "Cancelar",
    "notFoundTitle": "Página no encontrada",
    "goHome": "Ir al inicio"
  },
  "search": {
    "interpretedAs": "Interpretado como:",
    "errors": {
      "untranslatable": "No se pudo interpretar la pregunta. Reformúlala.",
      "aiDown": "La búsqueda con IA no está disponible. Usa la búsqueda por palabras clave.",
      "tooMany": "Demasiadas preguntas, espera {{seconds}} segundos",
      "slow": "La búsqueda tardó demasiado; prueba una pregunta más concreta",
      "load": "No se pudieron cargar los libros"
    }
  },
  "guide": {
    "pages": "Páginas de la Guía del usuario",
    "missing": "Esta página de la Guía del usuario no existe."
  },
  "help": {
    "open": "Ayuda",
    "panel": "Chat de ayuda",
    "title": "Ayuda",
    "welcome": "¡Hola! Puedo explicarte cómo usar {{app}}. ¿Qué te gustaría saber?",
    "disclaimer": "Las respuestas provienen de la Guía del usuario y pueden ser inexactas.",
    "suggested": "Preguntas sugeridas",
    "suggestions": [
      "¿Cómo busco registros en lenguaje natural?",
      "¿Qué muestra la página Cobertura?",
      "¿Cómo cambio el idioma de la interfaz?"
    ],
    "input": "Haz una pregunta",
    "send": "Enviar",
    "newConversation": "Nueva conversación",
    "closeHelp": "Cerrar ayuda",
    "confirmTitle": "¿Empezar una nueva conversación?",
    "confirmBody": "Se borrará la conversación actual.",
    "clear": "Borrar",
    "thinking": "Buscando…",
    "stop": "Detener",
    "stopped": "Detenido.",
    "sources": "Fuentes",
    "copyAnswer": "Copiar respuesta",
    "copied": "Respuesta copiada",
    "copyFailed": "No se pudo copiar",
    "helpful": "Útil",
    "notHelpful": "No útil",
    "commentLabel": "Comentario",
    "commentPlaceholder": "¿Qué estuvo mal? (opcional)",
    "submit": "Enviar",
    "thanks": "Gracias por tu opinión",
    "errors": {
      "timeout": "El asistente tardó demasiado en responder. Inténtalo de nuevo.",
      "unavailable": "El asistente no está disponible. Inténtalo más tarde.",
      "generic": "Algo salió mal. Inténtalo de nuevo.",
      "tooMany": "Demasiadas preguntas, espera {{seconds}} segundos"
    }
  },
  "logs": {
    "title": "Registros y monitorización",
    "timeRange": "Periodo",
    "lastHours": "Últimas {{count}} h",
    "lastDays": "Últimos {{count}} d",
    "dashboard": "Panel",
    "dashboardError": "No se pudo cargar el panel.",
    "requests": "Solicitudes",
    "errorRate": "Tasa de errores (5xx)",
    "p95": "Latencia p95",
    "clientErrors": "Errores del cliente (4xx)",
    "perHour": "Solicitudes por hora",
    "search": "Búsqueda de registros",
    "tabNl": "Preguntar en lenguaje natural (IA)",
    "tabKeyword": "Palabra clave",
    "nlLabel": "Buscar registros en lenguaje natural",
    "nlPlaceholder": "p. ej. errores en la última hora",
    "nlSubmit": "Traducir y buscar",
    "keywordLabel": "Buscar registros por palabra clave",
    "keywordPlaceholder": "Ruta o mensaje",
    "submit": "Buscar",
    "level": "Nivel",
    "allLevels": "Todos los niveles",
    "count": "{{count}} registros",
    "table": "Registros de solicitudes",
    "columns": {
      "time": "Hora",
      "level": "Nivel",
      "method": "Método",
      "path": "Ruta",
      "status": "Estado",
      "duration": "Duración",
      "message": "Mensaje"
    },
    "noMatch": "Ningún registro coincide.",
    "loadError": "No se pudieron cargar los registros.",
    "chart": {
      "legendRequests": "Solicitudes",
      "legendErrors": "Errores del servidor (5xx)",
      "max": "máx. {{count}} / hora",
      "empty": "No hay solicitudes en este periodo.",
      "tooltipRequests": "{{count}} solicitudes",
      "tooltipErrors": "{{count}} errores del servidor",
      "caption": "Solicitudes y errores del servidor por hora",
      "hour": "Hora"
    },
    "headroom": {
      "title": "Margen de recursos",
      "legend": "Parte de cada límite en uso. Verde: menos del 60 %, ámbar: 60–85 %, rojo: 85 % o más.",
      "app": "Aplicación (últimas 24 horas)",
      "cloudflare": "Cloudflare (CPU últimas 24 horas, uso de este mes)",
      "notConfigured": "Las métricas de Cloudflare necesitan un token de análisis de solo lectura (CF_ANALYTICS_TOKEN).",
      "unavailable": "Las métricas de Cloudflare no están disponibles: {{reason}}",
      "status": {
        "ok": "Bien",
        "watch": "Vigilar",
        "critical": "Crítico"
      },
      "metric": {
        "latencyP95": "Tiempo de respuesta p95",
        "errorBudget": "Presupuesto de errores (5xx)",
        "aiBudget": "Presupuesto diario de IA",
        "rateLimited": "Solicitudes limitadas",
        "vectorDims": "Almacenamiento vectorial",
        "cpuP99": "Tiempo de CPU p99",
        "requestsMonth": "Solicitudes este mes",
        "d1Storage": "Almacenamiento D1",
        "d1RowsRead": "Filas leídas en D1",
        "d1RowsWritten": "Filas escritas en D1"
      },
      "help": {
        "latencyP95": "Comparado con un objetivo de 1 s",
        "errorBudget": "Comparado con un presupuesto de errores del 1 %",
        "aiBudget": "Llamadas reales de IA hoy frente a AI_DAILY_LIMIT",
        "rateLimited": "Parte de solicitudes respondidas con 429",
        "vectorDims": "Dimensiones almacenadas frente a los 10M incluidos",
        "cpuP99": "frente al límite de 5000 ms por solicitud",
        "requestsMonth": "frente a 10M incluidas al mes",
        "d1Storage": "frente al límite de 10 GB por base de datos",
        "d1RowsRead": "frente a 25 000M incluidas al mes",
        "d1RowsWritten": "frente a 50M incluidas al mes"
      }
    }
  },
  "coverage": {
    "title": "Cobertura",
    "openNewTab": "Abrir en una pestaña nueva",
    "frame": "Informe de cobertura",
    "missing": "El informe de cobertura todavía no se ha generado. Se crea en cada despliegue; en local ejecuta {{unit}} y después {{build}}.",
    "note": "El informe es una herramienta para desarrolladores y se muestra en inglés."
  },
  "home": {
    "title": "Bienvenido",
    "body": "Aquí va la función principal. Abre la Guía del usuario desde el menú o pregunta al asistente de Ayuda."
  },
  "admin": {
    "moved": "Esta página está en el sitio de administración:",
    "signInRequired": "Debes iniciar sesión: los registros y la monitorización solo están disponibles para administradores."
  }
};

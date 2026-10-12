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
  }
};

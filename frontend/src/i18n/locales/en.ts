/** English UI text: the source of every translation key. Other locales must have the same keys. */
export const en = {
  "app": {
    "openMenu": "Open menu",
    "mainMenu": "Main menu",
    "displayLanguage": "Display language"
  },
  "nav": {
    "home": "Home",
    "guide": "User Guide",
    "logs": "Logs & Monitoring",
    "coverage": "Coverage"
  },
  "common": {
    "retry": "Retry",
    "close": "Close",
    "cancel": "Cancel",
    "notFoundTitle": "Page not found",
    "goHome": "Go to Home"
  },
  "search": {
    "interpretedAs": "Interpreted as:",
    "errors": {
      "untranslatable": "The question could not be translated. Please rephrase it.",
      "aiDown": "The AI search is unavailable. Use keyword search instead.",
      "tooMany": "Too many questions, please wait {{seconds}} seconds",
      "slow": "Search took too long, try a narrower question",
      "load": "Could not load books"
    }
  },
  "guide": {
    "pages": "User Guide pages",
    "missing": "This User Guide page does not exist."
  },
  "help": {
    "open": "Help",
    "panel": "Help chat",
    "title": "Help",
    "welcome": "Hi! I can explain how to use {{app}}. What would you like to know?",
    "disclaimer": "Answers come from the User Guide and may be inaccurate.",
    "suggested": "Suggested questions",
    "suggestions": [
      "How do I search logs in plain language?",
      "What does the Coverage page show?",
      "How do I change the display language?"
    ],
    "input": "Ask a question",
    "send": "Send",
    "newConversation": "New conversation",
    "closeHelp": "Close help",
    "confirmTitle": "Start a new conversation?",
    "confirmBody": "The current conversation will be cleared.",
    "clear": "Clear",
    "thinking": "Looking it up…",
    "stop": "Stop generating",
    "stopped": "Stopped.",
    "sources": "Sources",
    "copyAnswer": "Copy answer",
    "copied": "Answer copied",
    "copyFailed": "Copy failed",
    "helpful": "Helpful",
    "notHelpful": "Not helpful",
    "commentLabel": "Feedback comment",
    "commentPlaceholder": "What was wrong? (optional)",
    "submit": "Submit",
    "thanks": "Thanks for the feedback",
    "errors": {
      "timeout": "The assistant took too long to respond. Please try again.",
      "unavailable": "The assistant is unavailable. Please try again later.",
      "generic": "Something went wrong. Please try again.",
      "tooMany": "Too many questions, please wait {{seconds}} seconds"
    }
  },
  "logs": {
    "title": "Logs & Monitoring",
    "timeRange": "Time range",
    "lastHours": "Last {{count}} h",
    "lastDays": "Last {{count}} d",
    "dashboard": "Dashboard",
    "dashboardError": "Could not load the dashboard.",
    "requests": "Requests",
    "errorRate": "Error rate (5xx)",
    "p95": "p95 latency",
    "clientErrors": "Client errors (4xx)",
    "perHour": "Requests per hour",
    "search": "Log search",
    "tabNl": "Ask in plain language (AI)",
    "tabKeyword": "Keyword",
    "nlLabel": "Search logs in plain language",
    "nlPlaceholder": "e.g. errors in the last hour",
    "nlSubmit": "Translate and search",
    "keywordLabel": "Search logs by keyword",
    "keywordPlaceholder": "Path or message",
    "submit": "Search",
    "level": "Level",
    "allLevels": "All levels",
    "count": "{{count}} log entries",
    "table": "Request logs",
    "columns": {
      "time": "Time",
      "level": "Level",
      "method": "Method",
      "path": "Path",
      "status": "Status",
      "duration": "Duration",
      "message": "Message"
    },
    "noMatch": "No log entries match.",
    "loadError": "Could not load logs.",
    "chart": {
      "legendRequests": "Requests",
      "legendErrors": "Server errors (5xx)",
      "max": "max {{count}} / hour",
      "empty": "No requests in this time range.",
      "tooltipRequests": "{{count}} requests",
      "tooltipErrors": "{{count}} server errors",
      "caption": "Requests and server errors per hour",
      "hour": "Hour"
    },
    "headroom": {
      "title": "Resource headroom",
      "legend": "Share of each limit in use. Green: under 60 %, amber: 60–85 %, red: 85 % or more.",
      "app": "App (last 24 hours)",
      "cloudflare": "Cloudflare (CPU last 24 hours, usage this month)",
      "notConfigured": "Cloudflare metrics need a read-only analytics token (CF_ANALYTICS_TOKEN).",
      "unavailable": "Cloudflare metrics are unavailable: {{reason}}",
      "status": {
        "ok": "OK",
        "watch": "Watch",
        "critical": "Critical"
      },
      "metric": {
        "latencyP95": "Response time p95",
        "errorBudget": "Error budget (5xx)",
        "aiBudget": "Daily AI budget",
        "rateLimited": "Rate-limited requests",
        "vectorDims": "Vector storage",
        "cpuP99": "CPU time p99",
        "requestsMonth": "Requests this month",
        "d1Storage": "D1 storage",
        "d1RowsRead": "D1 rows read",
        "d1RowsWritten": "D1 rows written"
      },
      "help": {
        "latencyP95": "Compared with a 1 s target",
        "errorBudget": "Compared with a 1 % error budget",
        "aiBudget": "Real AI calls today vs AI_DAILY_LIMIT",
        "rateLimited": "Share of requests answered with 429",
        "vectorDims": "Stored dimensions vs the 10M included",
        "cpuP99": "vs the 5,000 ms per-request limit",
        "requestsMonth": "vs 10M included per month",
        "d1Storage": "vs the 10 GB database limit",
        "d1RowsRead": "vs 25B included per month",
        "d1RowsWritten": "vs 50M included per month"
      }
    }
  },
  "coverage": {
    "title": "Coverage",
    "openNewTab": "Open in a new tab",
    "frame": "Coverage report",
    "missing": "The coverage report has not been built yet. It is generated on every deployment; locally run {{unit}} and then {{build}}.",
    "note": "The report is a developer tool and is shown in English."
  },
  "home": {
    "title": "Welcome",
    "body": "The main feature goes here. Open the User Guide from the menu, or ask the Help assistant."
  },
  "admin": {
    "moved": "This page is on the admin site:",
    "signInRequired": "Sign-in required: logs and monitoring are only available to signed-in administrators."
  }
};

type Strings<T> = { [K in keyof T]: T[K] extends string ? string : T[K] extends readonly string[] ? string[] : Strings<T[K]> };
export type Messages = Strings<typeof en>;

import type { Messages } from './en';

export const fr: Messages = {
  "app": {
    "openMenu": "Ouvrir le menu",
    "mainMenu": "Menu principal",
    "displayLanguage": "Langue d'affichage"
  },
  "nav": {
    "home": "Accueil",
    "guide": "Guide de l'utilisateur",
    "logs": "Journaux et surveillance",
    "coverage": "Couverture"
  },
  "common": {
    "retry": "Réessayer",
    "close": "Fermer",
    "cancel": "Annuler",
    "notFoundTitle": "Page introuvable",
    "goHome": "Aller à l'accueil"
  },
  "search": {
    "interpretedAs": "Interprété comme :",
    "errors": {
      "untranslatable": "La question n’a pas pu être interprétée. Reformulez-la.",
      "aiDown": "La recherche par IA est indisponible. Utilisez la recherche par mots-clés.",
      "tooMany": "Trop de questions, patientez {{seconds}} secondes",
      "slow": "La recherche a pris trop de temps ; essayez une question plus précise",
      "load": "Impossible de charger les livres"
    }
  },
  "guide": {
    "pages": "Pages du Guide de l'utilisateur",
    "missing": "Cette page du Guide de l'utilisateur n'existe pas."
  },
  "help": {
    "open": "Aide",
    "panel": "Discussion d'aide",
    "title": "Aide",
    "welcome": "Bonjour ! Je peux vous expliquer comment utiliser {{app}}. Que voulez-vous savoir ?",
    "disclaimer": "Les réponses proviennent du Guide de l'utilisateur et peuvent être inexactes.",
    "suggested": "Questions suggérées",
    "suggestions": [
      "Comment rechercher dans les journaux en langage naturel ?",
      "Que montre la page Couverture ?",
      "Comment changer la langue d'affichage ?"
    ],
    "input": "Posez une question",
    "send": "Envoyer",
    "newConversation": "Nouvelle conversation",
    "closeHelp": "Fermer l'aide",
    "confirmTitle": "Commencer une nouvelle conversation ?",
    "confirmBody": "La conversation actuelle sera effacée.",
    "clear": "Effacer",
    "thinking": "Recherche en cours…",
    "stop": "Arrêter",
    "stopped": "Arrêté.",
    "sources": "Sources",
    "copyAnswer": "Copier la réponse",
    "copied": "Réponse copiée",
    "copyFailed": "Échec de la copie",
    "helpful": "Utile",
    "notHelpful": "Pas utile",
    "commentLabel": "Commentaire",
    "commentPlaceholder": "Qu'est-ce qui n'allait pas ? (facultatif)",
    "submit": "Envoyer",
    "thanks": "Merci pour votre avis",
    "errors": {
      "timeout": "L'assistant a mis trop de temps à répondre. Réessayez.",
      "unavailable": "L'assistant est indisponible. Réessayez plus tard.",
      "generic": "Une erreur s'est produite. Réessayez.",
      "tooMany": "Trop de questions, patientez {{seconds}} secondes"
    }
  },
  "logs": {
    "title": "Journaux et surveillance",
    "timeRange": "Période",
    "lastHours": "Dernières {{count}} h",
    "lastDays": "Derniers {{count}} j",
    "dashboard": "Tableau de bord",
    "dashboardError": "Impossible de charger le tableau de bord.",
    "requests": "Requêtes",
    "errorRate": "Taux d'erreur (5xx)",
    "p95": "Latence p95",
    "clientErrors": "Erreurs client (4xx)",
    "perHour": "Requêtes par heure",
    "search": "Recherche dans les journaux",
    "tabNl": "Demander en langage naturel (IA)",
    "tabKeyword": "Mot-clé",
    "nlLabel": "Rechercher dans les journaux en langage naturel",
    "nlPlaceholder": "ex. erreurs de la dernière heure",
    "nlSubmit": "Traduire et rechercher",
    "keywordLabel": "Rechercher dans les journaux par mot-clé",
    "keywordPlaceholder": "Chemin ou message",
    "submit": "Rechercher",
    "level": "Niveau",
    "allLevels": "Tous les niveaux",
    "count": "{{count}} entrées de journal",
    "table": "Journaux des requêtes",
    "columns": {
      "time": "Heure",
      "level": "Niveau",
      "method": "Méthode",
      "path": "Chemin",
      "status": "Statut",
      "duration": "Durée",
      "message": "Message"
    },
    "noMatch": "Aucune entrée ne correspond.",
    "loadError": "Impossible de charger les journaux.",
    "chart": {
      "legendRequests": "Requêtes",
      "legendErrors": "Erreurs serveur (5xx)",
      "max": "max {{count}} / heure",
      "empty": "Aucune requête sur cette période.",
      "tooltipRequests": "{{count}} requêtes",
      "tooltipErrors": "{{count}} erreurs serveur",
      "caption": "Requêtes et erreurs serveur par heure",
      "hour": "Heure"
    }
  },
  "coverage": {
    "title": "Couverture",
    "openNewTab": "Ouvrir dans un nouvel onglet",
    "frame": "Rapport de couverture",
    "missing": "Le rapport de couverture n'a pas encore été généré. Il est créé à chaque déploiement ; en local, lancez {{unit}} puis {{build}}.",
    "note": "Le rapport est un outil pour les développeurs et il est affiché en anglais."
  },
  "home": {
    "title": "Bienvenue",
    "body": "La fonctionnalité principale se trouve ici. Ouvrez le Guide de l'utilisateur depuis le menu ou interrogez l'assistant d'Aide."
  }
};

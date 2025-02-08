import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to ProLoc",
      description: "Blockchain-powered lease management for small landlords.",
      pricing: "Pricing",
      pricingDescription: "Affordable plans for every landlord.",
      blog: "Blog",
      blogDescription: "Read our latest updates and news.",
      contact: "Contact",
      contactDescription: "Get in touch with us for any inquiries.",
      login: "Login",
      startNow: "Start Now",
      allRightsReserved: "All rights reserved.",
    },
  },
  fr: {
    translation: {
      welcome: "Bienvenue sur ProLoc",
      description: "Gestion des baux alimentée par blockchain pour petits propriétaires.",
      pricing: "Tarification",
      pricingDescription: "Des plans abordables pour chaque propriétaire.",
      blog: "Blog",
      blogDescription: "Lisez nos dernières mises à jour et actualités.",
      contact: "Contact",
      contactDescription: "Contactez-nous pour toute question.",
      login: "Connexion",
      startNow: "Commencer",
      allRightsReserved: "Tous droits réservés.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;

import en from "./en";
import ru from "./ru";
import { merge } from "../utils/merge";
import { safeLocalStorage } from "@/app/utils";

//import type { LocaleType } from "./en";
//export type { LocaleType, PartialLocaleType } from "./en";

const localStorage = safeLocalStorage();

const ALL_LANGS = {
  en,
  ru,
};

export type Lang = keyof typeof ALL_LANGS;

export const AllLangs = Object.keys(ALL_LANGS) as Lang[];

export const ALL_LANG_OPTIONS: Record<Lang, string> = {
  en: "English",
  ru: "Русский",
};

const LANG_KEY = "lang";
const DEFAULT_LANG = "ru";

const fallbackLang = ru;
const targetLang = ALL_LANGS[getLang()] as LocaleType;

// if target lang missing some fields, it will use fallback lang string
merge(fallbackLang, targetLang);

export default fallbackLang as LocaleType;

function getItem(key: string) {
  return localStorage.getItem(key);
}

function setItem(key: string, value: string) {
  localStorage.setItem(key, value);
}

function getLanguage() {
  try {
    const locale = new Intl.Locale(navigator.language).maximize();
    const region = locale?.region?.toLowerCase();
    // 1. check region code in ALL_LANGS
    if (AllLangs.includes(region as Lang)) {
      return region as Lang;
    }
    // 2. check language code in ALL_LANGS
    if (AllLangs.includes(locale.language as Lang)) {
      return locale.language as Lang;
    }
    return DEFAULT_LANG;
  } catch {
    return DEFAULT_LANG;
  }
}

export function getLang(): Lang {
  const savedLang = getItem(LANG_KEY);

  if (AllLangs.includes((savedLang ?? "") as Lang)) {
    return savedLang as Lang;
  }

  return getLanguage();
}

export function changeLang(lang: Lang) {
  setItem(LANG_KEY, lang);
  location.reload();
}

export function getISOLang() {
  const isoLangString: Record<string, string> = {
    en: "en-US",
    ru: "ru-RU",
  };

  const lang = getLang();
  return isoLangString[lang] ?? lang;
}

const DEFAULT_STT_LANG = "ru-RU";
export const STT_LANG_MAP: Record<Lang, string> = {
  en: "en-US",
  ru: "ru-RU",
};

export function getSTTLang(): string {
  try {
    return STT_LANG_MAP[getLang()];
  } catch {
    return DEFAULT_STT_LANG;
  }
}

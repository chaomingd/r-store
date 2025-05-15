// src/app.tsx
import { history } from 'dumi';
import React, { useEffect } from 'react';

type Local =
  | string
  | {
      key: string;
      values: string[];
    };
const SUPPORTED_LOCALES: Local[] = [
  'zh-CN',
  {
    key: 'en-US',
    values: ['en', 'en-US', 'en-GB', 'en-AU', 'en-CA', 'en-IN', 'en-NZ'],
  },
];

function getSystemLocale() {
  const lang = navigator.language || (navigator as any).userLanguage;
  const local =  SUPPORTED_LOCALES.find((locale) => {
    if (typeof locale === 'string') {
      return locale === lang;
    }
    return locale.values.includes(lang);
  });
  return local ? (typeof local === 'string' ? local : local.key) : 'zh-CN';
}

function getUrlLocal() {
  const { pathname } = window.location;
  const storageLocale = localStorage.getItem('umi_locale');
  if (storageLocale) {
    return storageLocale;
  }
  const match = pathname.match(/\/(zh-CN|en-US)/);
  return match ? match[1] : '';
}

function App({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const urlLocale = getUrlLocal();
    const systemLocale = getSystemLocale();
    if (!urlLocale && systemLocale !== 'zh-CN') {
      const { pathname, search } = window.location;
      const newUrl = `/${systemLocale}${pathname}${search}`;
      history.replace(newUrl);
      localStorage.setItem('umi_locale', systemLocale);
    }
  }, []);
  return children;
}

export function rootContainer(container: React.ReactNode) {
  return <App>{container}</App>;
}

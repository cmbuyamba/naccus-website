'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('navigation');
  const locale = useLocale();
  const pathname = usePathname();

  const navItems = [
    { key: 'home', href: '/' },
    { key: 'events', href: '/events' },
    { key: 'news', href: '/news' },
    { key: 'gallery', href: '/gallery' },
    { key: 'livestream', href: '/livestream' },
    { key: 'history', href: '/history' },
    { key: 'donate', href: '/donate' },
    { key: 'contact', href: '/contact' },
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'pt', name: 'Português' },
  ];

  return (
    <nav className="bg-primary-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href={`/${locale}`} className="flex-shrink-0">
              <span className="text-xl font-bold">Saint Ignatius of Loyola</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={`/${locale}${item.href}`}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  pathname === `/${locale}${item.href}`
                    ? 'bg-primary-700 text-white'
                    : 'text-primary-100 hover:bg-primary-700 hover:text-white'
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
            
            {/* Language Selector */}
            <div className="relative">
              <select
                className="bg-primary-700 text-white border border-primary-600 rounded px-2 py-1 text-sm"
                value={locale}
                onChange={(e) => {
                  const newLocale = e.target.value;
                  const currentPath = pathname.replace(`/${locale}`, '');
                  window.location.href = `/${newLocale}${currentPath}`;
                }}
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-200 hover:text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary-900">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={`/${locale}${item.href}`}
              className="block px-3 py-2 rounded-md text-base font-medium text-primary-100 hover:text-white hover:bg-primary-700"
              onClick={() => setIsOpen(false)}
            >
              {t(item.key)}
            </Link>
          ))}
          <div className="px-3 py-2">
            <select
              className="bg-primary-700 text-white border border-primary-600 rounded px-2 py-1 text-sm w-full"
              value={locale}
              onChange={(e) => {
                const newLocale = e.target.value;
                const currentPath = pathname.replace(`/${locale}`, '');
                window.location.href = `/${newLocale}${currentPath}`;
              }}
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}

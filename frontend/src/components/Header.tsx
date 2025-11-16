import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuthStore } from '@store/authStore';
import { useContentStore } from '@store/contentStore';

export default function Header() {
  const router = useRouter();
  const { user, logout } = useAuthStore();
  const { preferences, setPreferences } = useContentStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDarkMode(!isDarkMode);
    setPreferences({ theme: isDarkMode ? 'light' : 'dark' });
  };

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <nav className="container-max py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-xl">📰</span>
          </div>
          <span className="hidden sm:inline font-display font-bold text-xl bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Safe News
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="/news"
            className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition font-medium"
          >
            News
          </Link>
          <Link
            href="/finance"
            className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition font-medium"
          >
            Finance
          </Link>
          <Link
            href="/crypto"
            className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition font-medium"
          >
            Crypto
          </Link>
          {user && (
            <Link
              href="/dashboard"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition font-medium"
            >
              Dashboard
            </Link>
          )}
        </div>

        {/* Right Actions */}
        <div className="flex gap-3 items-center">
          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            aria-label="Toggle dark mode"
            title={isDarkMode ? 'Light mode' : 'Dark mode'}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          {/* Auth Buttons */}
          {user ? (
            <div className="flex items-center gap-3">
              <Link
                href="/profile"
                className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm font-medium">{user.name}</span>
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium text-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                href="/login"
                className="px-4 py-2 text-primary-600 dark:text-primary-400 border border-primary-600 dark:border-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition font-medium text-sm"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="hidden sm:inline-block px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition font-medium text-sm"
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
          <div className="container-max py-4 flex flex-col gap-3">
            <Link
              href="/news"
              className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition"
              onClick={() => setIsMenuOpen(false)}
            >
              News
            </Link>
            <Link
              href="/finance"
              className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Finance
            </Link>
            <Link
              href="/crypto"
              className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Crypto
            </Link>
            {user && (
              <Link
                href="/dashboard"
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
            )}
            {!user && (
              <Link
                href="/register"
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
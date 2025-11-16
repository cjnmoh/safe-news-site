import { create } from 'zustand';

interface Preferences {
  theme: 'light' | 'dark' | 'system';
  language: string;
  newsCategories: string[];
  updateFrequency: number;
  showNotifications: boolean;
}

interface ContentState {
  preferences: Preferences;
  favorites: string[];
  watchlist: string[];
  setPreferences: (prefs: Partial<Preferences>) => void;
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  addToWatchlist: (id: string) => void;
  removeFromWatchlist: (id: string) => void;
}

export const useContentStore = create<ContentState>((set) => ({
  preferences: {
    theme: 'system',
    language: 'en',
    newsCategories: ['general', 'business', 'technology'],
    updateFrequency: 5,
    showNotifications: true,
  },
  favorites: [],
  watchlist: [],
  setPreferences: (prefs) =>
    set((state) => ({
      preferences: { ...state.preferences, ...prefs },
    })),
  addFavorite: (id) =>
    set((state) => ({
      favorites: [...state.favorites, id],
    })),
  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((fav) => fav !== id),
    })),
  addToWatchlist: (id) =>
    set((state) => ({
      watchlist: [...state.watchlist, id],
    })),
  removeFromWatchlist: (id) =>
    set((state) => ({
      watchlist: state.watchlist.filter((item) => item !== id),
    })),
}));
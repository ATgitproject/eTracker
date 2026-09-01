/**
 * useAuthStore.js
 * ------------------------------------------------------------------
 * Holds the logged-in user + JWT. Kept deliberately small: OTP
 * request/verify calls live in services/api.js so this store just
 * reflects the resulting session state and persists it.
 * ------------------------------------------------------------------
 */
import { create } from 'zustand';

const STORAGE_KEY = 'fintrack-auth';

const loadPersisted = () => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { user: null, token: null };
  } catch {
    return { user: null, token: null };
  }
};

export const useAuthStore = create((set) => ({
  ...loadPersisted(),

  login: ({ user, token }) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ user, token }));
    set({ user, token });
  },

  logout: () => {
    window.localStorage.removeItem(STORAGE_KEY);
    set({ user: null, token: null });
  },
}));

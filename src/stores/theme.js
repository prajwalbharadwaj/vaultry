import { defineStore } from 'pinia';
import { ref } from 'vue';

const THEME_KEY = 'vaultry-theme';

function applyTheme(value) {
  if (typeof document === 'undefined')
    return;
  const root = document.documentElement;
  if (value === 'dark') {
    root.classList.add('dark');
  }
  else {
    root.classList.remove('dark');
  }
}

export const useThemeStore = defineStore('theme', () => {
  const theme = ref(localStorage.getItem(THEME_KEY) || 'light');

  function setTheme(value) {
    theme.value = value;
    localStorage.setItem(THEME_KEY, value);
    applyTheme(value);
  }

  function toggleTheme() {
    const next = theme.value === 'light' ? 'dark' : 'light';
    setTheme(next);
  }

  function initTheme() {
    applyTheme(theme.value);
  }

  return { theme, setTheme, toggleTheme, initTheme };
});

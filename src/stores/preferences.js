import { defineStore } from 'pinia';
import { ref } from 'vue';

const PREFERENCES_KEY = 'vaultry-preferences';

const defaults = {
  currency: 'USD',
  dateFormat: 'MM/DD/YYYY',
  notifications: true,
};

function loadPreferences() {
  try {
    const stored = localStorage.getItem(PREFERENCES_KEY);
    return stored ? { ...defaults, ...JSON.parse(stored) } : { ...defaults };
  }
  catch {
    return { ...defaults };
  }
}

function savePreferences(prefs) {
  localStorage.setItem(PREFERENCES_KEY, JSON.stringify(prefs));
}

export const usePreferencesStore = defineStore('preferences', () => {
  const preferences = ref(loadPreferences());

  function updatePreferences(updates) {
    preferences.value = { ...preferences.value, ...updates };
    savePreferences(preferences.value);
  }

  function setCurrency(value) {
    preferences.value.currency = value;
    savePreferences(preferences.value);
  }

  function setDateFormat(value) {
    preferences.value.dateFormat = value;
    savePreferences(preferences.value);
  }

  function setNotifications(value) {
    preferences.value.notifications = value;
    savePreferences(preferences.value);
  }

  return {
    preferences,
    updatePreferences,
    setCurrency,
    setDateFormat,
    setNotifications,
  };
});

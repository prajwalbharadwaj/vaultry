import { currencies } from '~/common/utils/constants.js';

const userLocale = navigator.language; // e.g. "en-US" or "en-IN"

export function getCurrencyDetails(currency_code = 'USD') {
  if (currency_code)
    return currencies[currency_code];
  return {};
}

export function formatCurrency(amount) {
  return new Intl.NumberFormat(userLocale, {
    style: 'currency',
    currency: userLocale === 'en-IN' ? 'INR' : 'USD',
  }).format(amount);
}

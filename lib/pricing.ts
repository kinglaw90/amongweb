// ─── Currency configuration ───────────────────────────────────────────────────
// To add a new market: add a key to Currency, add its config to CURRENCIES,
// and add its amounts to every service entry in PRICES below.
// To switch the active currency: update ACTIVE_CURRENCY.
// Future: read ACTIVE_CURRENCY from a URL param, cookie, or user preference.

export type Currency = 'MYR' | 'USD' | 'SGD'

export interface CurrencyConfig {
  code: Currency
  symbol: string
  name: string
  locale: string
}

export const CURRENCIES: Record<Currency, CurrencyConfig> = {
  MYR: { code: 'MYR', symbol: 'RM',  name: 'Malaysian Ringgit',   locale: 'en-MY' },
  USD: { code: 'USD', symbol: '$',   name: 'US Dollar',            locale: 'en-US' },
  SGD: { code: 'SGD', symbol: 'S$',  name: 'Singapore Dollar',     locale: 'en-SG' },
}

// ─── Active currency ──────────────────────────────────────────────────────────
// Change this (or replace with a dynamic resolver) to switch markets.
export const ACTIVE_CURRENCY: Currency = 'MYR'

// ─── Price table ──────────────────────────────────────────────────────────────
// amount: null means "Custom Quote" — no fixed price displayed.
const PRICES = {
  landingPage: {
    MYR: 599,
    USD: 149,
    SGD: 199,
  },
  companyWebsite: {
    MYR: 1499,
    USD: 349,
    SGD: 449,
  },
  ecommerce: {
    MYR: 2999,
    USD: 699,
    SGD: 899,
  },
  cmsWebsite: {
    MYR: 1999,
    USD: 449,
    SGD: 599,
  },
  bookingSystem: {
    MYR: 3499,
    USD: 799,
    SGD: 999,
  },
  crm: {
    MYR: null,
    USD: null,
    SGD: null,
  },
  webApp: {
    MYR: null,
    USD: null,
    SGD: null,
  },
} satisfies Record<string, Record<Currency, number | null>>

export type ServiceKey = keyof typeof PRICES

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Format a numeric amount into a display string, e.g. "RM 1,499" or "Custom Quote". */
export function formatPrice(amount: number | null, currency: Currency = ACTIVE_CURRENCY): string {
  if (amount === null) return 'Custom Quote'
  const { symbol } = CURRENCIES[currency]
  return `${symbol} ${amount.toLocaleString()}`
}

/** Returns the formatted price label for a service in the active (or given) currency. */
export function getServicePrice(
  key: ServiceKey,
  currency: Currency = ACTIVE_CURRENCY,
): { label: string; fromLabel: string; amount: number | null } {
  const amount = PRICES[key][currency]
  const label = formatPrice(amount, currency)
  const fromLabel = amount !== null ? `From ${label}` : label
  return { label, fromLabel, amount }
}

// ─── Convenience exports (active currency) ───────────────────────────────────
export const PRICE = {
  landingPage:     getServicePrice('landingPage'),
  companyWebsite:  getServicePrice('companyWebsite'),
  ecommerce:       getServicePrice('ecommerce'),
  cmsWebsite:      getServicePrice('cmsWebsite'),
  bookingSystem:   getServicePrice('bookingSystem'),
  crm:             getServicePrice('crm'),
  webApp:          getServicePrice('webApp'),
} as const

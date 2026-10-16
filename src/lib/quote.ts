// `.ts` extension is required: the same file is imported by scripts/check-links.mjs
// under plain Node ESM (which resolves literally), while Astro/Vite accepts it too.
import { site } from './content.ts';

export type QuoteFields = {
  name: string;
  phone: string;
  service: string;
  scope: string;
  message: string;
};

type Cfg = Pick<typeof site, 'whatsapp' | 'email' | 'name'>;

/** digits-only normaliser: accepts '+91 98765-43210' → '919876543210' */
export const toWaNumber = (raw: string): string => raw.replace(/\D/g, '');

export const quoteBody = (f: QuoteFields, cfg: Cfg = site): string =>
  [
    `New quote request — ${cfg.name}`,
    `Name: ${f.name}`,
    `Phone: ${f.phone}`,
    `Service: ${f.service}`,
    `Project scope: ${f.scope}`,
    `Notes: ${f.message || '—'}`,
  ].join('\n');

/**
 * Builds both submission paths. `primary` is the one the button uses —
 * WhatsApp when a number is configured, otherwise mailto.
 */
export function buildQuote(f: QuoteFields, cfg: Cfg = site) {
  const body = quoteBody(f, cfg);
  const subject = `Quote request — ${f.service || cfg.name} — ${f.name}`;
  const wa = toWaNumber(cfg.whatsapp);

  const mailto = `mailto:${cfg.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const whatsapp = wa
    ? `https://wa.me/${wa}?text=${encodeURIComponent(body)}`
    : '';

  return {
    subject,
    body,
    mailto,
    whatsapp,
    primary: whatsapp || mailto,
    channel: whatsapp ? ('whatsapp' as const) : ('email' as const),
  };
}

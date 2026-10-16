// The one runnable check. Asserts the quote-link builder —
// the only real logic on the site.
// Run: npm run check   (Node 24 strips TS types natively)

import { buildQuote, toWaNumber } from '../src/lib/quote.ts';

let n = 0;
const ok = (cond, msg) => {
  n += 1;
  if (!cond) {
    console.error(`FAIL  ${msg}`);
    process.exitCode = 1;
  } else {
    console.log(`ok    ${msg}`);
  }
};

const cfg = { whatsapp: '+91 98765-43210', email: 'hi@okan.dev', name: 'Okan Innovations' };
const f = { name: 'Asha', phone: '555 1234', service: 'Interior Design', scope: '2BHK', message: 'Start in March' };

// 1. number normalisation
ok(toWaNumber('+91 98765-43210') === '919876543210', 'wa number strips +, spaces, dashes');

// 2. whatsapp configured → primary is a wa.me deep link with encoded body
const a = buildQuote(f, cfg);
ok(a.channel === 'whatsapp', 'whatsapp becomes the primary channel');
ok(a.primary.startsWith('https://wa.me/919876543210?text='), 'wa.me link carries normalised number');
ok(decodeURIComponent(a.primary.split('text=')[1]).includes('Asha'), 'body round-trips through encodeURIComponent');
ok(!/[\s#&]/.test(a.primary.split('text=')[1]), 'no raw spaces/#/& in encoded query');

// 3. whatsapp NOT configured → falls back to mailto, never a broken wa.me
const b = buildQuote(f, { ...cfg, whatsapp: '' });
ok(b.whatsapp === '', 'empty config yields no whatsapp link');
ok(b.channel === 'email', 'falls back to email');
ok(b.primary.startsWith('mailto:hi@okan.dev?subject='), 'mailto is primary when no whatsapp');
ok(decodeURIComponent(b.primary).includes('Start in March'), 'mailto body contains the notes');

// 4. unicode survives — emoji/newlines must not corrupt the URL
const c = buildQuote({ ...f, message: 'Suite\nbudget ≈ 250K € 🏠' }, cfg);
ok(decodeURIComponent(c.primary.split('text=')[1]).includes('🏠'), 'emoji survives encode/decode');

// 5. empty optional fields don't produce 'undefined'
const d = buildQuote({ name: 'A', phone: '', service: '', scope: '', message: '' }, cfg);
ok(!d.body.includes('undefined'), 'no "undefined" leaked into the body');
ok(d.body.includes('—'), 'empty notes fall back to an em dash placeholder');

console.log(process.exitCode ? `\n${n} checks FAILED` : `\nall ${n} checks passed`);

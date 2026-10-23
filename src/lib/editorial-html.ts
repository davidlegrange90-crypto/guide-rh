const TABLE_HINT = 'Sur petit écran, faites défiler le tableau horizontalement. Le cadre peut aussi recevoir le focus au clavier.';

const escapeAttribute = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

const plainText = (value: string) => value.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

/**
 * Formats controlled editorial HTML before Astro injects it into a page.
 * Tables keep their native semantics and gain the same keyboard-accessible
 * horizontal scroll region as tables rendered directly by Astro templates.
 */
export const formatEditorialHtml = (html: string) => html
  .replace(/\[À (COMPLÉTER|VÉRIFIER)[^\]]*\]/g, (match) => `<span class="placeholder">${match}</span>`)
  .replace(/<table>([\s\S]*?)<\/table>/g, (table) => {
    const caption = table.match(/<caption>([\s\S]*?)<\/caption>/)?.[1];
    const label = escapeAttribute(caption ? plainText(caption) : 'Tableau éditorial');

    return `<p class="table-scroll-hint text-sm text-muted">${TABLE_HINT}</p><div class="table-scroll" role="region" aria-label="${label}" tabindex="0" style="--table-min-width: 48rem">${table}</div>`;
  });

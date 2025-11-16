export async function generateSitemap() {
  const baseUrl = 'https://safe-news-site.com';
  
  const staticPages = [
    '/',
    '/news',
    '/finance',
    '/crypto',
    '/about',
    '/privacy',
    '/terms',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((page) => {
          return `
        <url>
          <loc>${baseUrl}${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>${page === '/' ? 'daily' : 'weekly'}</changefreq>
          <priority>${page === '/' ? '1.0' : '0.8'}</priority>
        </url>`;
        })
        .join('')}
    </urlset>`;

  return sitemap;
}
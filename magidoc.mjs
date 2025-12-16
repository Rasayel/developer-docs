import { fileURLToPath } from 'node:url';
import * as dotenv from 'dotenv';
dotenv.config();
const { pages } = await import(`./pages.mjs?id=${Math.random()}`);

export default {
  introspection: {
    type: 'url',
    url: 'https://api.rasayel.io/api/graphql',
    headers: {
      Authorization: process.env.RASAYEL_API_KEY,
    },
  },
  website: {
    template: 'carbon-multi-page',
    staticAssets: fileURLToPath(new URL('./assets', import.meta.url)),
    options: {
      appTitle: 'Rasayel Developer Documentation',
      appLogo: '/logo-shape.svg',
      appFavicon: '/favicon.ico',
      customStyles: ['/rasayelStyle.css'],
      pages: pages,
      siteMeta: {
        description: 'The API Documentation for Rasayel',
        keywords: 'whatsapp, sms, api, rasayel, graphql, facebook, instagram',
      },
      queryGenerationFactories: {
        Phone: '+353800000000',
        MdString: '**test** __testing__ `testing`', // Markdown
        Timezone: "UTC",
        Url: "http://app.rasayel.io",
        BigInt: 1000
      },
    },
  },
  dev: {
    watch: [
      fileURLToPath(new URL('./pages', import.meta.url)),
      fileURLToPath(new URL('./pages.mjs', import.meta.url)),
    ],
  },
};

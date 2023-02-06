import { fileURLToPath } from 'node:url';
const { pages } = await import(`./pages.mjs?id=${Math.random()}`);

export default {
  introspection: {
    type: 'url',
    url: 'https://api.rasayel.io/api/graphql',
    headers: {
      /**
       * Since Magidoc uses configuration as code, you can perform
       * authentication in this file or use environment variables.
       */
      Authorization: process.env.RASAYEL_API_KEY,
    },
  },
  website: {
    template: 'carbon-multi-page',
    staticAssets: fileURLToPath(new URL('./assets', import.meta.url)),
    options: {
      appTitle: 'Rasayel Developer Documentation',
      appLogo:
        'https://uploads-ssl.webflow.com/62a044a47db17fa8bb8b0b16/62a1b443f4890fd0ed63f442_Group%201682.svg',
      appFavicon: 'https://rasayel.io/favicon.ico',
      pages: pages,
      siteMeta: {
        description: 'The API Documentation for Rasayel',
        keywords: 'whatsapp, sms, api, rasayel, graphql, facebook, instagram',
      },
      queryGenerationFactories: {
        Phone: '+353800000000',
        MdString: '**test** __testing__ `testing`', // Markdown
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

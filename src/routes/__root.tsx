import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import NotFound from '#/components/not-found/NotFound'

import appCss from '../styles/globals.scss?url'

const SITE_URL = 'https://lindseydortch.dev'
const SITE_TITLE =
  'Lindsey Dortch | Senior Software Engineer at the Intersection of Growth, User Experience & Product'
const SITE_IMAGE = `${SITE_URL}/images/og-image.jpg`
const SITE_IMAGE_ALT =
  'Lindsey Dortch, Senior Software Engineer, in front of the Duomo in Florence'
const SITE_DESCRIPTION =
  "Ciao, I'm Lindsey Dortch, a Dallas native who started in marketing and now solves the problems I used to wait on engineers to fix. Today I'm a Senior Software Engineer working at the intersection of growth, user experience, and product."

// Structured data so search engines and AI crawlers can identify who the site is about
const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Lindsey Dortch',
      description: SITE_DESCRIPTION,
      inLanguage: 'en-US',
      publisher: { '@id': `${SITE_URL}/#person` },
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Lindsey Dortch',
      url: SITE_URL,
      jobTitle: 'Senior Software Engineer',
      image: SITE_IMAGE,
      description: SITE_DESCRIPTION,
      knowsAbout: [
        'Full Stack Software Engineering',
        'React',
        'TanStack Start',
        'Next.js',
        'Node.js',
        'Python',
        'PostgreSQL',
        'GraphQL',
        'AWS',
        'Agentic AI',
        'User Experience',
        'Growth Engineering',
      ],
      sameAs: [
        'https://www.linkedin.com/in/lindseydortch/',
        'https://x.com/lindseydortch',
        'https://github.com/lindseydortch',
        'https://www.twitch.tv/lindseydortch',
        'https://dev.to/lindseydortch',
      ],
    },
  ],
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: SITE_TITLE,
      },
      {
        name: 'description',
        content: SITE_DESCRIPTION,
      },
      {
        name: 'author',
        content: 'Lindsey Dortch',
      },
      {
        name: 'robots',
        content: 'index, follow, max-image-preview:large, max-snippet:-1',
      },
      // Open Graph (LinkedIn, Slack, iMessage, etc.)
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Lindsey Dortch' },
      { property: 'og:url', content: SITE_URL },
      { property: 'og:title', content: SITE_TITLE },
      { property: 'og:description', content: SITE_DESCRIPTION },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:image', content: SITE_IMAGE },
      { property: 'og:image:type', content: 'image/jpeg' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: SITE_IMAGE_ALT },
      // X / Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@lindseydortch' },
      { name: 'twitter:creator', content: '@lindseydortch' },
      { name: 'twitter:title', content: SITE_TITLE },
      { name: 'twitter:description', content: SITE_DESCRIPTION },
      { name: 'twitter:image', content: SITE_IMAGE },
      { name: 'twitter:image:alt', content: SITE_IMAGE_ALT },
      {
        'script:ld+json': STRUCTURED_DATA,
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: SITE_URL,
      },
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        href: `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💻</text></svg>`,
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <main>{children}</main>
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}

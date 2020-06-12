module.exports = {
  siteName: 'New Bits On The Blog',
  siteDescription: "How-to's, Ideas, Thoughts - Mostly on web development",
  siteUrl: 'https://blog.zmole.ro',
  titleTemplate: `%s`,
  icon: 'src/favicon.png',

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: [
        ['gridsome-plugin-remark-shiki', {
          theme: 'min-light'
        }]
      ]
    }
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          },
          author: {
            typeName: 'Author',
            create: true,
          },
        },
      },
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-5338311-47'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      },
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Bleda, a Gridsome blog starter',
          feed_url: 'https://blog.zmole.ro/feed.xml',
          site_url: 'https://blog.zmole.ro'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: 'https://blog.zmole.ro/' + node.slug,
          author: node.author,
          date: node.date
        }),
        output: {
          dir: './static',
          name: 'feed.xml',
        },
      },
    },
  ],

  templates: {
    Post: '/:title',
    Tag: '/tag/:id',
    Author: '/author/:id',
  },

  chainWebpack: config => {
    config.module
      .rule('css')
      .oneOf('normal')
      .use('postcss-loader')
      .tap(options => {
        options.plugins.unshift(...[
          require('postcss-import'),
          require('postcss-nested'),
          require('tailwindcss'),
        ])

        return options
      })
  },
}

const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    // Enable sitemap plugin when GraphQL queries works
    // {
    //   resolve: 'gatsby-plugin-sitemap',
    //   options: {
    //     output: '/sitemap.xml',
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             siteUrl
    //           }
    //         }
    //         allSitePage {
    //           edges {
    //             node {
    //               path
    //             }
    //           }
    //         }
    //       }
    //     `
    //   }
    // },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          autoprefixer({
            browsers: ['last 2 versions']
          })
        ]
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.siteurl.com',
        sitemap: 'https://www.siteurl.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  ],
  pathPrefix: '/static'
}

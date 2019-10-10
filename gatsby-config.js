require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: "Julio Díaz Pérez / Diseño",
    author: "Julio Díaz",
    description: "Portafolio web Julio Díaz, basado en Dimension de HTML5 UP"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '',
        background_color: '#003399',
        theme_color: '#003399',
        display: 'minimal-ui',
        icon: 'src/images/j-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}

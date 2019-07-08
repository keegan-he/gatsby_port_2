module.exports = {
  siteMetadata: {
    title: "Keegan Helmbrecht Portfolio",
    author: "Keegan Helmbrecht",
    description: "Portfolio"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // If I need to change above favicon, I must then rebuild the gatsby site in order for change to see effect.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
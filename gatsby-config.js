/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Aldibsi",
    titleTemplate: "%s · Marketing agency",
    description: "Marketing agency in the middeleast web page",
    url: "https://www.aldibsi.com", // No trailing slash allowed!
    image: "/Aldibsi Logo11-08.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}

module.exports = {
  siteMetadata: {
    title: `Gatsby`,
    description: `a blog made from a gatsby workshop`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/blog/`,
      },
    },
  ],
}

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-mongodb',
      options: { dbName: 'zZ', collection: 'Articles'},
    },
  ],
};

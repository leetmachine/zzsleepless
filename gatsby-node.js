const path = require('path');
const _ = require('lodash');

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        return result;
      })
    );
  });

exports.createPages = ({boundActionCreators, graphql}) => {
    const {createPage} = boundActionCreators;

    const createArticlePages = makeRequest(
        graphql,
        `
        {
            allMongodbZzArticles {
              edges {
                node {
                  title
                  slug
                  author
                  tags
                  body
                  createdAt
                  featured
                }
              }
            }
          }
        `
    ).then(result => {
        result.data.allMongodbZzArticles.edges.forEach(({ node }) => {
            if(!node.featured){
                createPage({
                    path: `/articles/${node.slug}`,
                    component: path.resolve('./src/templates/article.js'),
                    context: {
                        id: node.id,
                        slug: node.slug
                    },
                });
            } else {
                createPage({
                    path: `/featured/${node.slug}`,
                    component: path.resolve(`./src/templates/featured/${node.slug}.js`),
                    context: {
                        id: node.id,
                        slug: node.slug
                    },
                });

            }
        });
    });

    const createTagPages = makeRequest(
        graphql,
        `
        {
            allMongodbZzArticles{
              edges {
                node {
                  tags
                }
              }
            }
          }
        `
    ).then(result => {

        let tags = [];
    
        result.data.allMongodbZzArticles.edges.forEach(({ node }) => {
            if(node.tags){
                tags.concat(tags);
            }
        });

        tags = _.uniq(tags);

        tags.forEach(tag => {
            createPage({
                path: `/tags/${tag}`,
                component: path.resolve('./src/templates/tag.js'),
                context: {
                    tag: tag
                },
            })
        })
    });

    /*  if more than one function to return you can use
    *   return Promise.all([getArticles, getUsers, etc...])
    */
    return Promise.all([createArticlePages, createTagPages]);
}
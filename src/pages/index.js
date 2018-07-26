import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => {
  const featuredArticles = data.allMongodbZzArticles;

  return( <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    {featuredArticles.edges.map((edge, i) => {
      return <span key={i}>{edge.node.title}, </span>
    })}
  </div>)
}

export default IndexPage


export const featuredArticleQuery = graphql`
    query allFeaturedArticles{
      allMongodbZzArticles(filter:{featured: {eq: true}}) {
        edges {
          node {
            featured
            title
          }
        }
      }
    }
`

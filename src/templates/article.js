import React from 'react'

export default ({ data }) => {
    const article = data.mongodbZzArticles;
return (
    <div>
        <h1>{article.title}</h1>
        <h3>{article.author}</h3>
        <span>This is the template Article</span>
    </div>);
};

export const articleQuery = graphql`
    query articleById($slug: String!){
        mongodbZzArticles(slug: {eq: $slug}) {
            id
            title
            slug   
            author
            tags
        }
    }
`

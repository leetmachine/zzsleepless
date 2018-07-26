import React from 'react'
import Tags from '../../components/tags'

export default ({ data }) => {
    const article = data.mongodbZzArticles;
    return (
        <div>
            <h1>{article.title}</h1>
            <h3>{article.author}</h3>
            <span>This is Jeff's special featured template</span>
            <Tags tags={article.tags}/>
        </div>
    )
}

export const articleQuery = graphql`
    query articleForJeff($slug: String!){
        mongodbZzArticles(slug: {eq: $slug}) {
            id
            title
            slug   
            author
            tags
        }
    }
`
import React from 'react'

export default ({ data }) => {
    const articles = data.allMongodbZzArticles;
    console.log('tags ', article);

    return (
        <div>
            {articles.map(article => {
                return <span>{article.title}</span>
            })}
        </div>);
};

export const tagQuery = graphql`
    query articlesByTag($tag: String){
        allMongodbZzArticles(filter: {tags: { in: [$tag]}}) {
            edges {
                node {
                    title
                }
            }
        }
    }
`

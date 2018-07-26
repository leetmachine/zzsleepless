import React from 'react'
import Link from 'gatsby-link'

const Tags = ({ tags }) => {
    
    return (
        <div>
            {tags.map((tag, i) => <Link key={i} to={`/tags/${tag}`}>{tag} </Link>)}
        </div>
    )
}

export default Tags
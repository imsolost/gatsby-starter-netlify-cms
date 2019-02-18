import React from 'react'
import { Link } from 'gatsby'

export default class AuthorBio extends React.Component {

  render() {
    const post = this.props.post
    const author = post.frontmatter.author
    // const author = post.frontmatter.author.replace(' ', '-').toLowerCase()

    return (
      <div
        className="content"
        style={{ border: '1px solid #333', padding: '2em 4em' }}
      >
        <p>
          <Link className="has-text-primary" to={post.fields.slug}>
            {post.frontmatter.title}
          </Link>
          <span> &bull; </span>
          <Link to={`/authors/${author}`}>
            {post.frontmatter.author}
          </Link>
          <span> &bull; </span>
          <small>{post.frontmatter.date}</small>
        </p>
        <p>
          {post.excerpt}
          <br />
          <br />
          <Link className="button is-small" to={post.fields.slug}>
            Keep Reading →
          </Link>
          <br />
          <br />
          {tags ? tags.map((tag, i) => {
            const URLtag = tag.replace(' ', '-')
            return (
              <span key={i}> 
                  <Link to={`/tags/${URLtag}`} >{tag}</Link>{i < tags.length - 1 ? ', ' : null}
              </span> 
            ) }) : null}
        </p>
      </div>
    )
  }
}
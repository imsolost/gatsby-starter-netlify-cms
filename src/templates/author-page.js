import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostPreview from '../components/PostPreview'
import profileImage from '../img/profile-blank.jpg'

export default class AuthorPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const author = this.props.pageContext.author
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const authorHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } written by ${author}`
    const postPreviews = posts.map(({ node: post }) => { 
        return (
          <PostPreview post={post} key={post.id} />
      )})

    return (
      <Layout>
        <section className="section">
          <Helmet title={`${author} | ${title}`} />
          <div className="container content">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: '6rem' }}
              >
                <h1 className="has-text-weight-bold is-size-2">{author}</h1>
                {/* <div className="profile-box"> 
                  <img src={profileImage} style={{width: 150}} alt="profile"/>
                  <br></br>
                  This person writes lots of blog posts with lots of pertinent information.
                  The like to write in their freetime.
                  Most of what they write is gibberish.
                  If we had a better profile image of this user, we would utilize is here.
                </div> */}
                <h3 className="title is-size-4 is-bold-light">{authorHeader}</h3>
                {postPreviews}
                <p>
                  <Link to="/authors/">Browse all authors</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export const authorPageQuery = graphql`
  query AuthorPage($author: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { author: { in: [$author] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            author
            template
            date(formatString: "MMMM DD, YYYY")
            tags
          }
        }
      }
    }
  }
`
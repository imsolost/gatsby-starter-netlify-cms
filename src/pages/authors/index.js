// import React from 'react'
// import { kebabCase } from 'lodash'
// import Helmet from 'react-helmet'
// import { Link, graphql } from 'gatsby'
// import Layout from '../../components/Layout'

// const AuthorsPage = ({
//   data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
// }) => (
//   <Layout>
//     <section className="section">
//       <Helmet title={`Authors | ${title}`} />
//       <div className="container content">
//         <div className="columns">
//           <div
//             className="column is-10 is-offset-1"
//             style={{ marginBottom: '6rem' }}
//           >
//             <h1 className="title is-size-2 is-bold-light">Authors</h1>
//             <ul className="taglist">
//               {group.map(tag => (
//                 <li key={tag.fieldValue}>
//                   <Link to={`/Authors/${kebabCase(tag.fieldValue)}/`}>
//                     {tag.fieldValue} ({tag.totalCount})
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   </Layout>
// )

// export default AuthorsPage

// export const tagPageQuery = graphql`
//   query AuthorsQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(limit: 1000) {
//       group(field: frontmatter___authors) {
//         fieldValue
//         totalCount
//       }
//     }
//   }
// `

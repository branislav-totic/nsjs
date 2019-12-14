import React from "react";
import { graphql, Link } from "gatsby";

export const pageQuery = graphql`
  query BlogQuery {
    blog: allFile(filter: { ext: { eq: ".md" } }) {
      items: nodes {
        base
        childMarkdownRemark {
          html
          frontmatter {
            title
            author
            date(fromNow: true)
        }
        excerpt
        id
        }
      }
    }
  }
`;

const Blog = ({ data }) => {
  return (
    <div>
      <Link to="/">Home</Link>
      <div className='blog'>
        {data.blog.items.map(({ childMarkdownRemark }) => (
          <article key={childMarkdownRemark.id}>
            <h4>{childMarkdownRemark.frontmatter.title}</h4>
            <small>{`${childMarkdownRemark.frontmatter.author} and ${childMarkdownRemark.frontmatter.date}`}</small>
            <p>{childMarkdownRemark.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
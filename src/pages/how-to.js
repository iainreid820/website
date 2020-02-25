import React from "react"
import { graphql, Link } from "gatsby"
import Grid from "../components/Grid"
import Layout from "../components/Layout"
import CardTile from "../components/CardTile"
import Title from "../components/Title"

export default ({ data }) => {
  const languages = data.allMarkdownRemark.group.sort((a, b) => a.totalCount < b.totalCount)

  return (
    <Layout>
      <Title>How To</Title>
      <Grid width="4">
        {languages.map((language, i) => (
          <Link key={i} to={`how-to/${language.fieldValue.toLowerCase()}`}>
            <CardTile
              category={language.totalCount + " tutorial" + (language.totalCount > 1 ? "s" : "")}
              title={language.fieldValue}
              actionText="View"
            />
          </Link>
        ))}
      </Grid>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {collection: {eq: "How To"}}}) {
      group(field: frontmatter___category) {
        totalCount
        fieldValue
      }
    }

    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

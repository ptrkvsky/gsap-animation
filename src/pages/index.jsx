import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

import SEO from '../components/seo'

import Projects from '../components/projects/ProjectsContainer'
import placeHolder from '../images/1px.png'

import { LogoTitle } from '../styles/components/titles/logoTitle'

const IndexPage = ({ data }) => (
  <Layout>
    <LogoTitle id="main-title">
      Draw me <br /> a sheep
    </LogoTitle>
    <Projects projects={data.prismic.allProjectss.edges} />
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}
export default IndexPage

export const query = graphql`
  {
    prismic {
      allProjectss {
        edges {
          node {
            name
            background_color
            text_color
            category_list {
              category {
                ... on PRISMIC_Categories {
                  name
                }
              }
            }
            main_image

            _meta {
              uid
            }
          }
        }
      }
    }
  }
`

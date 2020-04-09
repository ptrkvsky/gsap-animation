import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import kusanagi from '../images/kusanagi.jpg'

import { LogoTitle } from '../styles/components/titles/logoTitle'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <LogoTitle>Ghost in the shell</LogoTitle>
    <img
      className="illu"
      src={kusanagi}
      alt="kusanagi"
      title="kusanagi"
      style={{
        position: 'absolute',
        top: 0,
        right: '24px',
        maxHeight: '100vh',
      }}
    />

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
      repellat? Animi corporis cum provident? Officiis nihil quis odit. Ea,
      nulla dolorum nihil similique modi sit adipisci mollitia qui sint
      inventore.
    </p>
  </Layout>
)

export default SecondPage

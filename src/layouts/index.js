import React from 'react'
import { withPrefix } from 'gatsby'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

// Components
import Header from '../components/Header'
import Footer from '../components/Footer'

// Styles
import '../styles/master.scss'

const Layout = ({ children }) => (
  <div>
    <Helmet>
      <title>Site name</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="Site name description" />
      <meta name="keywords" content="Site, name, description" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />

      {/* Open Graph */}
      <meta property="og:image:width" content="279" />
      <meta property="og:image:height" content="279" />
      <meta property="og:description" content="Site name description" />
      <meta property="og:title" content="Site name" />
      <meta property="og:image" content="https://siteurl.com/og-image.png" />
      <meta property="og:url" content="https://siteurl.com/og-image.png" />

      {/* Twitter */}
      <meta name="twitter:domain" content="https://siteurl.com/og-image.png" />
      <meta name="twitter:card" content="photo" />
      <meta name="twitter:site" content="@sitename" />
      <meta name="twitter:creator" content="@sitename" />
      <meta name="twitter:image" content="https://siteurl.com/og-image.png" />
      <meta name="twitter:title" content="Site name" />
      <meta name="twitter:description" content="Site name description" />

      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />

      {/* Favicons */}
      <link rel="apple-touch-icon" sizes="180x180" href={withPrefix('/apple-touch-icon.png')} />
      <link rel="icon" type="image/png" sizes="32x32" href={withPrefix('/favicons/favicon-32x32.png')} />
      <link rel="icon" type="image/png" sizes="16x16" href={withPrefix('/favicons/favicon-16x16.png')} />
      <link rel="mask-icon" href={withPrefix('/favicons/safari-pinned-tab.svg')} color="#ab56ff" />
      <link rel="shortcut icon" href={withPrefix('/favicon.ico')} />

      {/* Config files */}
      <link rel="manifest" href={withPrefix('/favicons/site.webmanifest')} />
      <meta name="msapplication-config" content={withPrefix('/favicons/browserconfig.xml')} />
    </Helmet>

    <Header />

    {children}

    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout

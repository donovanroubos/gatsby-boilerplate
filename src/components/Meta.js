import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const Meta = ({
  metaData: {
    title,
    image
  }
}) => (
  <Helmet>
    {/* General tags */}
    <title>{`Site name ${title ? `- ${title}` : ''}`}</title>

    {/* OpenGraph tags */}
    {title && <meta property="og:title" content={title} />}
    {image && <meta property="og:image" content={image} />}
    {image && <meta property="og:image:width" content={image ? '800' : '1198'} />}
    {image && <meta property="og:image:height" content={image ? '400' : '627'} />}

    {/* Twitter Card tags */}
    {title && <meta name="twitter:title" content={title} />}
    {image && <meta name="twitter:image" content={image} />}
  </Helmet>
)

Meta.propTypes = {
  metaData: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string
  })
}

export default Meta

import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'transparent',
      marginBottom: '1.5rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: '100%',
        padding: '1.45rem 5rem',
        textAlign: 'center',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#000000',
            textDecoration: 'none',
          }}
        >
          {/* {siteTitle} */}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header

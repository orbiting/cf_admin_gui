import React from 'react'
import { css } from 'glamor'
import { compose } from 'react-apollo'
import { withRouter } from 'next/router'

import {
  createContainer,
  createTile,
} from './Grid'
import Me from '../Auth/Me'
import {
  BrandMark,
  Interaction,
  colors,
} from '@project-r/styleguide'
import routes from '../../server/routes'
const { Link } = routes

const link = css({
  textDecoration: 'none',
  color: '#000',
  ':visited': {
    color: '#000',
  },
  ':hover': {
    color: colors.secondary,
  },
  '[disabled]': {
    color: colors.primary,
  },
})

const Header = compose(
  createTile(
    {
      flex: '0 0 80px',
    },
    {
      style: {
        borderBottom: `1px solid ${
          colors.divider
        }`,
      },
    }
  ),
  createContainer({
    direction: 'row',
    justifyContent: 'stretch',
  })
)('header')

const HeaderSection = compose(
  createTile(),
  createContainer({
    direction: 'column',
    justifyContent: 'center',
  })
)('div')

const logoStyles = {
  width: '50px',
  marginLeft: '5px',
  display: 'inline-block',
}

const navLinkStyles = {
  display: 'inline-block',
  marginRight: '12px',
  cursor: 'pointer',
}

export default withRouter(
  ({ router, ...props }) => {
    const { pathname } = router
    return (
      <Header {...props}>
        <HeaderSection flex="0 0 70px">
          <span style={logoStyles}>
            <BrandMark />
          </span>
        </HeaderSection>
        <HeaderSection flex="1 1 auto">
          <Interaction.H2>Admin</Interaction.H2>
          <nav>
            <Link route="users">
              <a
                className={`${link}`}
                style={navLinkStyles}
                disabled={pathname === '/users'}
              >
                Users
              </a>
            </Link>
            <Link route="payments">
              <a
                className={`${link}`}
                style={navLinkStyles}
                disabled={
                  pathname === '/payments'
                }
              >
                Payments
              </a>
            </Link>
            <Link route="postfinance-payments">
              <a
                className={`${link}`}
                style={navLinkStyles}
                disabled={
                  pathname ===
                  '/postfinance-payments'
                }
              >
                Postfinance Payments
              </a>
            </Link>
            <Link route="merge-users">
              <a
                className={`${link}`}
                style={navLinkStyles}
                disabled={
                  pathname === '/merge-users'
                }
              >
                Users zusammenführen
              </a>
            </Link>
          </nav>
        </HeaderSection>
        <HeaderSection flex="0 0 200px">
          <Me />
        </HeaderSection>
      </Header>
    )
  }
)

import stylesWrapper from '../hoc/stylesWrapper';
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Link = ({ active, children, setFilter, styles }) =>
  (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      className={classnames({ selected: active })}
      style={styles}
      onClick={() => setFilter()}
    >
      {children}
    </a>
  )

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  setFilter: PropTypes.func.isRequired
}

export default stylesWrapper(Link)

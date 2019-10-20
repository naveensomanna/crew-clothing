import React from 'react'
import { withRouter } from 'react-router-dom'
import './MenuItem.styles.scss'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
      >
        <div className='content'>
          <h1 className='title'>{title.toUpperCase()}</h1>
          <span className='sub-title'>Shop Now</span>
        </div>
      </div>
    </div>
  )
}
export default withRouter(MenuItem)

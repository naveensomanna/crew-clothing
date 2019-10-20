import React from 'react'
import './MenuItem.styles.scss'

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className='content'>
          <h1 className='title'>{title.toUpperCase()}</h1>
          <span className='sub-title'>Shop Now</span>
        </div>
      </div>
    </div>
  )
}
export default MenuItem
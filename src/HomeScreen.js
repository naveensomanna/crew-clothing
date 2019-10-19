import React from 'react'
import './homeScreen.styles.scss'
const HomeScreen = () => {
  return (
    <div className='home-screen'>
      <div className='container-directory'>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Hats</h1>
            <span className='sub-title'>Shop Now</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Jackets</h1>
            <span className='sub-title'>Shop Now</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Sneakers</h1>
            <span className='sub-title'>Shop Now</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Womens</h1>
            <span className='sub-title'>Shop Now</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Mens</h1>
            <span className='sub-title'>Shop Now</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomeScreen

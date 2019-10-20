import React from 'react'
import SHOP_DATA from './ShopData'
import CollectionPreview from '../../Components/collectionPreview/CollectionPreview'

class Shop extends React.Component {
  state = {
    collections: SHOP_DATA
  }
  render () {
    const { collections } = this.state
    console.log(collections)
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollections }) => (
          <CollectionPreview key={id} {...otherCollections} />
        ))}
      </div>
    )
  }
}

export default Shop

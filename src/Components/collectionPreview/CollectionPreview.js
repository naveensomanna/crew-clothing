import React from 'react'
import CollectionItem from '../collectionItem/CollectionItem'

const CollectionPreview = ({ title, items }) => {
  console.log(title, items)
  return (
    <div className='collection-preview'>
      <h1>{title}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherCollection }) => (
            <CollectionItem key={id} {...otherCollection} />
          ))}
      </div>
    </div>
  )
}
export default CollectionPreview

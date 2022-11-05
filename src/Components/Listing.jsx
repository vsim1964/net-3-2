import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

function Listing({ items }) {
  if (items.length === 0) {
    return null
  }

  return (
      <div className="item-list">
        {items.map((item) => <Item item={item} key={item.listing_id} />)
        }
      </div>
  )
}

Listing.defaultProps = {
  items: []
}

Listing.propTypes = {
  data: PropTypes.array
}

export default Listing


// for (let i = 0; i < items.length; i++) {
//   if (items[i].title.length > 50) {
//     items[i].title = items[i].title.substring(0, 50) + '...';
//   }
// }

import React from 'react';

export default function Listing(props) {
  const {items} = props;

    let color = '';
    if (items.quantity <= 10) {
      color = 'item-quantity level-low';
    } else if (items.quantity > 10 && items.quantity < 100) {
      color = 'item-quantity level-medium';
    } else if (items.quantity > 100) {
      color = 'item-quantity level-high';
    }

  return (
      <div className="item-list">
        {items.map(({listing_id, url, MainImage, title, currency_code, price, quantity}) => (
            <div className="item" key={listing_id}>
              <div className="item-image">
                <a href={url}>
                  <img src={MainImage.url_570xN} alt="Image"/>
                </a>
              </div>
              <div className="item-details">
                <p className="item-title">{title}</p>
                <p className="item-price">{currency_code}{price}</p>
                <p className={color}>{quantity} left</p>
              </div>
            </div>
        ))}
      </div>
  );
}


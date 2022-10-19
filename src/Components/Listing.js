import React from 'react';

export default function Listing(props) {
  const {items, className} = props;

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
                <p className={className}>{quantity} left</p>
              </div>
            </div>
        ))}
      </div>
  );
}

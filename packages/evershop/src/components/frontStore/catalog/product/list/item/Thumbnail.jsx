import PropTypes from 'prop-types';
import React from 'react';
import '@components/frontStore/catalog/product/list/item/Thumbnail.scss';
import ProductNoThumbnail from '@components/common/ProductNoThumbnail';
import './Thumbnail.scss'
function Thumbnail({ url, imageUrl, alt }) {
  return (
    <div className="product-thumbnail-listing ">
      {imageUrl && (
        <a href={url} className='link'>
          <img href={url} src={imageUrl} alt={alt} width={100} height={100}  />
       </a>
      
      )}
      {!imageUrl && (
        <a href={url}>
          <ProductNoThumbnail width={100} height={100} />
        </a>
      )}
    </div>
  );
}

Thumbnail.propTypes = {
  alt: PropTypes.string,
  imageUrl: PropTypes.string,
  url: PropTypes.string
};

Thumbnail.defaultProps = {
  alt: '',
  imageUrl: '',
  url: ''
};

export { Thumbnail };

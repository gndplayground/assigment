import React from 'react';
import {Link} from 'react-router';
import format from 'format-number';

const Product = ({id, name, thumb, price, priceSale}) => {

    const formatPrice = format({suffix: ' đ', integerSeparator: '.'});

    return (
        <Link to={`/product/${id}`}>
            <div className="product">
                {priceSale ? <span className="product__discount">-{(100  - priceSale / price * 100).toFixed(0) + ' %'}</span> : ''}
                <img className="product__thumb img-responsive" src={thumb}/>
                <span className="product__title">{name}</span>
                <div className="product__price-box">
                    {priceSale ? <span className="product__price-sale">{formatPrice(priceSale)}</span> : ''}
                    <span className={`product__price ${priceSale ? 'is-discount' : ''}`}>{formatPrice(price)}</span>
                </div>
            </div>
        </Link>
    )
};

Product.propTypes = {
    name: React.PropTypes.string.isRequired,
    thumb: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired,
    priceSale: React.PropTypes.number.isRequired,
    id: React.PropTypes.number.isRequired,
};

export default Product;

import './product-detail.scss';
import React from 'react';
import format from 'format-number';

class ProductDetail extends React.Component {

    render() {

        const formatPrice = format({suffix: ' đ', integerSeparator: '.'});

        return (
            <div className="product-detail">
                <div className="container">
                    <h2 className="product-detail__title">{this.props.name}</h2>
                    <span className="product-detail__brand">Nhãn hiệu: <strong>{this.props.brand}</strong></span>
                    <div className="product-detail__price-box">
                        {this.props.priceSale ? <span className="product-detail__price-sale">{formatPrice(this.props.priceSale)}</span> : ''}
                        <span className={`product-detail__price ${this.props.priceSale ? 'is-discount' : ''}`}>{formatPrice(this.props.price)}</span>
                    </div>
                    <img className="img-responsive product-detail__thumb" src={this.props.thumb}/>
                    <p>Bảo hành: <b>{this.props.guarantee}</b> tháng</p>
                    <p className="product-detail__description">
                        {this.props.description}
                    </p>
                </div>
            </div>
        )
    }
}

ProductDetail.propTypes = {
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    thumb: React.PropTypes.string.isRequired,
    brand: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired,
    priceSale: React.PropTypes.number.isRequired,
    guarantee: React.PropTypes.number.isRequired,
};

export default ProductDetail;
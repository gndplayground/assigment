import './list.scss';
import './product.scss';
import React from 'react';
import Product from './Product';

class ListProduct extends React.Component {

    render() {
        return (
            <div className="list-product">
                <h2 className="list-product__title">{this.props.title}</h2>
                <div className="row product-row">
                    {
                        this.props.products.map((product) => {
                            return (
                                <div className="col-sxs-6 col-xs-4" key={product.id}>
                                    <Product {...product}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

ListProduct.propTypes = {
    title: React.PropTypes.string.isRequired,
    products: React.PropTypes.array.isRequired
};
export default ListProduct;
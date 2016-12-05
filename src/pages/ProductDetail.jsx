import React from 'react';
import {connect} from 'react-redux';
import {ProductDetail} from '../components/ProductDetail';
import {Link} from 'react-router';


const mapStateToProps = (state) => {

    return {
        product: state.productDetail
    }
};

class ProductDetailPage extends React.Component {

    render() {
        return (
            <div className="page-product-detail">
                <div className="container">
                    <Link to="/"><button className="btn btn-primary">Về trang chủ</button></Link>
                </div>
                <ProductDetail {...this.props.product}/>
            </div>

        )
    }
}

export default connect(mapStateToProps, null)(ProductDetailPage);
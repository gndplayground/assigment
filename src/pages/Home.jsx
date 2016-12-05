import React from 'react';
import {fetchAPI} from '../utilities/api/fetchAPI';
import ListProduct from '../components/Products/ListProduct';

class Home extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        fetchAPI('assets/mock/newProduct.json').then((data)=>{
            this.setState({
                products: data
            })
        });
    }

    render() {
        return (
            <div className="home">
                <div className="container">
                    <ListProduct products={this.state.products} title="Sản phẩm mới"/>
                </div>
            </div>
        )
    }
}

Home.propTypes = {
    children: React.PropTypes.node,
};

export default Home;
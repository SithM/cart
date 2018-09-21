import React, { Component } from 'react';
import ProductList from '../../components/UserView/ProductList';
import ProductItem from '../../components/UserView/ProductItem';
import { connect } from 'react-redux';
import { actFetchProductsRequest } from '../../actions';
import './../../css/UserView.css';
import { Link } from 'react-router-dom';

class UserView extends Component {

    componentDidMount() {
        this.props.fetchAllProducts();
    }

    render() {
        var { products } = this.props;
        var value = 0
        products.map((product) => {
            if(product.amount > 0){
                value++;
            }
        })
        return (
            <div className="container">

                <h3 className="text-center ">Hello Monochrome
                    <Link to="/user/cart" >
                        <i className="fas fa-shopping-cart float-right iconSize"> Cart <strong className="bg-danger pad">{value}</strong> </i>
                    </Link>
                </h3>
                <div className="container">
                    <ProductList product={products}>
                        {this.showProducts(products)}
                    </ProductList>
                </div>

            </div>
        );
    }

    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem
                    key={index}
                    product={product}
                    index={index}
                    onAddToCart={this.onAddToCart}
                />
            })
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserView);

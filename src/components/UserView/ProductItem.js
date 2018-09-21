import React, { Component } from 'react';
import './../../css/productItemUser.css';
import { connect } from 'react-redux';
import {actAddToCartRequest} from './../../actions';

class ProductItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            price: '',
            quantity: '',
            image: '',
            amount: ''
        }
    }

    onAddToCart = (id) => {  
        var { product } = this.props;
        var data = {
            id : product.id,
            name: product.name,
            price: product.price,
            quantity: product.quantity,
            image: product.image,
            amount: 1
        };
        this.props.onAddToCart(data);
    }

    render() {
        var { product } = this.props;
        if (product.quantity > 0) {
            var setName = '';
            if (product.name.length > 20)
                setName = product.name.substring(0, 20) + "...";
            else
                setName = product.name.substring(0, product.name.length);
            return (
                <div className=" col-sm-3 myList" >
                    <div className="shadow p-3 mb-5 rounded card bgGray search" title={product.name}>
                        <img className="card-img-top mx-auto d-block img-fluid " src={product.image} alt="Card image" style={{ height: '150px' }} />
                        <div className="card-body" >
                            <p className="card-title">
                                <b className="text-left">{setName}</b>
                            </p>
                            <p className="card-title ">
                                Price: <b className=" text-success ">{product.price} VNĐ</b><br></br>
                                Quantity : <b className=" text-success ">{product.quantity}</b>
                            </p>
                            <p className="text-success text-center" style={{ cursor: 'pointer' }} onClick={() => this.onAddToCart(product.id)} > <i className="fas fa-cart-plus"></i> Add To Cart</p>
                        </div>
                    </div>
                </div>
            );
        } else {return ('')}

    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddToCart : (product) => {
            dispatch(actAddToCartRequest(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actAddToCartRequest } from '../../actions';
class Carts extends Component {

    onPay = () => {
        var { products } = this.props;
        products.map((product) => {
            var data = {
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: product.quantity - product.amount,
                image: product.image,
                amount: 0
            }
            this.props.onPay(data);
        });
        alert("Success!");
    }

    render() {
        var { products } = this.props;
        var total = 0;
        products.map((cart) => {
            total += cart.price * cart.amount
        });
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9">
                        {this.props.children}
                    </div>
                    <div className={`col-sm-2 border border-secondary rounded ml-2 ${total > 0 ? '' : 'd-none'}`}>
                        <p><b>Total: {total} VNĐ</b></p>
                        <button type="button" className="btn btn-success" onClick={this.onPay}>Pay</button>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPay: (products) => {
            dispatch(actAddToCartRequest(products));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carts);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actAddToCartRequest } from './../../actions';

class ViewCart extends Component {    

    onMinus = () => {
        var { product } = this.props;
        var data = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: product.quantity,
            image: product.image,
            amount: product.amount - 1
        }
        this.props.onAddToCart(data);
    }

    onPlus = () => {
        var { product } = this.props;
        var data = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: product.quantity,
            image: product.image,
            amount: product.amount + 1
        }
        this.props.onAddToCart(data);
    }

    onDelete = (id) => {
        //eslint-disable-next-line
        if (confirm('Bạn chắc chắn muốn xóa đơn hàng id : ' + id + ' ?')) {
            var { product } = this.props;
            var data = {
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: product.quantity,
                image: product.image,
                amount: 0
            }
            this.props.onAddToCart(data);       
        }
    }

    render() {
        var { product } = this.props;
        var nsx = null;
        if (!nsx) nsx = "Monochrome"
        return (
            <div className="row border border-secondary rounded mb-2 ">

                <div className=" col-md-3 justify-content-start">
                    <img className="mx-auto d-block img-fluid" src={product.image} style={{ height: '110px' }}></img>
                </div>

                <div className="col-md-6 justify-content-center align-self-center" >
                    <h5><b className="text-success">{product.name}</b></h5>
                    <p>Producer: <strong className="text-success">{nsx}</strong><br></br>
                       Price: <strong className="text-success">{product.price} VNĐ</strong><br></br>
                       Quantity: <strong className="text-danger">{product.quantity-product.amount === 0 ? 'Hết Hàng' : product.quantity-product.amount}  </strong>
                    </p>
                </div>

                <div className=" col-md-3 justify-content-end align-self-center">
                    <nav aria-label="Page navigation example ">
                        <ul className="pagination mt-2">
                            <li className={`page-item ${product.amount === 1 ? 'disabled' : ''}`}>
                                <label className="page-link" onClick={() => this.onMinus(product.amount)}>
                                    <i  className="fas fa-minus text-danger"></i>
                                </label>
                            </li>
                            <li className="page-item">
                                <span className="page-link text-dark"><b>{product.amount}</b></span>
                            </li>
                            <li className={`page-item ${product.amount < product.quantity ? ' ' : 'disabled'}`}>
                                <label className="page-link" onClick={() => this.onPlus(product.amount)}>
                                    <i className="fas fa-plus text-success"></i>
                                </label>
                            </li>
                        </ul>
                        <p><b>Tạm Tính: <strong className="text-success">{product.price * product.amount} VNĐ</strong></b><br></br>
                            <span><a onClick={() => this.onDelete(product.id)}><b className="text-danger text-center">---Delete---</b></a></span>
                        </p>
                    </nav>

                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCartRequest(product));
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCart);
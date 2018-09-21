import React, { Component } from 'react';
import ProductList from './ProductList';
import ProductItem from './ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchProductsRequest, actDeleteProductRequest } from '../../actions';
import $ from 'jquery';

class AdminView extends Component {

    componentDidMount() {
        this.props.fetchAllProducts();
        $(document).ready(function(){
            $("#myInput").on("keyup", function() {
              var value = $(this).val().toLowerCase();
              $("#myTable tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
              });
            });
          });
    }

    onDelete = (id) => {
        this.props.onDeleteProduct(id);
    }

    render() {
        var { products } = this.props;

        return (
            <div className="container">
                <h3 className="text-center">Hello Admin</h3>
                <div className="container">
                    <ProductList product={products}>
                        {this.showProducts(products)}
                    </ProductList>
                    <Link to="/admin/add-products" className="btn btn-info">Add Product</Link>
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
                    onDelete={this.onDelete}
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
        },
        onDeleteProduct: (id) => {
            dispatch(actDeleteProductRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminView);

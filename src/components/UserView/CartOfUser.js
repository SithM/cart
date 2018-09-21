import React,{Component} from 'react';
import ViewCart from './../../components/UserView/ViewCart';
import Carts from './../../components/UserView/Carts';
import { connect } from 'react-redux';
import { actFetchProductsRequest} from '../../actions';

class CartOfUser extends Component{

    componentDidMount() {
        this.props.fetchAllProducts();
    }

    render () {
        var {products} = this.props;
        var value = 0;
        products.map((product) => {
            if(product.amount > 0){
                return value++;
            }else return value;
        })
        return (
            <div className="container">
                <h3 className="text-center text-danger">
                    {value > 0 ? `WOW ... Bạn Có ${value} Sản Phẩm Chưa Thanh Toán` : 'Bạn Không Có Sản Phẩm Nào Trong Giỏ Hàng!'} </h3>               
                <div className="container">
                    <Carts products={products}>
                        {this.showData(products)}
                    </Carts>
                </div>
                
            </div>
            
        );
    }

    showData = (products) => {
        var result = null;
        if(products.length > 0){
            result = products.map((product,index) => {
                if(product.amount > 0)
                    return  <ViewCart 
                            key={index}
                            product = {product}
                            index = {index}
                            ></ViewCart>
                else return '';            
            });
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartOfUser);
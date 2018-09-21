import React, { Component } from 'react';
import './../../css/add.css';
import { actAddProductRequest, actEditProductRequest, actUpdateProductRequest } from '../../actions';
import { connect } from 'react-redux';
import  {Link } from 'react-router-dom';


class AddProducts extends Component {

    constructor(props){
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
    
    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditProduct(id);
        }
        
    }

    componentWillReceiveProps(nextProps){    
        if(nextProps && nextProps.EditProduct){
            var {EditProduct} = nextProps;
            this.setState({
                id : EditProduct.id,
                name : EditProduct.name,
                price : EditProduct.price,
                quantity : EditProduct.quantity,
                image: EditProduct.image
            });
        }
        
    }

    onSave = (e) => {   
        var randomstring = require("randomstring");
        e.preventDefault();
        var {id, name, price, quantity,image } = this.state;
        var {history} = this.props;
        var product = {
            id : id,
            name : name,
            price : price,
            quantity : quantity,
            image : image
        };
        if(id){
            this.props.onUpdateProduct(product);
        }else {
                product.id = randomstring.generate(8);
                this.props.onAddProduct(product);    
        }
        
        history.goBack();
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });   
    }

    render() {
        var {name, price, quantity,image} = this.state;
        return (
            <div className="container mgtop">
                <div className="row justify-content-center">
                    <div className="card">
                        <div className="card-header text-center" >Add Product</div>
                        <div className="card-body">
                            <form onSubmit={this.onSave}>
                                <div className="form-group">
                                    <label>Name of product:</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="name"
                                        onChange={this.onChange}
                                        value={name}
                                    />

                                </div>
                                <div className="form-group">
                                    <label>Price:</label>
                                    <input 
                                        type="number" 
                                        className="form-control"
                                        name="price"
                                        onChange={this.onChange} 
                                        value={price}
                                    />

                                </div>
                                <div className="form-group">
                                    <label>Quantity:</label>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        name="quantity"
                                        onChange={this.onChange}
                                        value={quantity}
                                    />

                                </div>
                                <div className="form-group">
                                    <label>Image:</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="image"
                                        onChange={this.onChange}
                                        value={image}
                                    />

                                </div>
                                <div className="container">
                                    <span className="row justify-content-start float-left">
                                    <button type="submit" className="btn btn-success">Save</button>
                                    </span>
                                    
                                    <Link to="/admin-view" className="row justify-content-end float-right">
                                        <button type="button" className="btn btn-danger">Cancel</button>
                                    </Link>
                                </div>  
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        EditProduct : state.EditProduct
    }
}

const mapDispatchToProps = (dispatch, props ) => {
    return{
        onAddProduct : (product) => {
            dispatch(actAddProductRequest(product));
        },
        onEditProduct : (id) => {
            dispatch(actEditProductRequest(id));
        },
        onUpdateProduct : (product) => {
            dispatch(actUpdateProductRequest(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProducts);
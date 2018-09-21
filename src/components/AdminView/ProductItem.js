import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
class ProductItem extends Component {

    onDelete = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            this.props.onDelete(id);
        }
    }

    render() {
        var { product } = this.props;
        var bg = null;
        var status = null;
        if(product.quantity <= 0){
             bg = 'bg-dark  text-white';
             status = 'Hết hàng';
        }
            else if(product.quantity <= 10) 
                {
                    bg = 'bg-warning';
                    status = 'Sắp hết hàng';
                }
            else {bg = 'bg-success';
                 status = 'Còn hàng';}
        return (
            <tr>
                <th scope="row">{product.id}</th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>
                    <label
                        className={bg}>
                        {status}
                    </label>
                </td>
                <td>
                    <span>
                        <i className="fas fa-trash" onClick={() => this.onDelete(product.id)}></i>
                        &nbsp;&nbsp;
                        <Link to={`/admin/${product.id}/edit-products`} >
                            <i className="fas fa-pencil-alt"></i>
                        </Link> 
                    </span>
                </td>
            </tr>
        );
    }

}



export default ProductItem;
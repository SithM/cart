import React, { Component } from 'react';

class ProductList extends Component {

    constructor(props){
        super(props);
        this.state = {
            taskTemp : '',
            sortBy: -1
        }
    }

    setDefault = () => {
        this.setState({
            taskTemp: ''
        });
    }


    render() {
        return (
            <table className="table table-hover" >
                <thead>
                    <tr className="table-active">
                        <th scope="col">No.</th>
                        <th scope="col" onClick={this.sortProducts}>Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Status</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody id="myTable">
                    {this.props.children}
                </tbody>
            </table>
        );
    }

}

export default ProductList;
import React, { Component } from 'react';

class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taskTemp: ''
        }
    }

    setDefault = () => {
        this.setState({
            taskTemp: ''
        });
    }

    render() {
        return (
            <div className="row">
                {this.props.children}
            </div>

        );
    }
}

export default ProductList;
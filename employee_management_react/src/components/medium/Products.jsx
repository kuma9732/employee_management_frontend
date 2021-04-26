import React, { Component } from 'react';
import styled from 'styled-components';
import Egoist from '../../images/egoist_2.jpg'

class Products extends Component {
    render() {
        return (
            <ProductsCSS>
                <div className="container">
                    
                </div>
            </ProductsCSS>
        );
    }
}

const ProductsCSS = styled.div`
.container {
    background-image: url(${Egoist});
    background-size: cover;
    background-position: center;

    background-position: top center;
    background-repeat: repeat;

    height: 400px;
    color: #fff;
    padding: 15px 0;
    box-sizing: border-box;
    text-align: center;
    padding-top: 150px;
    margin: 0;
    width :100%;
}
`;

export default Products;
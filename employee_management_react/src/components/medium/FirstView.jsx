import React, { Component } from 'react';
import styled from 'styled-components';
import Egoist from '../../images/egoist_1.jpg';

class FirstView extends Component {
    render() {
        return (
            <FirstViewCSS>
                <section id="main-visual">    
                </section> 
            </FirstViewCSS>
        );
    }
}
const FirstViewCSS = styled.div`
#main-visual{
    background-image: url(${Egoist});
    // background-size: cover;
    background-position: top center;
    height: 500px;
    color: #fff;
    // padding: 15px;
    box-sizing: border-box;
    text-align: center;
    padding-top: 150px;
}
`;

export default FirstView;
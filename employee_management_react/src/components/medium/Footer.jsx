import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {

    render() {
        return (
            <FooterCss>
                <footer className = "footer">
                    <span>
                        All Rights Reserved 2021
                    </span>
                </footer>
            </FooterCss>
        );
    }
}

const FooterCss = styled.div`
.footer {
    bottom: 0;
    width: 100%;    
    height: 80px;
    text-align: center;
    line-height: 80px;
    color: #fff;
    background: #111;
}
`;

export default Footer;
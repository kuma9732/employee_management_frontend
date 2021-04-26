import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <HeaderCSS>
                <header>
                    <nav>
                        <div className="logo">
                            <p><Link to="/">Employee Management App</Link></p>
                        </div>
                        <div className="page-link">
                            <ul>
                                <li><span><Link to="/About">About</Link></span></li>
                                <li><span><Link to="/IndexEmployee">Employee</Link></span></li>
                                <li><span><Link to="/Meeting">Meeting</Link></span></li>
                                <li><span><Link to="/LogOut">LogOut</Link></span></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </HeaderCSS>
        )
    }
}

const HeaderCSS = styled.div`
:root{
    --body-font: century, "Noto Sans JP", sans-serif;
    --background-color: #fff;
    --secondary-color: rgb(185, 183, 233);
}

header {
    color: #fff;
    background: #111;
    height: 80px;
    width: 100%;
}

header a {
    color: #000;
    line-height: 80px;
    font-weight: 600;
    font-size: 16px;
    color: #fff;
}

header nav {
    display: flex;
    line-height: 80px;
    height: 80px;
}

header .logo {
    padding-left: 50px;
}

header .page-link {
    padding: 0;
    // padding-left: 20px;
    // background-color: #fff;
    margin: 0 0 0 auto;
    border: none;
}

header .page-link ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    background: #111;
    margin:0;
    padding:0;
    list-style:none;
    font-size: 0;
    vertical-align: bottom;
}

header .page-link ul li {
    display: table-cell;
    padding-right: 25px;
    list-style:none;
    vertical-align: bottom;
}
`;

export default Header;
import React from 'react';
import styled from 'styled-components';
import Egoist from '../../images/egoist_3.jpg';

const About = () => {
    return (
        <EmloyeeCSS className = "employee-page" style={{minHeight: "100vh"}}>   
            <div className="employee-container">
                
            </div>
        </EmloyeeCSS>
    );
};

const EmloyeeCSS = styled.div`
.employee-container {
    background-image: url(${Egoist});
    // background-size: cover;
    background-position: top center;
    min-height: 100vh;
    height: auto;
    background-repeat: repeat;
    height: 100%;
}

.employee-page {
    height:100%;
}
`;

export default About;
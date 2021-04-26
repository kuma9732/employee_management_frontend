import React, { Component } from 'react'
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import EmployeeService from '../../services/EmployeeService';
import Egoist from '../../images/egoist_2.jpg';


class DetailEmployee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHolder = this.changeFirstNameHolder.bind(this);
        this.changeLastNameHolder = this.changeLastNameHolder.bind(this);
        this.changeEmailIdHolder = this.changeEmailIdHolder.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
            let employee = res.data;
            this.setState({
                firstName: employee.firstName,
                lastName: employee.lastName,
                emailId : employee.emailId
            });
        });
    }

    changeFirstNameHolder = (e) => {
        this.setState({
            firstName: e.target.value            
        });
    }
    
    changeLastNameHolder = (e) => {
        this.setState({
            lastName: e.target.value
        });
    }
    
    changeEmailIdHolder = (e) => {
        this.setState({
            emailId: e.target.value
        });
    }

    return() {
        this.props.history.push('/Management');
    }

    render() {
        return (
            <EmloyeeCSS className = "add-page">
                <div className = "add-page-container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3 add-page-card">
                            <h3>Detail Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <p>First Name : {this.state.firstName}</p>
                                    </div>
                                    <div className="form-group">
                                        <p>Last Name : {this.state.lastName}</p>
                                    </div>
                                    <div className="form-group">
                                        <p>email Id : {this.state.emailId}</p>
                                    </div>
                                    <button className="btn btn-danger" onClick={this.return.bind(this)} style={{marginLeft: "10px"}}>Return</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </EmloyeeCSS>
        );
    }
}

const EmloyeeCSS = styled.div`
    .add-page-container {
        min-height: 100vh;
        padding-top: 50px;
        background-image: url(${Egoist});
        background-position: top center;
        width: 100vw;
        background-repeat: repeat;
    }

    .add-page-container h3 {
        margin-top: 20px;
        margin-left: 20px
    }

    .add-page-card {
        background: #efefef;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
    }
`;

export default withRouter(DetailEmployee);
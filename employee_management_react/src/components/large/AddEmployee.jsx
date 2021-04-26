import React, { Component } from 'react'
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import EmployeeService from '../../services/EmployeeService';
import Egoist from '../../images/egoist_1.jpg';


class AddEmployee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHolder = this.changeFirstNameHolder.bind(this);
        this.changeLastNameHolder = this.changeLastNameHolder.bind(this);
        this.changeEmailIdHolder = this.changeEmailIdHolder.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
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


    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId };
        console.log('employee => ' + JSON.stringify(employee));

        EmployeeService.addEmployee(employee).then(res => {
            this.props.history.push('/Management');
        });
    }

    cancel() {
        this.props.history.push('/Management');
    }

    render() {
        return (
            <EmloyeeCSS className = "add-page">
                <div className = "add-page-container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3 add-page-card">
                            <h3>Add Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="">First Name</label>
                                        <input type="text" placeholder="First Name" name="firstName" className="form-control"
                                            value={this.state.firstName} onChange={this.changeFirstNameHolder}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Last Name</label>
                                        <input type="text" placeholder="First Name" name="lastName" className="form-control"
                                            value={this.state.lastName} onChange={this.changeLastNameHolder}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">email Id</label>
                                        <input type="text" placeholder="Email Id" name="emailId" className="form-control"
                                            value={this.state.emailId} onChange={this.changeEmailIdHolder}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
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
        min-height: calc(100vh - 160px);
        padding-top: 50px;
        background-image: url(${Egoist});
        background-size: cover;
        background-position: top center;
        // min-height: 100%;
        // height: auto;
        width: 100vw;
        background-repeat: repeat;
    }

    .add-page-container h3 {
        margin-top: 20px;
        margin-left: 20px
    }

    .add-page-card {
        background: #efefef;
    }
`;

export default withRouter(AddEmployee);
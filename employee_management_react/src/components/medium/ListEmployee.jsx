import React, { Component } from 'react'
import EmployeeService from '../../services/EmployeeService'
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

class ListEmployee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmployee().then((res) => {
            this.setState({ employees: res.data})
        });
    }

    addEmployee() {
        this.props.history.push('/AddEmployee');
    }

    detailEmployee(id) {
        this.props.history.push(`/DetailEmployee/${id}`);
    }

    editEmployee(id) {
        this.props.history.push(`/UpdateEmployee/${id}`);
    }

    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }

    render() {
        return (
            <EmloyeeCSS className = "employee-list">
                <h2 className = "text-center table_title">Employee List</h2>
                <div className="add-btn">
                    <button type="button" class="btn btn-primary" onClick={this.addEmployee}>Add</button>
                </div>
                <div className = "row table-container">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email ID</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr key = {employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                        <td>
                                            <button onClick = { () => this.detailEmployee(employee.id)} type="button" class="btn btn-info" style={{marginRight: "10px"}}>Detail</button>
                                            <button onClick = { () => this.editEmployee(employee.id)} type="button" class="btn btn-success" style={{marginRight: "10px"}}>Edit</button>
                                            <button onClick = { () => this.deleteEmployee(employee.id)} type="button" class="btn btn-danger">Delete</button>
                                        </td>
                                    </tr> 
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </EmloyeeCSS>
        )
    }
}

export default withRouter(ListEmployee)

const EmloyeeCSS = styled.div`
.add-btn {
    margin-right: 30px !important;
    margin-left: auto !important;
    display: flex !important;
    height: 50px;
}

.add-btn button {
    margin-right: 200px !important;
    margin-left: auto !important;
    display: flex !important;
    height: 40px;
}

.emloyee-list {
    margin: 50px;
}

.table_title {
    color: #fff;
    padding-top : 20px;
}

.table-container {
    margin: 0 200px;
    background: #fff;
    text-align: center;
    // min-height: calc(100vh - 160px);
        
}
`;
import React, { Component } from 'react'
import EmployeeServise from '../services/EmployeeService'

export default class ListEmployee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        EmployeeServise.getEmployee().then((res) => {
            this.setState({ employees: res.data})
        });
    }

    render() {
        return (
            <div>
                <h2 className = "text-center">Employee List</h2>
                <div className = "row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Enployee First Name</th>
                                <th>Enployee Last Name</th>
                                <th>Enployee Email ID</th>
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
                                         <td>{employee.emailid}</td>
                                     </tr> 
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

import axios from 'axios';

const EMOLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees"

class EmployeeService {

    getEmployee() {
        return axios.get(EMOLOYEE_API_BASE_URL);
    }

    addEmployee(employee) {
        return axios.post(EMOLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMOLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMOLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMOLOYEE_API_BASE_URL + '/' + employeeId);
    }
}

export default new EmployeeService()
import axios from 'axios';

const EMOLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees"

class EmployeeServise {
    getEmployee() {
        return axios.get(EMOLOYEE_API_BASE_URL);
    }
}

export default new EmployeeServise()
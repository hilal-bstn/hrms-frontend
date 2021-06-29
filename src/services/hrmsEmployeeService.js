import axios from "axios";

export default class HrmsEmployeeService {
   
   
    getById(id) {
      return axios.get(
        "http://localhost:8080/api/hrmsemployee/getbyid?id="+
        id
      );
    }
    updateHrmsEmployee(hrmsEmployee) {
      axios.post(
        "http://localhost:8080/api/hrmsemployee/update",
        hrmsEmployee
      );
    }
  }
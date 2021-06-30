import axios from "axios";

export default class EmployerUpdateConfirmationService {
  add(employerUpdateConfirmation) {
    axios.post(
      "http://localhost:8080/api/employerupdateconfirmations/add",
      employerUpdateConfirmation
    );
  }
  confirmation(id) {
    axios.post(
      "http://localhost:8080/api/employerupdateconfirmations/confirmation?id=" +
        id
    );
  }
  updateFailed(id) {
    axios.post(
      "http://localhost:8080/api/employerupdateconfirmations/updateFailed?id=" +
        id
    );
  }
  getAll() {
    return axios.get(
      "http://localhost:8080/api/employerupdateconfirmations/getAll"
    );
  }
  getByIsActive() {
    return axios.get(
      "http://localhost:8080/api/employerupdateconfirmations/getbyisactive"
    );
  }
  getById(id) {
    return axios.get(
      "http://localhost:8080/api/employerupdateconfirmations/getbyid?id=" + id
    );
  }
}

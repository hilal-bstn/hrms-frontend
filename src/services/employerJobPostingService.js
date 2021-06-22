import axios from "axios";

export default class EmployerJobPostingService {
  getJobPostings() {
    return axios.get(
      "http://localhost:8080/api/employerjobpostings/getbyisactive"
    );
  }
  addEmployerJobPosting(employerJobPosting) {
    axios.post(
      "http://localhost:8080/api/employerjobpostings/add",
      employerJobPosting
    );
  }
  deleteEmployerJobPosting(id) {
    axios.post("http://localhost:8080/api/employerjobpostings/delete?id="+id);
  }
  getById(id){
    return axios.get("http://localhost:8080/api/employerjobpostings/getById?id="+id)

}
isActive(id) {//yayınlandı.
  axios.post("http://localhost:8080/api/employerjobpostings/isActive?id="+id);
}
getByEmployerIdAndIsActive(id){
  return axios.get("http://localhost:8080/api/employerjobpostings/getByEmployerIdAndIsActive?employerId="+id)

}

}

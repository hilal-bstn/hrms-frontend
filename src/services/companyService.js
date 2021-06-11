import axios from "axios";

export default class CompanyService {
  getCompanies() {
    return axios.get("http://localhost:8080/api/companies/getall");
  }
  addCompany(company) {
    axios.post("http://localhost:8080/api/companies/add", company);
  }
}

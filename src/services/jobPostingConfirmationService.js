import axios from "axios";

export default class JobPostingConfirmationService {
    getByHrmsEmployeeConfirmation() {
      return axios.get("http://localhost:8080/api/jobpostingconfirmations/getByHrmsEmployeeConfirmation");
    }
    
  }
  
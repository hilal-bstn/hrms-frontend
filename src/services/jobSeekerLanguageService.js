import axios from "axios";

export default class JobSeekerLanguageService {
  addJobSeekerLanguage(jobSeekerLanguage) {
    axios.post(
      "http://localhost:8080/api/jobseekerlanguages/add",
      jobSeekerLanguage
    );
  }
  getJobSeekerLanguage(id) {
    return axios.get(
      "http://localhost:8080/api/jobseekerlanguages/getbyjobseekerid?id="+id
    );
  }
  getById(id) {
    return axios.get(
      "http://localhost:8080/api/jobseekerlanguages/getbyid?id="+id
    );
  }
  updateJobSeekerLanguage(jobSeekerLanguage) {
    axios.post(
      "http://localhost:8080/api/jobseekerlanguages/update",
      jobSeekerLanguage
    );
  }
}

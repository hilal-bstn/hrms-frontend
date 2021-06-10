import axios from "axios";

export default class jobSeekerLanguageService {
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
}

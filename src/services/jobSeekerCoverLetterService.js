import axios from "axios";

export default class JobSeekerCoverLetterService {
  addjobSeekerCoverLetter(jobSeekerCoverLetter) {
    axios.post(
      "http://localhost:8080/api/jobseekercoverletters/add",
      jobSeekerCoverLetter
    );
  }
  getJobSeekerCoverLetter(id) {
    return axios.get(
      "http://localhost:8080/api/jobseekercoverletters/getbyjobseekerid?id="+
      id
    );
  }
  getByJobSeekerCoverLetterId(id) {
    return axios.get(
      "http://localhost:8080/api/jobseekercoverletters/getbyid?id="+
      id
    );
  }
  updateJobSeekerCeverLetter(jobSeekerContact) {
    axios.post(
      "http://localhost:8080/api/jobseekercoverletters/update",
      jobSeekerContact
    );
  }
}

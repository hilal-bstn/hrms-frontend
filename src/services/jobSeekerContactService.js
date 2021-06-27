import axios from "axios";

export default class JobSeekerContactService {
  addJobSeekerContact(jobSeekerContact) {
    axios.post(
      "http://localhost:8080/api/jobseekercontact/add",
      jobSeekerContact
    );
  }
  updateJobSeekerContact(jobSeekerContact) {
    axios.post(
      "http://localhost:8080/api/jobseekercontact/update",
      jobSeekerContact
    );
  }
  getJobSeekerContact(id) {
    return axios.get(
      "http://localhost:8080/api/jobseekercontact/getbyjobseekerid?id="+id
    );
  }
}

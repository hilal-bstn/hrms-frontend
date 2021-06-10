import axios from "axios";

export default class jobSeekerContactService {
  addJobSeekerContact(jobSeekerContact) {
    axios.post(
      "http://localhost:8080/api/jobseekercontact/add",
      jobSeekerContact
    );
  }
  getJobSeekerContact(id) {
    return axios.get(
      "http://localhost:8080/api/jobseekercontact/getbyjobseekerid?id="+id
    );
  }
}

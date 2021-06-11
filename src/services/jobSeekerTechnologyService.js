import axios from "axios";

export default class JobSeekerTechnologyService {
  addJobSeekerTechnology(jobSeekerTechnology) {
    axios.post(
      "http://localhost:8080/api/jobseekertechnologies/add",
      jobSeekerTechnology
    );
  }
  getJobSeekerTechnology(id) {
    return axios.get(
      "http://localhost:8080/api/jobseekertechnologies/getbyjobseekerid?id="+id
    );
  }
}

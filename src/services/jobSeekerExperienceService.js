import axios from "axios";

export default class jobSeekerExperienceService {
  addJobSeekerExperience(jobSeekerExperience) {
    axios.post(
      "http://localhost:8080/api/jobseekerexperiences/add",
      jobSeekerExperience
    );
  }
  getJobSeekerExperience(id) {
    return axios.get(
      "http://localhost:8080/api/jobseekerexperiences/getbyjobseekerid?id="+id
    );
  }
}

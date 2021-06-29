import axios from "axios";

export default class JobSeekerExperienceService {
  addJobSeekerExperience(jobSeekerExperience) {
    axios.post(
      "http://localhost:8080/api/jobseekerexperiences/add",
      jobSeekerExperience
    );
  }
  getTerminationYearAsc(id) {
    return axios.get(
      "http://localhost:8080/api/jobseekerexperiences/getterminationyearasc?id="+id
    );
  }
  getById(id) {
    return axios.get(
      "http://localhost:8080/api/jobseekerexperiences/getbyid?id="+id
    );
  }
  updateJobSeekerExperience(jobSeekerExperience) {
    axios.post(
      "http://localhost:8080/api/jobseekerexperiences/update",
      jobSeekerExperience
    );
  }
  
}

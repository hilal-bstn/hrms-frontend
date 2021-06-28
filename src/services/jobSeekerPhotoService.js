import axios from "axios";

export default class JobSeekerPhotoService {
  
    getJobSeekerPhoto(id) {
        return axios.get(
          "http://localhost:8080/api/jobseekerphotos/getbyjobseekerid?jobSeekerId="+id
        );
      }
      addJobSeekerPhoto(id,file) {
        axios.post(
          "http://localhost:8080/api/jobseekerphotos/add?id="+id ,file
        );
      }
}

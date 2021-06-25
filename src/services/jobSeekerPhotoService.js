import axios from "axios";
const config = {
  headers: {
          'Content-Type': 'multipart/form-data; charset=utf-8; boundary="another cool boundary";'
  }
};
export default class JobSeekerPhotoService {
  
    getJobSeekerPhoto(id) {
        return axios.get(
          "http://localhost:8080/api/jobseekerphotos/getbyjobseekerid?jobSeekerId="+id
        );
      }
      addJobSeekerPhoto(id,file) {
        axios.post(
          "http://localhost:8080/api/jobseekerphotos/add?id="+id ,
         {
            headers: {
              'Content-Type': 'multipart/form-data',file
            }
        });
      }
}

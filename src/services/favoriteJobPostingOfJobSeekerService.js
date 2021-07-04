import axios from "axios";

export default class FavoriteJobPostingOfJobSeekerService {
  add(favoriteJobPostingOfJobSeeker) {
   console.log(favoriteJobPostingOfJobSeeker)
    axios.post("http://localhost:8080/api/favoritejobpostingsofjobseeker/add", favoriteJobPostingOfJobSeeker);
  }
  delete(jobSeekerId,jobPostingId) {

     axios.post("http://localhost:8080/api/favoritejobpostingsofjobseeker/delete?jobSeekerId="+jobSeekerId+"&jobPostingId="+jobPostingId);
   }
  getByJobSeekerId(jobSeekerId) {
   return  axios.get("http://localhost:8080/api/favoritejobpostingsofjobseeker/getByJobSeekerId?jobSeekerId="+jobSeekerId);
   }
   getByJobSeekerIdAndEmployerJobPostingId(jobSeekerId,jobPostingId) {
    return  axios.get("http://localhost:8080/api/favoritejobpostingsofjobseeker/getByJobSeekerIdAndJobPostingId?jobSeekerId="+jobSeekerId+"&jobPostingId="+jobPostingId);
    }
}
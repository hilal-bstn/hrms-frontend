import axios from "axios";

export default class FavoriteJobPostingOfJobSeekerService {
  add(favoriteJobPostingOfJobSeeker) {
   console.log(favoriteJobPostingOfJobSeeker)
    axios.post("http://localhost:8080/api/favoritejobpostingsofjobseeker/add", favoriteJobPostingOfJobSeeker);
  }
  delete(id) {

     axios.post("http://localhost:8080/api/favoritejobpostingsofjobseeker/delete?id="+id);
   }
  getByJobSeekerId(jobSeekerId) {
   return  axios.get("http://localhost:8080/api/favoritejobpostingsofjobseeker/getByJobSeekerId?jobSeekerId="+jobSeekerId);
   }
}
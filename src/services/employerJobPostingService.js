import axios from "axios";

export default class EmployerJobPostingService {
  getJobPostings() {
    return axios.get(
      "http://localhost:8080/api/employerjobpostings/getbyisactive"
    );
  }
  addEmployerJobPosting(employerJobPosting) {
    axios.post(
      "http://localhost:8080/api/employerjobpostings/add",
      employerJobPosting
    );
  }
  deleteEmployerJobPosting(id) {
    axios.post("http://localhost:8080/api/employerjobpostings/delete?id="+id);
  }
  getById(id){
    return axios.get("http://localhost:8080/api/employerjobpostings/getById?id="+id)

}
release(id) {//yayınlandı.
  axios.post("http://localhost:8080/api/employerjobpostings/release?id="+id);
}
getByEmployerIdAndIsActive(id){
  return axios.get("http://localhost:8080/api/employerjobpostings/getByEmployerIdAndIsActive?employerId="+id)

}
getByFilter(cityId,jobPositionId,typeOfWorkId,timeOfWorkId){
  //!?getByFilter(filter)??
  let cityIdS="";
  let jobPositionIdS="";
  let typeOfWorkIdS="";
  let timeOfWorkIdS="";

   if(cityId){cityIdS="cityId="+cityId}
   
   if(jobPositionId){jobPositionIdS+="jobPositionId="+jobPositionId}
   if(jobPositionId&&cityId)(jobPositionIdS="&"+jobPositionIdS)

   if(typeOfWorkId){typeOfWorkIdS+="typeOfWorkId="+typeOfWorkId}
   if(typeOfWorkId&&(cityId||jobPositionId))(typeOfWorkIdS="&"+typeOfWorkIdS)
   
   if(timeOfWorkId){timeOfWorkIdS+="timeOfWorkId="+timeOfWorkId}
   if(timeOfWorkId&&(cityId||jobPositionId||typeOfWorkId))(timeOfWorkIdS="&"+timeOfWorkIdS)
   
  return axios.get("http://localhost:8080/api/employerjobpostings/getbyfilter?"+cityIdS+jobPositionIdS+typeOfWorkIdS+timeOfWorkIdS)
}
}

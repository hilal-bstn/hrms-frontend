import axios from "axios";
export default class TimeOfWorkService {
    getTimesOfWork() {
        return axios.get("http://localhost:8080/api/timesofwork/getall");
      }
}
import axios from "axios";
export default class TypeOfWorkService{
    getTypesOfWork() {
        return axios.get("http://localhost:8080/api/typesofwork/getall");
      }
}
import axios from "axios";
import { Menu } from 'semantic-ui-react'

//https://jasonwatmore.com/post/2021/04/22/react-axios-http-put-request-examples
export default class cityService {
  getCities() {
    return axios.get("http://localhost:8080/api/cities/getall");
  }
}

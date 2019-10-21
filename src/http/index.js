import axios from '_axios@0.19.0@axios/index';
import qs from 'qs';


export default {
  req(...params){
    if (params.length===1){
      return axios.get(params[0])
    }
    if (params.length===2) {
      return axios.post(params[0],qs.stringify(params[1]))
    }
  }
}
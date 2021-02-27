import {localApi} from './api';

const UserRegisterService = {
  postUserRegister: (user:any) => localApi.post('/register') 
}

export default UserRegisterService;
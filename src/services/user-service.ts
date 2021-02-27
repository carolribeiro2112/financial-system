import {localApi} from './api';

const UserRegisterService = {
  postUserRegister: (user:any) => localApi.post('/register',user), 
  postUserLogin:(login:any) => localApi.post('/login',login)
}

export default UserRegisterService;
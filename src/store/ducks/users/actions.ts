import { action } from "typesafe-actions";
import {UserTypes,Users} from './types';

export const postUsersRegisterRequest = (user: any) => action(UserTypes.POST_USERS_REGISTER_REQUEST,user)
export const postUsersRegisterSuccess = (users:Users[]) =>action(UserTypes.POST_USERS_REGISTER_SUCCESS,users)
export const postUsersRegisterFailure = () => action(UserTypes.POST_USERS_REGISTER_FAILURE)

export const postUsersLoginRequest = (login:any) => action(UserTypes.POST_USERS_LOGIN_REQUEST,login)
export const postUsersLoginSuccess = (users:Users[]) => action(UserTypes.POST_USERS_LOGIN_SUCCESS,users)
export const postUsersLoginFailure = () => action(UserTypes.POST_USERS_LOGIN_FAILURE)

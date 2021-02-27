import { action } from "typesafe-actions";
import {UserTypes,Users} from './types';

export const postUsersRegisterRequest = (user: any) => action(UserTypes.POST_USERS_REGISTER_REQUEST,user)
export const postUsersRegisterSuccess = (users:Users[]) =>action(UserTypes.POST_USERS_REGISTER_SUCCESS,users)
export const postUsersRegisterFailure = () => action(UserTypes.POST_USERS_REGISTER_FAILURE)
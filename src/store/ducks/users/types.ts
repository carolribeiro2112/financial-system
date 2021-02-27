export enum UserTypes {
  POST_USERS_REGISTER_REQUEST = '@users/POST_USERS_REGISTER_REQUEST',
  POST_USERS_REGISTER_SUCCESS = '@users/POST_USERS_REGISTER_SUCCESS',
  POST_USERS_REGISTER_FAILURE = '@users/POST_USERS_REGISTER_FAILURE',
}

export interface Users {
  id: number,
  email: string,
  password: string
}
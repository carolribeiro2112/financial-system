export enum UserTypes {
  POST_USERS_REGISTER_REQUEST = '@users/POST_USERS_REGISTER_REQUEST',
  POST_USERS_REGISTER_SUCCESS = '@users/POST_USERS_REGISTER_SUCCESS',
  POST_USERS_REGISTER_FAILURE = '@users/POST_USERS_REGISTER_FAILURE',

  POST_USERS_LOGIN_REQUEST = '@users/POST_USERS_LOGIN_REQUEST',
  POST_USERS_LOGIN_SUCCESS = '@users/POST_USERS_LOGIN_SUCCESS',
  POST_USERS_LOGIN_FAILURE = '@users/POST_USERS_LOGIN_FAILURE',
}

export interface Users {
  id: number,
  email: string,
  password: string
}

export interface Response {
  data: {
    accessToken: string,
  }
}
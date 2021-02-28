import { TextField, Button } from '@material-ui/core';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import * as UserActions from '../../store/ducks/users/actions';

import {SignIn} from './styles'

const Login = () => {
  const [authentication, setAuthentication] = useState<Boolean>(false);
  const [refresh, setRefresh] = useState(true)

  const dispatch = useDispatch();

  const inputEmail = useRef	<HTMLInputElement>(null);
  const inputSenha = useRef<HTMLInputElement>(null);

  const handleSubmit = async() => {
    const request = {
      email: inputEmail.current?.value,
      password: inputSenha.current?.value,
    }

    dispatch(UserActions.postUsersLoginRequest(request))

    await checkToken()
  }

  const checkToken = () => {
    const token = localStorage.getItem('token')

    if(token){
      setAuthentication(true)
    }
    setRefresh(!refresh)
  }

  return(
    <SignIn>
      <h1>Login</h1>
        <div className='input'>
          <TextField label="E-mail" variant="outlined" inputRef={inputEmail}/>
        </div>
        <div className='input'>
          <TextField label="Senha" variant="outlined" inputRef={inputSenha}/>
        </div>  

        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Entrar
        </Button> 

        <div className="a">
          <Link to='/sign-up'>Fazer cadastro</Link> 
        </div> 

        {
          authentication &&
          <Redirect to="home"/>
        }
    </SignIn>
  )
}

export default Login;
import { TextField, Button } from '@material-ui/core';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as UserActions from '../../store/ducks/users/actions';

import {SignIn} from './styles'

const Login = () => {
  const dispatch = useDispatch();

  const inputEmail = useRef	<HTMLInputElement>(null);
  const inputSenha = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    const request = {
      email: inputEmail.current?.value,
      password: inputSenha.current?.value,
    }

    dispatch(UserActions.postUsersLoginRequest(request))
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

        
    </SignIn>
  )
}

export default Login;
import { TextField, Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

import {SignIn} from './styles'

const Login = () => {
  return(
    <SignIn>
      <h1>Login</h1>
        <div className='input'>
          <TextField label="E-mail" variant="outlined"/>
        </div>
        <div className='input'>
          <TextField label="Senha" variant="outlined"/>
        </div>  

        <Button variant="contained" color="primary">
          Entrar
        </Button> 

        <div className="a">
          <Link to='/sign-up'>Fazer cadastro</Link> 
        </div>

        
    </SignIn>
  )
}

export default Login;
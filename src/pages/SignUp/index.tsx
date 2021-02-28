import { Button, TextField } from '@material-ui/core';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {Cadastro} from './styles';
import * as UserActions from '../../store/ducks/users/actions';
import {Toaster} from 'react-hot-toast';
import { Link } from 'react-router-dom';


const SignUp = () => {
  const dispatch = useDispatch();

  const inputEmail = useRef	<HTMLInputElement>(null);
  const inputSenha = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    const request = {
      email: inputEmail.current?.value,
      password: inputSenha.current?.value,
    }

    dispatch(UserActions.postUsersRegisterRequest(request))
  }
  return(
    <>
      <Cadastro>
        <h1>Faça o seu cadastro</h1>
          
        <div className='input'>
          <TextField label="E-mail" variant="outlined" inputRef={inputEmail}/>
        </div>
          
        <div className='input'>
          <TextField label="Senha" variant="outlined" inputRef={inputSenha}/>
        </div> 

        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Cadastrar
        </Button>

        <div className="a">
          <Link to='/'>Fazer Login</Link> 
        </div>
        
      </Cadastro>
      <Toaster/>
    </>
  )
}

export default SignUp;
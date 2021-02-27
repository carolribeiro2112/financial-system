import { Button, TextField } from '@material-ui/core';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import {Cadastro} from './styles';
import * as UserActions from '../../store/ducks/users/actions';

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

    console.log('input', request)
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

      </Cadastro>
    </>
  )
}

export default SignUp;
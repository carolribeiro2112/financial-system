import { InputAdornment, TextField } from '@material-ui/core';
import React from 'react';
import Sidebar from '../../components/Sidebar';
import { Dashboard } from './styles';

const Register = () => {
  return(
    <Dashboard>
      <aside>
        <Sidebar/>
      </aside>
      
      <section>
        <h1>Registro de despesas</h1>
        <div>
        <TextField 
          variant="outlined"
          id="input-with-icon-textfield"
          inputProps={{
            startAdornment:(
              <InputAdornment position="start">R$</InputAdornment>
              ),
          }}/>
        </div>
      </section>  
    </Dashboard>
  )
}

export default Register;


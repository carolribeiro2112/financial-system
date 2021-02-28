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
      </section>  
    </Dashboard>
  )
}

export default Register;


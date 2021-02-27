import React from 'react';

import Sidebar from '../../components/Sidebar';  

import {Dashboard} from './styles'

const Home = () => {
  return(
    <Dashboard>
      <aside>
        <Sidebar/>
      </aside>
      
      <section>
        <h1>Seja bem-vindo!</h1>
      </section>  
    </Dashboard>
  )
}

export default Home;
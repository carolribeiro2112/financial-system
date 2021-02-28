import React from 'react';
import {Aside} from './styles';
import {Link} from 'react-router-dom';

const Sidebar = () => {
  return(
    <>
      <Aside>
          <div>
            <Link to="/home">Home</Link>
            <Link to="/currency">Ver moedas</Link>
            <Link to="/register">Cadastrar despesas</Link>
            <Link to="/list">Ver despesas</Link>
          </div>
      </Aside>
    </>
  )
} 

export default Sidebar;
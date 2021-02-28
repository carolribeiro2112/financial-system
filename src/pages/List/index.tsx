import React from 'react';

import Sidebar from '../../components/Sidebar';  
import { Dashboard } from '../Currency/styles';

const List = () => {
  return(
    <Dashboard>
      <aside>
        <Sidebar/>
      </aside>
      
      <section>
        <h1>Lista de Despesas e Recebidos</h1>
      </section>  
    </Dashboard>
  )
}

export default List;
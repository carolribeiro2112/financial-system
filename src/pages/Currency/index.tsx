import React from 'react';
import { useSelector } from 'react-redux';

import Sidebar from '../../components/Sidebar';  
// import { Currencies } from '../../store/ducks/currency/types';
import { Dashboard } from '../Currency/styles';

const Currency = () => {
  const arrayCurrencies = useSelector((state:any)=>state.currencies)
  return(
    <Dashboard>
      <aside>
        <Sidebar/>
      </aside>
      <section>
        <h2>selecione a moeda desejada</h2>
        {
          arrayCurrencies.map((item:any)=>(
            <div key={item.currency_code}>
              <h3>{item.currency_code}</h3>
              <p>{item.name}</p>
            </div>
          ))
        }
      </section>
      
    </Dashboard>
  )
}

export default Currency;
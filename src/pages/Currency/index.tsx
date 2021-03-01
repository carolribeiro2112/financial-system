import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Sidebar from '../../components/Sidebar';  
import { getCurrencyRequest } from '../../store/ducks/currency/actions';
import { Currencies } from '../../store/ducks/currency/types';
import { Dashboard } from '../Currency/styles';

const Currency = () => {
  const arrayCurrency = useSelector((state:any)=>state.currencyReducer.arrayCurrencies)

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCurrencyRequest())
  },[dispatch])

  console.log('componente', arrayCurrency)

  return(
    <Dashboard>
      <aside>
        <Sidebar/>
      </aside>
      <section>
        <h2>selecione a moeda desejada</h2>
        {
          arrayCurrency?.map((item:Currencies)=>(
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
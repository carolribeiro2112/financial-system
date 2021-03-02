import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Sidebar from '../../components/Sidebar';  
import { getCurrencyRequest } from '../../store/ducks/currency/actions';
import { Currencies } from '../../store/ducks/currency/types';
import { getCurrencyDetailsRequest } from '../../store/ducks/currencyDetails/actions';
import { Dashboard } from '../Currency/styles';

const Currency = () => {
  const arrayCurrency = useSelector((state:any)=>state.currencyReducer.arrayCurrencies)
  const currencyDetails = useSelector((state:any)=> state.currencyDetailsReducer)

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCurrencyRequest())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const getCurrency = (currencyName:string) => {

  
    dispatch(getCurrencyDetailsRequest(currencyName))
  }

 

  return(
    <Dashboard>
      <aside>
        <Sidebar/>
      </aside>
      <section>
        <h2>selecione a moeda desejada</h2>
        
        <div className="select-moedas">
            {
            arrayCurrency?.map((item:Currencies)=>(
              <li onClick={()=>getCurrency(item.currency_code)}>{item.currency_code}</li>
            ))
            }
        
        </div>

        <div>
        {
          currencyDetails && (
            <>
              <p>Código da moeda:</p>
              <p>{currencyDetails.details.currency_code}</p>
              <p>{currencyDetails.details.name}</p>
            </>
          )
        }
        </div>
      </section>
      
    </Dashboard>
  )
}

export default Currency;
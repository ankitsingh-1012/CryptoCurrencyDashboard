"use client";
import React, { useState, useEffect } from 'react';

const Exchange = () => {
  const [coins,setCoins]=useState([]);
  useEffect(()=>{
    fetchData();
  },[]);
  const disable = (val)=>{
    if(val==1){
      // document.querySelectorAll('input');
    }
  }
  async function fetchData() {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/');
      // const response = await fetch('https://api.coingecko.com/api/v3/exchange_rates');
      const data = await response.json();
      setCoins(data);
    } catch (error) {
      console.error('Error fetching coins list data:', error);
    }
  }

  return (
    <div>
    <div className=' border-slate-200 border-2 w-96 rounded-2xl bg-white'>
        <h2 className='m-2 text-2xl font-bold'>Exchange Coins</h2>
        <p className='ml-48 mb-1'>Enter value</p>
      <div className='mb-6 ml-3'>
        <label htmlFor="sell" className='text-orange-500 font-semibold'>sell: </label>
        <select name="sell" className='p-2 rounded-lg font-semibold w-24'>
            {coins?.map((coin) => (
              <option key={coin.unit} value={coin.unit}>{coin.name}</option>
            ))}
        </select>
        
       <input type="text" placeholder='Avl.amount' className='ml-10 w-36 border-slate-700 rounded-xl p-2 text-emerald-500' onInput={disable(2)}/>
      </div>
      <div className='ml-2'>
        <label htmlFor="buy" className='text-lime-500 font-semibold'>buy: </label>
        <select name="buy" className='p-2 rounded-lg font-semibold w-24'>
            {coins?.map((coin) => (
              <option key={coin.unit} value={coin.unit}>{coin.name}</option>
            ))}
        </select> 
        <input type="number" placeholder='Avl.amount' className='ml-10 w-36 rounded-xl p-2 text-indigo-400' onInput={disable(1)}/>  
      </div>
      <button className='ml-36 mt-5 mb-1 border-2 p-2 text-xl rounded-xl bg-sky-500 text-white' >Exchange</button>
    </div>
    </div>
  )
}

export default Exchange

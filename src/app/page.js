"use client";
import React, { useState } from 'react';
import SearchBar from './components/searhBar/page';
import SideBar from './components/sideBar/page';
import Exchange from './components/exchangeCoin/page.jsx';
import LineChart from './components/chart/page'
import CurrList from './components/currList/page.jsx'

export default function Home() {
  const [currency,setCurrency] = useState('inr');
  async function handleCurr (e){
    setCurrency(e.target.value);
  }
  return (
    <div className='bg-white flex justify-evenly'>
      <div>
        <CurrList choose={handleCurr} />
        <SearchBar />
        <LineChart currency={currency} handleCurr={handleCurr} />
        <Exchange />
      </div>
      <SideBar />
    </div>
  );
}
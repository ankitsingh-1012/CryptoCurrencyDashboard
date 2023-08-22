import React from 'react'
import { brotliDecompress } from 'zlib'

const Exchange = () => {
  return (
    <div>
    <div className=' border-slate-200 border-2 w-96 rounded-2xl bg-white'>
        <h2 className='m-2 text-2xl font-bold'>Exchange Coins</h2>
        <p className='ml-48 mb-1'>Enter value</p>
      <div className='mb-6 ml-3'>
        <label htmlFor="sell" className='text-orange-500 font-semibold'>sell: </label>
        <select name="sell" className='p-2 rounded-lg font-semibold'>
            <option value="Bitcoin">Bitcoin</option>
            <option value="Ethereum">Ethereum</option>
            <option value="Tether">Tether</option>
            <option value="XRP">XRP</option>
        </select>
        
       <input type="text" placeholder='Avl.amount' className='ml-10 w-36 border-slate-700 rounded-xl p-2 text-emerald-500' />
      </div>
      <div className='ml-2'>
        <label htmlFor="buy" className='text-lime-500 font-semibold'>buy: </label>
        <select name="buy" className='p-2 rounded-lg font-semibold'>
            <option value="Ethereum">Ethereum</option>
            <option value="Bitcoin">Bitcoin</option>
            <option value="Binanca">Binanca</option>
            <option value="Tether">Tether</option>
        </select> 
        <input type="text" placeholder='Avl.amount' className='ml-10 w-36 rounded-xl p-2 text-indigo-400' />  
      </div>
      <button className='ml-36 mt-5 mb-1 border-2 p-2 text-2xl rounded-xl bg-sky-500 text-white' >Exchange</button>
    </div>
    </div>
  )
}

export default Exchange

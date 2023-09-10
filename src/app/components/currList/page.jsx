import React, { useEffect, useState } from 'react'

// let url = process.env.API_KEY+";
const CurrList = (props) => {
  // console.log(process.env.API_KEY);
  let { choose }=props;
  const [money,setMoney]=useState([]);
    async function fetchData() {
      const response = await fetch("https://api.coingecko.com/api/v3/simple/supported_vs_currencies/");
        let data=await response.json();
      setMoney(data);
    }
    useEffect(() => {
        fetchData();
    },);
  return (
    <div className="w-100">
      <select name="currency" onChange={choose} >
        {money?.map((curr)=>{
          return (<option value={curr} key={curr} >{curr}</option>);
          })
        }
      </select>
    </div>
  )
}

export default CurrList;

import React, { useState } from 'react';
import Chart from 'chart.js/auto';
import CurrList from '../currList/page.jsx'
import { Line } from "react-chartjs-2";

const LineChart = () => {
  // Sample data
  const [ctype,setCtype]=useState('INR');
  function handleCurr(e) {
    setCtype(e.target.value);
  }
  let [labels, setLables] = useState(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  const data = {
    labels: labels,
    datasets: [
      {
        label: ctype,
        data: [40000,3400,12000,56000,119000,46637,24400,65446,30446,43000,89004,23005],
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const handleTime=(e)=>{
    if (e.target.value==='1D'){
      setLables(['00:00 AM', '01:00 AM', '02:00 AM', '03:00 AM', '04:00 AM', '05:00 AM', '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM', '11:00 PM']);
    }
    else if (e.target.value === '1M') {
      setLables([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]);
    }
    else if (e.target.value === '1Y') {
      setLables(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"])
    }
    else
      setLables(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  }
  return (
    <div className="line-chart">
      <button value='1D' onClick={handleTime}>1D</button>
      <button value='1W' onClick={handleTime}>1W</button>
      <button value='1M' onClick={handleTime}>1M</button>
      <button value='1Y' onClick={handleTime}>1Y</button>
      <CurrList choose={handleCurr} />
      <Line data={data} />
    </div>
  );
};

export default LineChart;
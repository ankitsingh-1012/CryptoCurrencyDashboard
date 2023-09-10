import React, { useState, useEffect } from 'react'

const SideBar = () => {
    const [coinsdata, setCoinsdata] = useState([]);
    async function fetchData() {
        console.log(process.env);
        try {
            
            // const response = await fetch(`${url}coins/`);
            const response = await fetch("https://api.coingecko.com/api/v3/coins/");
            const data = await response.json();
            setCoinsdata(data);
        } catch (error) {
            console.error('Error fetching coinsdata by api:', error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className='p-2 border-black border-2 w-1/3 h-screen'>
            <h3 className='text-2xl font-semibold mb-4'>Cryptocurrency by marketcap</h3>
            <div className="flex justify-between">
                <div className="data">
                    {coinsdata?.slice(0,8).map((coin) => 
                        <div key={coin.symbol}>
                            <h4 className='text-lg'>{coin.name}</h4>
                            <div className='text-sm text-gray-400'>Mkt.Cap ${coin.market_data.market_cap.usd}</div>
                            <h5>
                                {coin.market_data.market_cap_change_percentage_24h}
                            </h5>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SideBar

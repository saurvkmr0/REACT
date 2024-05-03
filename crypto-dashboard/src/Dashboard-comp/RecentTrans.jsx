import React from 'react';
import { AiFillDollarCircle } from "react-icons/ai";
import { SiBitcoinsv } from "react-icons/si";
import Recent from '../Component/Recent';



const RecentTrans = () => {
    const transactions=[
        {
            icon:<AiFillDollarCircle />,
            title:"INR Deposit",
            timestamp:"2022-06-09 7:06 PM",
            amount1:"+ ₹81,123.10",
            amount2:null,
        },
        {
            icon:<SiBitcoinsv />,
            title:"BTC Sell",
            timestamp:"2022-05-27 12:32 PM",
            amount1:"- 12.48513391 BTC",
            amount2:"+ $81,123.10",
        },
        {
            icon:<AiFillDollarCircle />,
            title:"INR Deposit",
            timestamp:"2022-06-09 7:06 PM",
            amount1:"+ ₹81,123.10",
            amount2:null,
        }
    ]

  return (
    
        <div className="h-[345px] max-w-[468px]">
        <div className="'text-gray-500 font-semibold mb-6">
            Recent Transactions
        </div>
        <div className=''>
            {transactions.map((item)=>
                <Recent icon={item.icon} title={item.title} timestamp={item.timestamp} amount1={item.amount1} amount2={item.amount2}/>
            )}
        </div>
        <div className="text-base font-bold text-center">View All</div>
        </div>
    
    
  )
}

export default RecentTrans
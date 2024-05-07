import React from 'react'
import ButtonPill from '../Component/ButtonPill'
import TableData from './TableData';

const TransTable = () => {

  return (
    <div>
        <table className='[width:100%]'>
            <tr className='text-gray-600 font-medium text-left'>
                <th>ID</th>
                <th>Date & Time</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Status</th>
            </tr>

            {TableData.map(
                (item)=>(
                    <tr className='font-medium' key={item.id}>
                        <td>{item.id}</td>
                        <td>
                            <p>{item.data}</p>
                            <p className='text-gray-600 text-sm'>{item.time}</p>
                        </td>
                        <td>
                            <p>{item.transactionType}</p>
                            <p className='text-gray-600 text-sm'>{item.transferType}</p>
                        </td>
                        <td>
                            <p>{item.amount}</p>
                            <p className='text-gray-600 text-sm'>{item.sumAmount}</p>
                        </td>
                        <td className='text-white'><ButtonPill name={item.status.charAt(0).toUpperCase()+item.status.slice(1)} bgColor={item.status=="pending"?"bg-gray-600":"bg-red-600"}/></td>
                        {/* bgColor={"bg-gray-600"} */}
                    </tr>
                )
            )}

        </table>
    </div>
  )
}

export default TransTable
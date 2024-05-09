import React,{useContext} from 'react'
import { ToggleTransFilters } from './Transaction';
import { SearchFilters } from './Transaction';
import ButtonPill from '../Component/ButtonPill'
import TableData from './TableData';

const TransTable = () => {

    const [activeFilter,setActiveFilter] = useContext(ToggleTransFilters);
    const [searchValue, setSearchValue] = useContext(SearchFilters);
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

            {TableData.filter(item => item.id.toLowerCase().includes(searchValue.toLowerCase())).map(
                (item)=>( (activeFilter === "all" || activeFilter === item.category) &&
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
                        <td className='text-white'><ButtonPill name={item.status.charAt(0).toUpperCase()+item.status.slice(1)} bgColor={item.status=="pending"?"bg-gray-600":(item.status=="processing"?"bg-yellow-500":(item.status=="cancelled"?"bg-red-600":"bg-green-600"))}/></td>
                    </tr>
                )
            )}

        </table>
    </div>
  )
}

export default TransTable
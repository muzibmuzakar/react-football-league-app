import React, { useState } from 'react';
import { MdOutlineInsertChartOutlined } from 'react-icons/md';
import { FiUsers } from 'react-icons/fi';
import Stats from './Stats';
import Lineup from './Lineup';

const ContentResult = () => {

    const [btnStats, setBtnStats] = useState(true);
    const [btnSubs, setBtnSubs] = useState(false);
    const [toggle, setToggle] = useState(1);

    function updateToggle(id){
        setToggle(id);
    }

  return (
    <section className='container mx-auto mb-8'>
        
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-[#1C6DD0] mb-4">
            <li className="mr-2">
                <button onClick={()=>{updateToggle(1); setBtnStats(true); setBtnSubs(false)}} className={btnStats ? 'flex items-center gap-x-2 p-4 text-white bg-[#1C6DD0] rounded-t-lg' :'flex items-center gap-x-2 p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50' }>
                    <MdOutlineInsertChartOutlined className=' text-[20px]'/>
                    <p className="text-[15px] font-semibold">Stats</p>
                </button>
            </li>
            <li className="mr-2">
                <button onClick={()=>{ updateToggle(2); setBtnSubs(true); setBtnStats(false) }} className={btnSubs ? 'flex items-center gap-x-2 p-4 text-white bg-[#1C6DD0] rounded-t-lg' :'flex items-center gap-x-2 p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50' }>
                    <FiUsers className=' text-[20px]' />
                    <p className="text-[15px] font-semibold">Line-Up</p>
                </button>
            </li>
        </ul>

        <div className='shadow-xl w-full mt-8 p-4'>
            {/* stats */}
            <div className={toggle === 1 ? 'block' : 'hidden'}>
                <Stats />
            </div>

            {/* Subs */}
            <div className={toggle === 2 ? 'block' : 'hidden'}>
                <Lineup />
            </div>
        </div>

    </section>
  )
}

export default ContentResult
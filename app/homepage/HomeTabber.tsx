

import React from 'react'
import { productType } from '../components/Export';
import { BiRepeat } from 'react-icons/bi';

interface Props{
    selectedTab: string;
    onTabSelect: (tab: string) => void;
}

const HomeTabber = ({ selectedTab, onTabSelect }: Props) => {
  return (
    <div className='flex item-center gap-1.5 text-sm font-semibold'>
        <div className='flex items-center gap-1.5'>
            {productType.map((item)=>(
                <button key={item?.title} 
                onClick={()=> onTabSelect(item.title)}
                className={`border border-black px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-black hover:text-white`}>
                    {item?.title}
                </button>
            )
            )}
        </div>
        <button className='border border-black px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-black hover:text-white'>
         <BiRepeat  className='w-5 h-5'/>
        </button>
    </div>
  )
}

export default HomeTabber
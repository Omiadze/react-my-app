import React from 'react'
import { CardInfoType } from '../types/CardInfoType';

const InfoCard = ({card}: {
    card: {
    title: string;
    value: string;
    revenue: string;
    success: boolean;
}}) => {
    return (
        <div className='w-full'>
          <div className='bg-white shadow-md rounded-lg p-6'>
            <h2 className='text-lg font-semibold'>{card.title}</h2>
            <p className='text-3xl font-bold'>{card.value}</p>
            <p className={`text-sm ${card.success ? 'text-green-500' : 'text-red-500'}`}>
              Revenue: {card.revenue}%
            </p>
          </div>
        </div>
      )
}

export default InfoCard
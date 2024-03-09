import React from 'react'

const Meetings = ({card}: {
    card: {
        name: string;
        date: string;
        time: string;
        onOf: string;
        color: string;
}}) => {
  return (
    <div className='rounded-3xl p-3 text-white' style={{ background: card.color }}>
        <h1>{card.name}</h1>
        <p>{card.date} / {card.time}</p>
        <p>{card.onOf}</p>
    </div>
  )
}

export default Meetings
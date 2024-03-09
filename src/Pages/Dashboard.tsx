import React from 'react'
import Calendar from '../Components/Dashboard/Calendar'
import Chart from '../Components/Dashboard/Chart'
import InfoCard from '../Components/Dashboard/InfoCard'
import PieChart from '../Components/Dashboard/PieChart'
import Country from '../Components/Dashboard/Country'
import Meetings from '../Components/Dashboard/Meetings'
import { CardInfoType } from '../Components/types/CardInfoType'
import Img from "../Components/Img/pngwing 1.png"

const cardInfo:CardInfoType[] = [
  {
    title: "Net Income",
    value: "$20.178.00",
    revenue: "23.5",
    success: true
  },
  {
    title: "Avr. Order Value",
    value: "$896.00",
    revenue: "-23.5",
    success: false
  },
  {
    title: "Orders",
    value: "7,563",
    revenue: "12.5",
    success: true
  },
]
const chartInfo = [
  {
      date: "Aug 14",
      value: "5000",
      height: "160px"
  },
  {
      date: "Aug 15",
      value: "4500",
      height: "130px"
  },
  {
      date: "Aug 16",
      value: "5900",
      height: "200px"
  },
  {
      date: "Aug 17",
      value: "1500",
      height: "60px"
  },
  {
      date: "Aug 18",
      value: "4500",
      height: "130px"
  },
  {
      date: "Aug 19",
      value: "2000",
      height: "80px"
  },
  {
      date: "Aug 20",
      value: "4500",
      height: "130px"
  },
]

const countryData = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/1200px-United-states_flag_icon_round.svg.png",
    name: "United States",
    percentage: "43%"
  },
  {
    img: "https://cdn3.iconfinder.com/data/icons/world-flags-circular-1/512/99-Turkish_turkey_TUR_country_flag_-512.png",
    name: "Turkey",
    percentage: "32%"
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Circle_Flag_of_the_People%27s_Republic_of_China.svg/2048px-Circle_Flag_of_the_People%27s_Republic_of_China.svg.png",
    name: "China",
    percentage: "27%"
  },
  {
    img: "https://www.svgrepo.com/show/242288/russia.svg",
    name: "Russia",
    percentage: "19%"
  },
]
const MeetingsData = [
  {
    name: "Daily Scrum Meeting",
    date: "27 Aug",
    time: "14:30 - 16:00",
    onOf: "Online",
    color: "#F25555"
  },
  {
    name: "Squad Planning",
    date: "29 Aug",
    time: "10:30 - 13:30",
    onOf: "Office",
    color: "#1DADFE"
    

  }
]


const dashboard = () => {
  return (
    <div className='flex '>
    <div className='flex flex-col p-10'>
      <div className=''>
        <div className='flex gap-4'>
          {cardInfo.map((card, index) => (
            <InfoCard key={index} card={card}/>
          )
          )}
          
        </div>
        
      </div>
      <div className='flex p-10 bg-white mt-10 shadow-md rounded-lg '>
        <div className='flex flex-col justify-between p-2 border-r mr-10 pb-5'>
          <p>6000</p>
          <p>4500</p>
          <p>3000</p>
          <p>1500</p>
          <p>0</p>
        </div>
      {chartInfo.map((item, index) => (
            <Chart key={index} item={item}/>
          )
          )}
          {/* <Chart data={data} /> */}
            
          </div>
          
          <div className='flex flex-col gap-5 mt-5 bg-white shadow-md rounded-lg p-5'>
            {MeetingsData.map((card, index) => (
              <Meetings key={index} card={card}/>
            ))}
            
            
          </div>
          
    </div>
    <div>
    <div className='flex flex-col bg-white p-5 h-fit gap-2 mt-10 shadow-md rounded-lg'>
        <img src={Img} alt="Map" />
        {countryData.map((data, index) =>(
          
          <Country key={index} data = {data}/>
         
         
        ))}
        
      </div>
      <div>
            <PieChart/>
           
          </div>
          </div>
      
    </div>
  )
}

export default dashboard
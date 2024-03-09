import React from 'react'
import Img from "../Img/pngwing 1.png"
import dashboard from '../../Pages/Dashboard';

// const countryData = [
//   {
//     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/1200px-United-states_flag_icon_round.svg.png",
//     name: "United States",
//     percentage: "43%"
//   },
//   {
//     img: "https://cdn3.iconfinder.com/data/icons/world-flags-circular-1/512/99-Turkish_turkey_TUR_country_flag_-512.png",
//     name: "Turkey",
//     percentage: "32%"
//   },
//   {
//     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Circle_Flag_of_the_People%27s_Republic_of_China.svg/2048px-Circle_Flag_of_the_People%27s_Republic_of_China.svg.png",
//     name: "China",
//     percentage: "27%"
//   },
//   {
//     img: "https://www.svgrepo.com/show/242288/russia.svg",
//     name: "Russia",
//     percentage: "19%"
//   },
// ]

const Country = ({data}: {
  data: {
      img: string;
      name: string;
      percentage: string;
}}) => {
  return (
    <div>
      
      <div className='flex gap-5 items-center justify-between mb-3 '>
        <img src={data.img} className='h-12 w-12'/>
        <h1>{data.name}</h1>
        <h1>{data.percentage}</h1>
      </div>
    </div>

  )
}

export default Country
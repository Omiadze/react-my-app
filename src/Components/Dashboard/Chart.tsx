import React from 'react'
import dashboard from '../../Pages/Dashboard';
const Chart = ({item}: {
    item: {
        date: string;
        value: string;
        height: string;
}}) => {
    return (
        <div className='w-full flex items-end devide-x mr-6'>
            <div className='flex flex-col flex-start'>
              <div className='h-10 w-10 bg-chartColor rounded-t-3xl   ' style={{ height: item.height }}>


              </div>

              <div className='flex'>
                <p>{item.date}</p>
          </div>
          </div>
        </div>
      )
}

export default Chart
// import React from 'react';

// const Chart = ({ data }: { data: { date: string; value: string; height: string }[] }) => {
//   return (
//     <div className='w-full flex justify-start items-start'>
//       {data.map((item, index) => (
//         <div key={index} className='flex flex-col flex-start '>
//           <div className='h-full w-10 bg-white' style={{ height: item.height }}>
            
//           </div>
//           <div className='flex'>
//             <p>{item.date}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Chart;
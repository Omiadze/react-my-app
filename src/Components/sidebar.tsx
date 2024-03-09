import React from 'react'

const navData = [
    
        {
            name: "Home",
            path: "./",
            icon: "icon"
        },
        {
            name: "Profile",
            path: "./Profile",
            icon: "Profile"
        },
        {
            name: "Groups",
            path: "./Groups",
            icon: "Groups"
        },
        {
            name: "Notifications",
            path: "./Notifications",
            icon: "Notifications"
        },
        {
            name: "Dashboard",
            path: "./Dashboard",
            icon: "Dashboard"
        },

    ]
    const sidebar = ( ) => {
  return (
    <div className='w-64 bg-white h-screen rounded-r-3xl mt-3 pt-3'>
        <div className='flex border-b'>
            <img className='w-12 h-12 rounded-full object-cover mr-5 ml-5'
            src='https://img.freepik.com/free-vector/purple-man-with-blue-hair_24877-82003.jpg?size=626&ext=jpg&ga=GA1.2.1450690572.1706456639&semt=ais'
            />
            <ul>
                <li>
                Valeria Lipovetsky
                </li>
                <li className='text-lightGray'>
                    Mentor
                </li>
            </ul>
            
        </div>
        <div className='flex items-center gap-5 pl-7 mt-3 pb-3 border-b'>
                <img className='h-6 w-6'
                src='https://img.icons8.com/?size=50&id=132&format=png'/>
                <input type='text' placeholder='search' className='border p-2 w-[150px] rounded-full'>
                
                </input>
            </div>

        
        <ul>
            {navData.map((item, index) => (
                <li key={index} className='cursor-pointer p-4 hover:bg-bodyBg hover:rounded-3xl'>
                    {item.name}
                </li>
            ))}
        </ul>
    </div>
  )
            }


export default sidebar
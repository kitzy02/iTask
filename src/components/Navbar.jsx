import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between p-3 bg-lime-400 text-white font-bold'>
            <span className=''>iTask</span>
            <ul className='flex justify-between gap-7 cursor-pointer '>
                <li className='transition-all hover:scale-105'>Home</li>
                <li className='transition-all hover:scale-105'>Your Tasks</li>
            </ul>
        </nav>
    )
}
export default Navbar
import { useState } from 'react'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
        <div className= 'container mx-auto my-5 bg-lime-200 p-4 rounded-xl text-gray-600'>
          <h2 className='font-bold pb-1'>Add Todo</h2>
            <div className='todo flex justify-between gap-1'>
              <input className='w-dvw rounded-md' placeholder='Enter a task'></input>
              <div className='buttons flex gap-2 '>
                <button className='bg-lime-400 p-1 rounded-md font-bold text-white hover:text-gray-600'>Add</button>
              </div>
            </div>
          <h2 className='font-bold pt-2'>Your Todos</h2>
          <div className='todos'>
            <div className='todo flex justify-between'>
              <div className='text'>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
              <div className='buttons flex gap-2 '>
                <button className='bg-lime-400 p-1 rounded-md font-bold text-white hover:text-gray-600'>Edit</button>
                <button className='bg-lime-400 p-1 rounded-md font-bold text-white hover:text-gray-600'>Delete</button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default App

import React from 'react'
import Sidebar from '@/components/sidebar'
const yourself = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='p-4'>
        <h1 className='text-2xl font-semibold'>Yourself</h1>
        <p className='mt-4'>
          The most important thing in life is to be yourself. Unless you can be Batman. Always be Batman.
        </p>
      </div>
    </div>
  )
}

export default yourself

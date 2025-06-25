import React from 'react'
import { Link } from 'react-router-dom'

const CollaborateContact = () => {
  return (
    <div className="py-14">
      <div className="container  mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-[#1f2937] py-8 px-6">
          <div className='col-span-2 space-y-3 '>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">Let's Collaborate on your upcoming car rental venture</h1>
            <p className='text-gray-400'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reiciendis sunt corrupti fugiat.
            </p>
            </div>
            <div className='grid place-items-center'>
             <Link to="/contactpage"
              className='inline-block font-semibold py-2 px-6 bg-yellow-400  hover:bg-[#d2a72a] rounded-lg text-white teacking-wider uppsercase '
              >
                Contact</Link>
            </div>

        </div>
      </div>
    </div>
  )
}

export default CollaborateContact
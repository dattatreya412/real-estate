import React from 'react'

const BookACall = () => {
  return (
    <section className='w-full h-full text-white'>
        <hr className='opacity-50'/>
        <div className='flex flex-row justify-between p-4'>
        <div className='flex flex-col'>
            <small className='text-xs'>HOUSE DOCUMENTSTION</small>
            <p className='text-sm'>HOUSE_DOCUMENTATION.PDF</p>
        </div>
        <button className='bg-white px-10 py-2 rounded-2xl hover:bg-opacity-50 text-black font-semibold'>BOOK A CALL</button>
        </div>
    </section>
  )
}

export default BookACall
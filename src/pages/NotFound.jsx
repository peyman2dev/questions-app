import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex items-center justify-center w-full h-screen flex-col gap-4'>
        <span>
            صفحه پیدا نشد ...
        </span>
        <Link className='px-10 py-2 text-white rounded-md bg-indigo-600 border border-white/20' to={'/'}>
        بازگشت
        </Link>
    </div>
  )
}

export default NotFound
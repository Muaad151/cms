import React from 'react'
import { serverDetails } from '../lib/constants'
import { usePingQueries } from '../queries/queries'

export default function Status({
  pingQueries
}:{
  pingQueries: ReturnType<typeof usePingQueries>
}) {

  const totalServer = serverDetails.length
  const upServer = pingQueries.filter((q) => q.data?.status === "up").length


  return (
    <div className='container w-[28rem] h-96 ring-1 ring-gray-300 p-4 m-4 shadow-lg rounded-xl  '>
      <h1 className='text-lg font-bold mb-4 m-2'> Server Status</h1>
      <div className="flex flex-wrap items-center gap-4 m-4">
        <div className='basis-20 grow bg-green-100 flex-col items-center justify-center px-6 py-4  rounded-md hover:scale-105'>
          <p className='text-green-500 text-xl font-bold text-center'>{upServer}</p>
          <p className='text-green-500 font-semibold text-sm text-center tracking-wider'>Up</p>
        </div>
        <div className='basis-20 grow bg-red-100 flex-col items-center justify-center px-6 py-4  rounded-md hover:scale-105'>
          <p className='text-red-500 text-xl font-bold text-center'>{totalServer - upServer}</p>
          <p className='text-red-500 font-semibold text-sm text-center tracking-wider'>Down</p>
        </div>
        <div className='basis-20 grow bg-amber-100 flex-col items-center justify-center px-6 py-4  rounded-md hover:scale-105'>
          <p className='text-amber-500 text-xl font-bold text-center'>0</p>
          <p className='text-amber-500 font-semibold text-sm text-center tracking-wider'>Maintanance</p>
        </div>
      </div>
      
    </div>
  )
}

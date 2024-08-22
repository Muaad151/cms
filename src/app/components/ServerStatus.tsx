"use client"

import { useRef } from "react"
import { CiFilter } from "react-icons/ci"
import { TbReload } from "react-icons/tb"
import { serverDetails } from "../lib/constants"
import ServerPill from "./ServerPill"
import { usePingQueries } from "../queries/queries"
// This line is important for accessibility purposes
export default function ServerStatus({
  pingQueries,
}: {
  pingQueries: ReturnType<typeof usePingQueries>
}
) {
  return (
    <div className="container w-[34rem] h-96 ring-1 ring-gray-300 p-4 m-4 shadow-lg rounded-xl ">
      <div className="flex justify-between mb-4 items-center">
        <h1 className="text-sm font-bold mb-4 m-2"> Server Status</h1>
        <div className="flex gap-2">
          <CiFilter
            size={30}
            className="cursor-pointer text-gray-700 bg-gray-200  rounded-full p-1 hover:scale-105"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center  gap-4">
        {serverDetails.map((server) => {
          // find the server in the ping query results
          const pingQuery = pingQueries.find((q) => q.ip === server.ip)
          return (
          <ServerPill key={server.name} {...server} stats={pingQuery?.data?.status=="up"?true:false} />
        )})}
      </div>
    </div>
  )
}

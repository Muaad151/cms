"use client";
import React, { useRef } from 'react'
import ServerDetails from "./ServerDetails"
import { RxCross2 } from "react-icons/rx"
import {type TServerDetailProps} from "../lib/constants"
import { boolean } from 'zod';

export default function ServerPill({
  name,
  ip,
  wanIP,
  sshCMD,
  cpu,
  storage,
  lastReboot,
  memory,
  uptime,
  stats,
}: TServerDetailProps & { stats: boolean }
) {

  const dialogRef = useRef<HTMLDialogElement>(null)
  const openModal = () => {
    dialogRef.current?.showModal()
  }

  const closeModal = () => {
    dialogRef.current?.close()
  }

  return (
    
        
        <div
          className="relative group bg-gray-200 rounded-lg shadow-sm basis-40 p-4 hover:bg-gray-300 hover:scale-105 transition-all cursor-pointer"
          onClick={openModal}
        >

          <div className="group-hover:visible invisible absolute z-100  -top-10 -right-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-800 rounded-lg shadow-sm  tooltip dark:bg-gray-700">
            WAN IP : {wanIP}
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>

          <dialog ref={dialogRef} className=" rounded-lg shadow-lg">
            <RxCross2
              size={30}
              className="absolute right-2 top-2 text-gray-600 hover:text-red-700 hover:scale-105 bg-gray-200 rounded-xl p-1"
              onClick={(e) => {
                e.stopPropagation()
                closeModal()
              }}
            />
            <ServerDetails name={name} ip={ip} wanIP={wanIP} sshCMD={sshCMD} cpu={cpu} storage={storage} lastReboot={lastReboot} memory={memory} uptime={uptime}/>
          </dialog>
          <div className="flex justify-between px-2 items-center">
            <p className="font-medium group-hover:font-semibold text-sm text-gray-800">
              {name}
            </p>
            <span className={`rounded-full w-3 h-3 ${stats==true?"bg-green-700 shadow-green-50":"bg-red-700 shadow-red-50"}`}></span>
          </div>
          <p className="font-thin text-xs px-2 mt-4 text-gray-500">{stats=="true" ? "Up" : "Down"}</p>
        </div>

  )
}

"use client"

import { useState } from "react";

export default function Terminal() {
  const [cmd , setCmd] = useState("");
  
  return (
    <div className="h-screen w-screen bg-black text-white overflow-hidden">
      <div className="fixed top-0 left-0 w-screen h-screen flex flex-col p-4">
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/50"></div>
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex-1 flex flex-col p-4">
            <div className="flex justify-end">
              <span className="text-white">root@terminal:~#</span>
            </div>
            <div className="flex-1 overflow-y-auto">
              <div className="p-4">
                <span className="text-green-400">root@terminal:~# ls</span>
                <br />
                <span className="text-gray-400">home</span>
                <br />
                <span className="text-gray-400">about</span>
                <br />
                <span className="text-gray-400">contact</span>
                <br />
                <span className="text-gray-400">404</span>
                <br />
                <span className="text-gray-400">public</span>
                <br />
                <span className="text-gray-400">...</span>
              </div>
            </div>
          </div>
          <div className="flex-none">
            <input
              type="text"
              className="w-full p-4 border-b border-gray-600"
              placeholder="command"
            />
          </div>
        </div>
      </div>

    </div>
  )
}

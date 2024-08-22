import React from "react"

export default function Toggle() {
  return (
    <div className="w-5 h-6 ">
      <label
        htmlFor="Toggle1"
        className="inline-flex items-center space-x-4 cursor-pointer  dark:text-gray-800"
      >
        <span className="relative">
          <input id="Toggle1" type="checkbox" className="hidden peer" />
          <div className="w-10 h-6 rounded-full shadow-inner   dark:bg-gray-600 peer-checked:dark:bg-violet-600"></div>
          <div className="absolute inset-y-0 left-0 w-4 h-4 m-1  rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-100"></div>
        </span>
      </label>
    </div>
  )
}

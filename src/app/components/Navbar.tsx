import { revalidatePath } from "next/cache"
import Image from "next/image"
import { IoSearch } from "react-icons/io5"

export default function Navbar() {
  return (
    <nav className="w-full  border-b border-gray-300 mb-2 shadow-[rgba(149,_157,_165,_0.2)_0px_8px_24px] ">
      <div className=" max-w-6xl flex justify-between items-center p-4 mx-auto ">
        <div className="flex gap-6 item-center justify-between">
          <Image src="/server.svg" alt="logo" width={25} height={25}  className="cursor-pointer"/>
          <ul className="flex gap-6 text-gray-500 text-sm items-end">
            <li className="cursor-pointer font-bold text-black relative inline-block  after:content-[''] after:block after:h-[2px] after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full">Servers</li>
            <li className="cursor-pointer  relative inline-block text-gray-800 after:content-[''] after:block after:h-[2px] after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full">Monitoring</li>
            <li className="cursor-pointer  relative inline-block text-gray-800 after:content-[''] after:block after:h-[2px] after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full">Alerts</li>
            <li className="cursor-pointer  relative inline-block text-gray-800 after:content-[''] after:block after:h-[2px] after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full">Settings</li>
          </ul>
        </div>
        <div className="flex gap-2 items-center">
          <form className="relative">
            <label
              htmlFor="search"
              className="absolute left-3 top-2 text-gray-500"
            >
              <IoSearch size={20}/>
            </label>
            <input
              id="search"
              type="text"
              placeholder="Search servers"
              className="ring-1 text-gray-800 ring-gray-300 px-10 py-2 rounded-md"
            />
          </form>
        </div>
      </div>
    </nav>
  )
}


import React from "react";
import { type TServerDetailProps } from "../lib/constants";
import { useRouter } from "next/navigation";
export default function ServerDetails({
  name,
  ip,
  wanIP,
  sshCMD,
  cpu,
  storage,
  lastReboot,
  memory,
  uptime,
}: TServerDetailProps) 
{
 
  const route = useRouter() 
  const trimmedCMD = sshCMD.trim();
  const y = trimmedCMD.indexOf(" ");
  const x = trimmedCMD.indexOf("@");
  const user = sshCMD.slice(y, x).trim();

  const handleConnect=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    route.push('/terminal/' + user + "/" + ip);
  }

  return (
    <div className="container flex-col items-center justify-center w-[34rem] p-4 m-4 rounded-xl"> 
      <h1 className="text-lg font-bold mb-4 m-2">Server Details</h1>
      <div className="details grid grid-cols-2 gap-2">
        <div className="p-1 m-1">
          <p className="text-gray-500 font-medium text-xs">Server Name</p>
          <p className="text-black font-semibold text-lg">{name}</p>
        </div>
        <div className="p-1 m-1 col-start-2">
          <p className="text-gray-500 font-medium text-xs">IP Address</p>
          <p className="text-black font-medium text-lg">{ip}</p>
        </div>
        <div className="p-1 m-1">
          <p className="text-gray-500 font-medium text-xs">CPU</p>
          <p className="text-black font-medium text-lg">{cpu}</p>
        </div>
        {storage && <div className="p-1 m-1 col-start-2">
          <p className="text-gray-500 font-medium text-xs">Storage</p>
          <p className="text-black font-medium text-lg">{storage}</p>
        </div>}
        {uptime && <div className="p-1 m-1">
          <p className="text-gray-500 font-medium text-xs">Uptime</p>
          <p className="text-black font-medium text-lg">{uptime}</p>
        </div>}
        {memory && <div className="p-1 m-1 col-start-2">
          <p className="text-gray-500 font-medium text-xs">Memory</p>
          <p className="text-black font-medium text-lg">{memory}</p>
        </div>}
        {lastReboot && <div className="p-1 m-1">
          <p className="text-gray-500 font-medium text-xs">Last Reboot</p>
          <p className="text-black font-medium text-lg">{lastReboot}</p>
        </div>}
      </div>
      <div className="p-1 m-1 flex justify-end gap-3">
        <button 
          onClick={handleConnect} 
          className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          Connect
        </button>
        <button
          onClick={() => navigator.clipboard.writeText(sshCMD)}
          className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          Copy to Clipboard
        </button>
      </div>
    </div>
  );
}

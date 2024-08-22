"use client";

import Navbar from "./components/Navbar";
import PingStatus from "./components/PingStatus";
import Status from "./components/Status";
import ServerStatus from "./components/ServerStatus";
import ServerDetails from "./components/ServerDetails";
import { usePingQueries } from "./queries/queries";
import { useState } from "react";
import { serverDetails } from "./lib/constants";

export default function Home() {

  const ipList = serverDetails.map((server) => server.ip);
  const [reload, setReload] = useState(false);
  const [loading, setLoading] = useState(false);  

  const pingQueries = usePingQueries(ipList, {
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  const handleClick = async () => {
    setLoading(true);  
    await Promise.all(pingQueries.map((query) => query.refetch()));
    setLoading(false);  
    setReload(!reload);  
  };


  return (
    <div className="">
      <Navbar />
      <main className="max-w-6xl mx-auto flex flex-wrap">
        <PingStatus pingQueries={pingQueries} handleClick={handleClick} reload={reload} setReload={setReload} loading={loading} setloading={setLoading}/>
        <Status pingQueries={pingQueries}/>
        <ServerStatus pingQueries={pingQueries}/>

      </main>
      
    </div>
  );
}

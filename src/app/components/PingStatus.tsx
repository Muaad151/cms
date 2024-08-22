"use client";

import { CiFilter } from "react-icons/ci";
import { TbReload } from "react-icons/tb";
import { serverDetails } from "../lib/constants";
import { useEffect, useState } from "react";
import { usePingQueries } from "../queries/queries";
import { RiLoader4Fill } from "react-icons/ri";
import { MdErrorOutline } from "react-icons/md";
import {TServerDetailProps} from "../lib/constants"
import { UseQueryResult } from "@tanstack/react-query";

type PingAPIResponse = {
  status: string;
  ip: string;
  ping_time_ms: number;
};

export default function PingStatus({
  pingQueries,
  handleClick,
  reload,
  setReload,
  loading,
  setloading,
}:{
  pingQueries: ReturnType<typeof usePingQueries>,
  handleClick: () => void,
  reload: boolean,
  setReload: (reload: boolean) => void,
  loading: boolean,
  setloading: (loading: boolean) => void
}) {
  const ipList = serverDetails.map((server) => server.ip);
   
 
  return (
    <div className="container flex-col items-center justify-center w-[34rem]  ring-1 ring-gray-300 p-4 m-4 shadow-lg rounded-xl">
      <div className="flex justify-between mb-4 items-center">
        <h1 className="text-lg font-bold mb-4 m-2">Server Ping Status</h1>
        <div className="flex gap-2">
          <TbReload
            size={30}
            className={`cursor-pointer text-gray-500 bg-gray-200 rounded-full p-1 hover:scale-105 transition-transform ${
              loading ? "animate-spin" : ""
            }`}
            onClick={handleClick}
          />
          <CiFilter
            size={30}
            className="cursor-pointer text-gray-700 bg-gray-200 rounded-full p-1 hover:scale-105"
          />
        </div>
      </div>
      <div className="w-full">
        <table className="table-fixed w-full mx-auto text-sm font-normal">
          <thead className="space-y-2">
            <tr className="text-gray-400 tracking-wider">
              <th>Server</th>
              <th>Ping</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {pingQueries.map(({ data, isLoading, isError }: UseQueryResult<TServerDetailProps>, index) => {
              // store the result in the localstorage
              const name = serverDetails.find((server) => server.ip === data?.ip)?.name;
              return (
              <tr
                key={data?.ip}
                className="hover:bg-gray-200 rounded-full transition-colors"
              >
                <td className="text-center p-4">{name}</td>
                {isLoading ? (
                  <td className="text-center p-4">
                    <RiLoader4Fill className="animate-spin mx-auto" />
                  </td>
                ) : isError ? (
                  <td className="text-center p-4">
                    <MdErrorOutline className="mx-auto" />
                  </td>
                ) : (
                  <td className="text-center p-4">{data?.ping_time_ms}ms</td>
                )}
                {isLoading ? (
                  <td className="text-center p-4"></td>
                ) : isError ? (
                  <td className="text-center p-4">
                    <MdErrorOutline className="mx-auto" />
                  </td>
                ) : (
                  <td className="text-center p-4">
                    <span
                      className={`inline-block w-3 h-3 rounded-full ${
                        data?.status === "up"
                          ? `bg-green-600 shadow-green-500`
                          : `bg-red-600 shadow-red-500`
                      }`}
                    ></span>
                  </td>
                )}
              </tr>
            )})}
          </tbody>
        </table>
      </div>
    </div>
  );
}

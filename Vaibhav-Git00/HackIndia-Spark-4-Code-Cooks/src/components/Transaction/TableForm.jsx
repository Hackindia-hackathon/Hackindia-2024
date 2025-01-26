import React from 'react';
import { useState,useEffect } from 'react';

const TableForm = () => {
  return (
    <div className=" p-4 mb-3 border-1 border-gray-300 bg-sky-200 hover:bg-slate-400 text-black hover:text-white rounded">
      <table className="w-full ">
        <tbody className=''>
          <tr className="">
            <td className="pr-12 font-semibold text-lg">12/12/2021</td>
            <td className="pr-24 font-semibold text-lg">Amazon</td>
            <td className=" pr-14   " ><img src="/message.png" alt="" /></td>
            <td className="text-lg  font-semibold">Rs. 1200</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TableForm;
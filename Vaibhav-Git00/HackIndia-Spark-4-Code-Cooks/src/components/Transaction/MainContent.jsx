import Contribution from "./Contribution";
import TableForm from "./TableForm";

import { useState } from "react"
import UserBox from "./UserBox";


const MainContent = () => {
  const [isChildVisible, setIsChildVisible] = useState(false);
  const [amount, setAmount] = useState(null);
  const [users, setUsers] = useState([]);
  const [numInputs, setNumInputs] = useState('');
  const [showTable, setShowTable] = useState(false);
  const Amount = amount / numInputs;
  console.log(users);
  return (
    <div className="flex p-4 h-full w-full ">
      <div className="last30days w-2/3  px-6 py-3 ">
        <div className=" flex justify-between  p-6 w-full mb-14  bg-white  rounded-lg ">
          <div className="">
            <p className="font-semibold">Last </p>
            <p className="text-center font-semibold">30 Days</p>
          </div>
          <div className="w-[0.1rem] h-13 bg-slate-500 opacity-50 "></div>
          <div>
            <p className="text-gray-500 font-semibold">TRANSACTIONS</p>
            <p className="text-center font-semibold">96</p>
          </div>
          <div className="w-[0.1rem] h-13 bg-slate-500 opacity-50 "></div>
          <div>
            <p className="text-gray-500 font-semibold">TOTAL SPENT</p>
            <p className="text-center font-semibold">Rs. 1200</p>
          </div>
          <div className="w-[0.1rem] h-13 bg-slate-500 opacity-50 "></div>
          <div>
            <p className="text-gray-500 font-semibold">TOTAL AMOUNT</p>
            <p className="text-center font-semibold">Rs. 120000</p>
          </div>
        </div>
        <div className="bg-white pt-5 rounded-lg pb-3">
          <div className=" flex justify-between  mb-5 px-6 ">
            <div className="flex items-center gap-32">
              <p className="font-semibold text-xl text-sky-500">DATE</p>
              <p className="font-semibold text-xl text-sky-500">VENDOR</p>
            </div>

            <div className="flex items-center gap-24">
              <p className="font-semibold text-xl text-sky-500">ATTACHMENT</p>
              <p className="font-semibold text-xl text-sky-500">AMOUNT</p>
            </div>
          </div>

          <div className="w-full h-1 bg-[#dfdfdf] "></div>


          <p className="mt-6  ml-3 text-2xl font-bold">History</p>


          <div className="tab mt-4 overflow-auto h-[304px] p-2 ">
            <TableForm />
            <TableForm />
            <TableForm />
            <TableForm />
            <TableForm />
            <TableForm />
            <TableForm />
            <TableForm />
            <TableForm />
          </div>

        </div>

      </div>
      <div className="pendingRupees rounded-sm  bg-slate-200   w-1/3">
        <h1 className="text-3xl font-bold bg-blue-300 p-4 text-center ">Pending Money</h1>
        <Contribution isChildVisible={isChildVisible} setIsChildVisible={setIsChildVisible} amount={amount} setAmount={setAmount} users={users} setUsers={setUsers} numInputs={numInputs} setNumInputs={setNumInputs} showTable={showTable} setShowTable={setShowTable} />


        {showTable && users.map(user => {
          return (
            <UserBox userId={user.id} userName={user.username} userAccount={user.useraccountnumber} Amount={Amount} />
          )

        })}








      </div>
    </div>
  );
};

export default MainContent;

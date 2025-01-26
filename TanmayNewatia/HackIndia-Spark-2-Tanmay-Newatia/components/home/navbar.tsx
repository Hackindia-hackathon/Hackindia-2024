'use client'

import Link from "next/link";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoWallet } from "react-icons/io5";
import { usePathname, useSearchParams } from "next/navigation";
import Modal from 'react-modal';
import { use, useEffect, useState } from "react";
import useWindowDimensions from '@/components/hooks/getDimensions';
import { useRouter } from 'next/navigation';
import { getAccount, updateQuest } from "../datacollection/account";
import ConnectButtonWrapper from "../BlockchainProvider";
import toast, { Toaster } from "react-hot-toast";
import { SiSidequest } from "react-icons/si";
import { FaWallet } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";
import { questVal } from "@/lib/questval";
import { IoMdClose } from "react-icons/io";
import { readContract, prepareContractCall } from "thirdweb"
import { useActiveAccount, useSendTransaction, useSendAndConfirmTransaction } from "thirdweb/react";
import { contract } from "@/components/client";

export default function Navbar() {
  const { width, height } = useWindowDimensions();
  const activeAccount = useActiveAccount();
  const [dontRequestInitialization, setDontRequestInitialization] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [counter, setCounter] = useState(0);
  const [menuopen, setMenuOpen] = useState(false);
  const router = useRouter();
  const [modalIsOpen, setmodalIsOpen] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const referral = searchParams.get('referral');
  const { mutate: sendTransaction } = useSendTransaction();
  const [questStatus, setQuestStatus] = useState<{ [key: string]: { status: string } } | null>(null);
  const { mutate: sendAndConfirmTx, data: transactionReceipt } = useSendAndConfirmTransaction();

  useEffect(() => {
    if (!activeAccount) return;
    getStatus();
  }, [activeAccount?.address])

  const getStatus = async () => {
    const initialized = await readContract({
      contract,
      method: "function initialized(address) view returns (bool)",
      params: [activeAccount?.address || ""]
    }).then((res) => { if (res) { } else { initialize() } });
    const counts = readContract({
      contract,
      method: "function counts(address) view returns (uint256 count)",
      params: [activeAccount?.address || ""]
    });
  }

  useEffect(() => {
    if (!activeAccount || dontRequestInitialization) return;

    const interval = setInterval(() => {
      fetch();
    }, 1000);
    return () => clearInterval(interval);
  }, [activeAccount, dontRequestInitialization]);

  const fetch = async () => {
    if (!activeAccount) {
      setCounter(0);
      return
    };
    try {
      const counts = await readContract({
        contract,
        method: "function counts(address) view returns (uint256 count)",
        params: [activeAccount?.address || ""]
      });
      setCounter(Number(counts));
    }
    catch (e) {
      setCounter(0);
      console.log(e);
    }
  }

  useEffect(() => {
    if (transactionReceipt) {
      toast.success("Keep going on with the quests!")
    }
  }, [transactionReceipt])

  const accountHandler = async () => {
    if (!activeAccount) {
      return
    }
    if (referral) {
      const data = await getAccount(activeAccount?.address, referral);
    }
    else {
      const data = await getAccount(activeAccount?.address, "");
      if (data) {
        setQuestStatus(data?.quest)
      }
    }
  }

  useEffect(() => {
    if (!activeAccount) return;
    accountHandler();
  }, [activeAccount, questStatus])

  const initialize = async () => {
    if (!activeAccount) return;
    setDontRequestInitialization(true);

    try {
      const transaction = prepareContractCall({
        contract,
        method: "function initialize()",
        params: []
      });
      sendTransaction(transaction);
    } catch (e) {
      console.error(e);
    }
  };

  const handleQuest = async (id: any) => {
    // if (!activeAccount) return;
    // setDontRequestInitialization(true);
    // try {
    //   console.log(id);
    //   const transaction = prepareContractCall({
    //     contract,
    //     method: "function topup(uint256 amount) payable",
    //     params: [BigInt(5)],
    //     value: BigInt(1 * 0.00005 * 10 ** 18)
    //   });
    //   sendAndConfirmTx(transaction);
    // } catch (e) {
    //   console.error(e);
    // }
    if (questStatus != null) {
      questStatus[id]["status"] = "completed";
    }
    const account = activeAccount?.address || "";
    const data = await updateQuest(account, questStatus);
  }

  const questList = questVal.map((items, key) => {
    return (
      <div key={key} onClick={() => { handleQuest(items.id); setTimeout(() => { toast.success("Quest Completed!"); setmodalIsOpen(!modalIsOpen); router.push(items.url); }, 1000); }} className="cursor-pointer flex justify-between text-black min-h-[40px] items-center text-lg bg-slate-300 px-4 rounded-full my-2">
        <div>
          <img src="" alt="" />
          <p className="text-sm">{items.text}</p>
        </div>
        {(questStatus != null || questStatus != undefined) ? (questStatus[items.id]["status"] == "active") ?
          <div className="px-2 rounded-full flex justify-evenly items-center bg-gray-500">
            <img src="/game/chip.svg" alt="chip" className="object-contain w-[30px] h-[30px]" />
            <p className="text-sm text-white">{items.token}</p>
          </div>
          :
          <div className="px-2 rounded-full flex justify-evenly items-center bg-gray-500">
            <p className="text-2xl p-1 text-white"><GrStatusGood /></p>
          </div>
          :
          <div className="px-2 rounded-full flex justify-evenly items-center bg-gray-500">
            <img src="/game/chip.svg" alt="chip" className="object-contain w-[30px] h-[30px]" />
            <p className="text-sm text-white">{items.token}</p>
          </div>
        }

      </div>
    )
  })

  const path = usePathname();
  return (
    <>
      {(path !== "/auth" && path !== "/wallet") ? (
        <header className="backdrop-blur-xl top-0 fixed text-white w-full z-10 px-4 lg:px-6 md:h-[80px] h-auto max-md:justify-center max-md:flex-col max-md:items-center py-6 md:py-10 flex items-center bg-black">
          <nav className="w-full flex justify-between">
            {(width) ? (width < 600) ?
              <div onClick={() => { setMenuOpen(!menuopen); }} className="flex items-center justify-center" >
                <img src="/logo.svg" className="h-[50px] w-[50px] object-contain" />
              </div> :
              <Link href="/" className="flex items-center justify-center" >
                <img src="/logo.svg" className="h-[50px] w-[50px] object-contain" />
              </Link> : ""
            }
            <div className={"max-md:hidden flex font-bold items-center "}>
              <div className="text-xl uppercase hover:text-[#CB2742] px-8">
                <button onClick={() => { window.location.replace('/'); }}>Home</button>
              </div>
              <div className="text-xl uppercase hover:text-[#CB2742] px-8">
                <button onClick={() => { window.location.replace('/library') }}>Library</button>
              </div>
              {/* <li className="uppercase hover:text-[#CB2742]">
                                <Link href="/">Community</Link>
                            </li> */}
              {/* <li className="uppercase hover:text-[#CB2742]">
                                <Link href="/">Support</Link>
                            </li> */}
              {/* <li className="uppercase hover:text-[#CB2742]">
                                <Link href="/market">Market</Link>
                            </li> */}
              <div className="text-xl uppercase hover:text-[#CB2742] px-8">
                <button onClick={() => { window.location.replace('/about') }}>About Us</button>
              </div>
            </div>
            <div className="flex text-2xl gap-4 items-center">
              {(activeAccount) ?
                <>
                  {/* <p className="bg-[#191D29] text-lg px-4 py-1">
                                                {counter} SPC
                                            </p>
                                            <p>
                                                |
                                            </p>
                                            <p className="bg-[#191D29] text-lg px-4 py-1">
                                                {ton} TON
                                            </p>
                                            <p>
                                                |
                                            </p> */}
                  <div className="cursor-pointer" onClick={() => { setmodalIsOpen(!modalIsOpen); }}>
                    <SiSidequest />
                  </div>
                  <p>
                    |
                  </p>
                </>
                : ""}

              <ConnectButtonWrapper />
              {(!activeAccount) ? "" :
                <div onClick={() => { window.location.replace('/wallet'); }} className="flex gap-4 items-center justify-center">
                  <p>
                    |
                  </p>
                  <div className="cursor-pointer">
                    <FaWallet />
                  </div>
                </div>
              }
            </div>
            <Modal
              isOpen={modalIsOpen}
              ariaHideApp={false}
              // onAfterOpen={afterOpenModal}
              // onRequestClose={closeModal}
              style={{
                overlay: {
                  backgroundColor: 'transparent'
                },
                content: {
                  top: '80px',
                  right: '0px',
                  left: 'auto',
                  bottom: 'auto',
                  maxWidth: "400px",
                  minWidth: "300px",
                  width: "100%",
                  borderRadius: "20px",
                  zIndex: "100"
                }
              }}
              contentLabel="Quest Modal"
            >
              {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
              <div className="flex justify-between"><p className="text-black text-2xl">Quests</p><button className="text-black" onClick={() => { setmodalIsOpen(!modalIsOpen) }}><IoMdClose /></button></div>
              {questList}
            </Modal>
          </nav>
          <div className={(menuopen) ? "font-bold w-screen items-center md:ml-auto flex max-md:flex-col max-md:justify-center max-md:items-center max-md:h-auto gap-8 md:gap-6 mt-[20px] md:hidden" : " md:ml-auto max-md:flex-col max-md:justify-center max-md:items-center max-md:h-auto max-md:mt-[20px] gap-4 md:gap-6 hidden"}>
            <div className="text-xl uppercase hover:text-[#CB2742] px-8">
              <button onClick={() => { window.location.replace('/'); }}>Home</button>
            </div>
            <div className="text-xl uppercase hover:text-[#CB2742] px-8">
              <button onClick={() => { window.location.replace('/library') }}>Library</button>
            </div>
            {/* <li className="uppercase hover:text-[#CB2742]">
                                <Link href="/">Community</Link>
                            </li> */}
            {/* <li className="uppercase hover:text-[#CB2742]">
                                <Link href="/">Support</Link>
                            </li> */}
            {/* <li className="uppercase hover:text-[#CB2742]">
                                <Link href="/market">Market</Link>
                            </li> */}
            <div className="text-xl uppercase hover:text-[#CB2742] px-8">
              <button onClick={() => { window.location.replace('/about') }}>About Us</button>
            </div>
          </div>

          <Toaster />
        </header >) : <></>
      }
    </>
  )
}
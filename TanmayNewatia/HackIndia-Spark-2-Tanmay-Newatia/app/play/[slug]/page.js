'use client'
import React, { Fragment, useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { Unity, useUnityContext } from "react-unity-webgl";
import ReactFullscreen from 'react-easyfullscreen';
import { MdOpenInFull } from "react-icons/md";
import allgames from "@/lib/allgames";
import { usePathname } from "next/navigation";
import useWindowDimensions from "@/components/hooks/getDimensions";
import Link from "next/link";
import { getPlays, registerPlays } from "@/components/datacollection/gameplay";
import toast, { Toaster } from 'react-hot-toast';
import ReactModal from "react-modal";
import { IoIosCloseCircle } from "react-icons/io";
import { MdOutlineSwapCalls } from "react-icons/md";
import { useActiveAccount } from "thirdweb/react";
import { contract } from "@/components/client";
import { prepareContractCall } from "thirdweb";
import { useSendAndConfirmTransaction } from "thirdweb/react"

export default function PlayPage() {
	const { width, height } = useWindowDimensions();
	const activeAccount = useActiveAccount();
	const [dontRequestInitialization, setDontRequestInitialization] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [topUpVal, setTopUpVal] = useState(0);
	const path = usePathname();
	const slug = path.split("/")[2];
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const { mutate: sendAndConfirmTx, data: transactionReceipt } = useSendAndConfirmTransaction();

	useEffect(() => {
		if (transactionReceipt) {
			setIsOpen(true);
			setModalIsOpen(false);
		}
	}, [transactionReceipt])


	const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
		loaderUrl: allgames[slug]["loaderUrl"],
		dataUrl: allgames[slug]["dataUrl"],
		frameworkUrl: allgames[slug]["frameworkUrl"],
		codeUrl: allgames[slug]["codeUrl"]
	});

	useEffect(() => {
		if (!activeAccount) return;
		console.log("Current address: ", activeAccount.address);

		setDontRequestInitialization(false);
	}, [activeAccount]);

	useEffect(() => {
		if (!activeAccount && isOpen) {
			toast.error("Wallet Disconnected! Reloading the Page!");
			setTimeout(() => {
				window.location.reload();
			}, 5000);
		}
	}, [activeAccount])

	useEffect(() => {

		if (activeAccount && isOpen) {
			toast.error("Wallet Changed! Reloading the Page!");
			setTimeout(() => {
				window.location.reload();
			}, 5000);
		}
	}, [activeAccount])

	const handleGamePlay = async () => {
		const views = await getPlays(slug);
		await registerPlays(slug);
	}

	const decrementCounter = async () => {
		if (!activeAccount) return;
		setDontRequestInitialization(true);
		try {
			const transaction = prepareContractCall({
				contract,
				method: "function decrement()",
				params: []
			});
			sendAndConfirmTx(transaction);
			// if (transactionReceipt)
			handleGamePlay();
		} catch (e) {
			console.error(e);
		}
	};

	const topUp = async () => {
		if (!activeAccount) return;
		setDontRequestInitialization(true);
		try {
			const valueInWei = (topUpVal * 0.00005 * 10 ** 18).toString();
			const transaction = prepareContractCall({
				contract,
				method: "function topup(uint256 amount) payable",
				params: [topUpVal],
				value: valueInWei
			});
			sendAndConfirmTx(transaction);
		} catch (e) {
			console.error(e);
		}
	}

	return (
		(width <= 600) ?
			<main className="flex flex-col gap-4 justify-center items-center h-screen w-screen">
				<p className="text-white text-2xl w-10/12 text-center">You cannot play games on the mobile try on larger screen</p>
				<Link href="/" className="text-white text-2xl p-2 rounded-xl text-center border-white border hover:text-[#CB2742] hover:border-[#CB2742]">Home</Link>
			</main>
			:
			<main className="w-screen min-h-screen bg-[#1E1E1E]">
				{/* <main className="w-screen min-h-screen mt-[60px] md:mt-[80px] bg-[#1E1E1E]"> */}
				<div className="pt-[80px] md:pt-[100px] w-10/12 mx-auto flex flex-col gap-8">
					{(!isOpen || !activeAccount) ?
						<img src="/play/main.svg" alt="GamePlay" className="w-full object-cover h-4/6 max-h-[500px] border border-white" />
						:
						<ReactFullscreen>
							{({ ref = {}, onRequest, onExit }) => (
								<div className="w-10/12 mx-auto flex flex-col gap-8">
									<div ref={ref} id="canvas" className="w-full object-cover border border-white">
										<Fragment>
											{!isLoaded && (
												<div className={"flex items-center justify-center !h-full"}>
													<p className="text-white">Loading Application... {Math.round(loadingProgression * 100)}%</p>
												</div>
											)}
											<Unity unityProvider={unityProvider} className="w-full object-cover h-full border border-white" style={{ visibility: isOpen ? "visible" : "hidden" }} />
										</Fragment>
									</div>
									<button className="text-white -mt-[100px] ml-[25px]" style={{ width: 50, height: 50, fontSize: 35 }} onClick={() => onRequest()}><MdOpenInFull /></button>
								</div>
							)}
						</ReactFullscreen>}
					<div className="w-full flex justify-between">
						<h2 className="font-bold text-4xl uppercase">{allgames[slug]["name"]}</h2>
						<div className="w-full lg:w-8/12 flex justify-end gap-4">
							{(slug == "aptos-arena") ?
								<></> :
								<>
									<div className="flex text-2xl font-bold items-center">
										<img src="/game/chip.svg" alt="Chip" className="w-[25px]" />
										<p>1/h</p>
									</div>
									<div className="border border-white flex p-2 px-4 gap-4 items-center rounded-lg font-bold">
										<p className="text-lg">Top-Up RC</p>
										{/* <p className="text-lg">Buy {topUpVal} SpawnChips</p> */}
										{/* <div className="cursor-pointer bg-[#CB2742] w-[35px] h-[35px] rounded flex justify-center items-center" onClick={() => { setTopUpVal(topUpVal + 1) }}>
                                            <FaPlus />
                                        </div>
                                        <div className="cursor-pointer bg-[#CB2742] w-[35px] h-[35px] rounded flex justify-center items-center" onClick={() => { (topUpVal > 0) ? setTopUpVal(topUpVal - 1) : ""; }}>
                                            <FaMinus />
                                        </div> */}
										{/* <div onClick={() => { setModalIsOpen(true) }} className="cursor-pointer bg-[#CB2742] w-[35px] h-[35px] rounded flex justify-center items-center" onClick={() => { (account) ? topUp() : toast.error("Wallet not connected!") }}> */}
										<div onClick={() => { setModalIsOpen(true) }} className="cursor-pointer bg-[#CB2742] w-[35px] h-[35px] rounded flex justify-center items-center">
											<FaChevronRight />
										</div>
									</div>
									<div onClick={() => { (activeAccount) ? decrementCounter() : toast.error("Wallet not Connected!"); }} className="cursor-pointer bg-[#2D8947] w-[250px] rounded-lg p-2 px-4 flex items-center justify-center gap-4 text-lg uppercase text-center">
										<p>Start Session</p>
									</div>
								</>
							}
						</div>
					</div>
				</div>
				<ReactModal
					isOpen={modalIsOpen}
					contentLabel="TopUp"
					className="p-4 w-[300px] h-[300px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] absolute bg-[#1E1E1E] flex flex-col justify-evenly"
				>
					<button className="absolute right-0 top-0 text-2xl" onClick={() => { setModalIsOpen(false) }}><IoIosCloseCircle /></button>
					<div className="w-full h-full flex flex-col justify-evenly items-center">
						<p className="text-center text-white text-xl">Top-up RealmChips</p>
						<div className={"flex w-5/6 mx-auto justify-evenly items-center text-xl"}>
							<div className="cursor-pointer bg-[#CB2742] w-[35px] h-[35px] rounded flex justify-center items-center" onClick={() => { (topUpVal > 0) ? setTopUpVal(topUpVal - 1) : ""; }}>
								<FaMinus />
							</div>
							<p className="border p-1 rounded w-6/12 text-center">{topUpVal} Chips</p>
							<div className="cursor-pointer bg-[#CB2742] w-[35px] h-[35px] rounded flex justify-center items-center" onClick={() => { setTopUpVal(topUpVal + 1) }}>
								<FaPlus />
							</div>
						</div>
						<div className="text-2xl">
							<MdOutlineSwapCalls />
						</div>
						<div className={"flex w-4/6 mx-auto justify-evenly items-center text-xl"}>
							<p className="border p-1 rounded w-5/6 text-center">{Number((topUpVal * 0.00005).toPrecision(2))} ETH</p>
						</div>
						<button className="bg-[#CB2742] w-1/2 p-2 rounded-lg" onClick={() => { (activeAccount) ? (topUpVal > 0) ? topUp() : toast.error("Buy Amount should be greater than 1 !") : toast.error("Wallet not connected!") }}>Buy RC</button>
					</div>
				</ReactModal>
				<Toaster />
			</main>
	)
}

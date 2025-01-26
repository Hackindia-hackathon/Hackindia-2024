import React, { useEffect, useRef, useState } from "react";
import { Label } from "./ui/Label";
import { Input } from "./ui/Input";
import { cn } from "../utils/cn";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../store/data-slice";
import { backendUrl } from "../App";

export function ProjectRegistration() {

  const [carbonCredits, setcarbonCredits] = useState(null);
  const [metaData, setMetaData] = useState(null);

  const [projectName, setProjectName] = useState("");
  const [projectSymbol, setProjectSymbol] = useState("");
  const [PollutionReduced, setPollutionReduced] = useState(0);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [numberTrees, setNumberTrees] = useState(0);
  const [Watersaved, setWatersaved] = useState(0);
  const [AreaUnderSustainablePractices, setAreaUnderSustainablePractices] = useState(0);
  const [Areaofmangroves, setAreaofmangroves] = useState(0);
  const [price, setPrice] = useState(0.001);

  const dispatch = useDispatch();
  const inputRef = useRef();
  const walletAddress = useSelector((state) => state.data.walletAddress);

  const connectWallet = async () => {
    if (window.ethereum) {
      console.log('MetaMask detected');

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        dispatch(dataActions.setWalletAddress(accounts[0]));
      } catch (error) {
        console.log('Error connecting...');
      }

    } else {
      alert('Meta Mask not detected');
    }
  };

  useEffect(() => {
    if (!walletAddress) {
      connectWallet();
    }
  }, []);

  async function deployContract() {
    const bodyData = {
      name: projectName,
      symbol: projectSymbol,
      initialSupply: parseInt(carbonCredits),
      salePrice: (parseFloat(price) * (Math.pow(10, 18))) + "",
      metaData: metaData._id,
      payoutAddress: walletAddress
    };

    try {
      const response = await fetch(`${backendUrl}/deploy/tokenContract`, {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: { "Content-Type": "application/json" }
      });
      const res = await response.json();
      alert(`${res.messAreaUnderSustainablePractices} ${res.address}`);
    } catch (e) {
      console.log(e);
    }
  }

  async function sendMetaData() {
    const bodyData = {

      desc: projectName,
      PollutionReduced: PollutionReduced,
      lattitude: latitude,
      longitude,
      numberTrees: parseInt(numberTrees),
      AreaUnderSustainablePractices: parseInt(AreaUnderSustainablePractices),
      Watersaved: parseInt(Watersaved),
      Areaofmangroves: parseInt(Areaofmangroves)
    };

    try {
      const response = await fetch(`${backendUrl}/metaData/upload`, {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: { "Content-Type": "application/json" }
      });
      const res = await response.json();
      if (res.success) {
        setMetaData(res.metaData);
        await getcarbonCredits();
      }
      else {
        console.log("Something went wrong on the backend...");
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function getcarbonCredits() {
    let  dryWeight = 
    Number(numberTrees*10) +
    Number(AreaUnderSustainablePractices*20) +
    Number(Watersaved*5) +
    Number(PollutionReduced*50) +
    Number(Areaofmangroves*30);

    let carbonCredits = dryWeight ;
    setcarbonCredits(carbonCredits);
    console.log("Green Credits: ", carbonCredits);
    await deployContract();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMetaData();
  };



  const handleGetCoordinates = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLatitude(latitude);
          setLongitude(longitude);
        },
        (error) => {
          console.error("Error getting coordinates: ", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (

    <div>
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-transparent dark:bg-black">
        <h2 className="font-bold text-3xl text-white dark:text-neutral-200">
          Register Your Project
        </h2>
        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="projectName">Project Name</Label>
            <Input
              id="projectName"
              placeholder="Amazon reforestation initiative...."
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="projectSymbol">Project Symbol</Label>
            <Input
              id="projectSymbol"
              placeholder="AFI, OAS..."
              type="text"
              value={projectSymbol}
              onChange={(e) => setProjectSymbol(e.target.value)}
            />
          </LabelInputContainer>
           

          <LabelInputContainer className="mb-4">
            <div className="flex items-center">
              <Label htmlFor="coordinates">
                GeoLocation
                <button
                  type="button"
                  onClick={handleGetCoordinates}
                  className="rounded-full p-2"
                >
                  📍
                </button>
              </Label>
            </div>

            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="latitude">Latitude</Label>
                <Input
                  id="latitude"
                  placeholder="13.116519 / N 13° 6' 59.469''"
                  type="text"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="longitude">Longitude</Label>
                <Input
                  id="longitude"
                  placeholder="77.642146 / E 77° 38' 31.727''"
                  type="text"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                />
              </LabelInputContainer>
            </div>
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="numberTrees">Number of trees planted</Label>
            <Input
              id="numberTrees"
              placeholder="500"
              type="number"
              min="0"
              value={numberTrees}
              onChange={(e) => setNumberTrees(e.target.value)}
            />

            <LabelInputContainer className="mb-4">
              <Label htmlFor="PollutionReduced">Amount of pollutants reduced (in tons)</Label>
              <Input
                id="PollutionReduced"
                placeholder="12"
                type="number"
                 min="0"
                value={PollutionReduced}
                onChange={(e) => setPollutionReduced(e.target.value)}
              />
            </LabelInputContainer>
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="Watersaved">
            Volume of water conserved (in cubic meters)
            </Label>
            <Input
              id="Watersaved"
              placeholder="20"
              type="number"
              min="0"
              value={Watersaved}
              onChange={(e) => setWatersaved(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="AreaUnderSustainablePractices">Area of land under sustainable practices (in hectares)</Label>
            <Input
              id="AreaUnderSustainablePractices"
              placeholder="50"
              type="number"
              min="0"
              value={AreaUnderSustainablePractices}
              onChange={(e) => setAreaUnderSustainablePractices(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="Areaofmangroves">Area of mangroves conserved or restored (in hectares) </Label>
            <Input
              id="Areaofmangroves"
              placeholder="30"
              type="number"
              min="0"
              value={Areaofmangroves}
              onChange={(e) => setAreaofmangroves(e.target.value)}
            />
          </LabelInputContainer>

          {carbonCredits && (
            <LabelInputContainer className="mb-4">
              <Label htmlFor="carbonCredits">
                Green Credits Initialized
              </Label>
              <Input
                id="carbonCredits"
                placeholder="70"
                type="number"
                min="0"
                disabled
                value={carbonCredits}
              />
            </LabelInputContainer>
          )}

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            {carbonCredits ? "Submit for Deployment" : "Enter"}
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default ProjectRegistration;
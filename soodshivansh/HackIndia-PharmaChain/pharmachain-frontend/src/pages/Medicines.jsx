import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import QRCode from 'react-qr-code';


const Medicines = () => {
    const [medicines, setMedicines] = useState(() => {
        const storedMedicines = localStorage.getItem('medicines');
        return storedMedicines ? JSON.parse(storedMedicines) : [];
      });
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(false);

  const contractAddress = "0x3A885338d3e5F022A087079Ff249cCFB6250e5Be";
  const contractABI = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "batchNumber",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "manufacturer",
          "type": "string"
        }
      ],
      "name": "MedicineRegistered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "batchNumber",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "status",
          "type": "string"
        }
      ],
      "name": "StatusUpdated",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "medicines",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "batchNumber",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "manufacturer",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "expiryDate",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "status",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "userTransactions",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "batchNumber",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "manufacturer",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "expiryDate",
          "type": "string"
        }
      ],
      "name": "registerMedicine",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "batchNumber",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "newStatus",
          "type": "string"
        }
      ],
      "name": "updateMedicineStatus",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getUserTransactions",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "batchNumber",
          "type": "uint256"
        }
      ],
      "name": "getMedicineDetails",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "manufacturer",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "expiryDate",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "status",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ];

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        try {
          const web3 = new Web3(window.ethereum);
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const accounts = await web3.eth.getAccounts();
          const contract = new web3.eth.Contract(contractABI, contractAddress);

          setWeb3(web3);
          setContract(contract);
          setAccount(accounts[0]);

          console.log('Connected Account:', accounts[0]);
        //   fetchMedicines();  // Fetch medicines after contract is initialized
        } catch (error) {
          console.error("Error initializing Web3", error);
        }
      } else {
        console.error("MetaMask is not installed");
      }
    };

    initWeb3();
  }, []);


const registerMedicine = async (e) => {
    e.preventDefault();
    if (!contract || !account) return;

    const form = e.target;
    const batchNumber = form.batchNumber.value;
    const name = form.name.value;
    const manufacturer = form.manufacturer.value;
    const expiryDate = form.expiryDate.value;

    try {
        await contract.methods
            .registerMedicine(batchNumber, name, manufacturer, expiryDate)
            .send({ from: account });

        const qrCodeData = `Batch Number: ${batchNumber}, Name: ${name}, Manufacturer: ${manufacturer}, Expiry Date: ${expiryDate}`;
        const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrCodeData)}&size=200x200`;
        
        const newMedicine = {
            batchNumber,
            name,
            manufacturer,
            expiryDate,
            status: "manufactured",
            qrCodeURL
        };

        setMedicines((prevMedicines) => [...prevMedicines, newMedicine]);
    } catch (error) {
        console.error("Error registering medicine", error);
    }

    form.reset();
};


  
  

  // Function to fetch all medicines for the current user
//   const fetchMedicines = async () => {

//     if (!contract || !account) return;

//     setLoading(true);
//     try {
//       const batchNumbers = await contract.methods.getUserTransactions().send({ from: contractAddress });
//       const medicineList = await Promise.all(
//         batchNumbers.map(async (batchNumber) => {
//           const medicine = await contract.methods.getMedicineDetails(batchNumber).call();
//           return {
//             batchNumber,  // Include the batch number
//             name: medicine.name,
//             manufacturer: medicine.manufacturer,
//             expiryDate: medicine.expiryDate,
//             status: medicine.status
//           };
//         })
//       );
//       setMedicines(medicineList);
//     } catch (error) {
//       console.error("Error fetching medicines", error);
//     }
//     setLoading(false);
//   };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="bg-blue-800 text-center py-8 rounded-md mb-6">
        <h1 className="text-3xl font-bold mb-4">Manage Your Medicines</h1>
        <p className="text-lg mb-6">Easily register new medicines and keep track of your inventory.</p>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-blue-500 text-white hover:bg-blue-600">Register Medicine</Button>
          </DialogTrigger>
          <DialogContent className="bg-gray-800 text-white">
            <DialogHeader>
              <DialogTitle>Register New Medicine</DialogTitle>
              <DialogDescription>Fill out the form below to register a new medicine.</DialogDescription>
            </DialogHeader>
            <form onSubmit={registerMedicine}>
              <div className="space-y-4">
                <Input name="batchNumber" placeholder="Batch Number" required className="bg-gray-700 text-white" />
                <Input name="name" placeholder="Medicine Name" required className="bg-gray-700 text-white" />
                <Input name="manufacturer" placeholder="Manufacturer Name" required className="bg-gray-700 text-white" />
                <Input name="expiryDate" placeholder="Expiry Date" required className="bg-gray-700 text-white" />
              </div>
              <DialogFooter className="mt-6">
                <Button type="submit" className="bg-blue-500 text-white hover:bg-blue-600">
                  Add Medicine
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-gray-800 p-6 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Medicine Details</h2>
        {loading ? (
          <p>Loading medicines...</p>
        ) : (
          <div className="space-y-4">
            {medicines.length > 0 ? (
                medicines.map((medicine, index) => (
                    <div className="flex justify-between bg-gray-700 p-4 rounded-md items-center">
                        <div key={index} className="">
                            <h3 className="text-xl font-semibold">{medicine.name}</h3>
                            <p>Batch Number: {medicine.batchNumber}</p>
                            <p>Manufacturer: {medicine.manufacturer}</p>
                            <p>Expiry Date: {medicine.expiryDate}</p>
                            <p>Status: {medicine.status}</p>
                        </div>
                        <div className="">
                            <img src={medicine.qrCodeURL} alt={`QR code for ${medicine.name}`} className="mt-2" />
                        </div>
                    </div>
                ))
            ) : (
            <p className="text-gray-400">No medicines registered yet.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Medicines;

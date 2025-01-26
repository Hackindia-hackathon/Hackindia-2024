import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Import ABI and address from the contract file
// import { contractABI, contractAddress } from "../contract/contract";

import { contractABI, contractAddress } from "@/contract/contract";
import { Upload, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";


const CertificateSubmissionComponent = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    certificateName: '',
    techStack: '',
    issuingOrg: '',
    orgWallet: '',
    ipfs: ''
  });
  const [contract, setContract] = useState<any>(null);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [loadingContract, setLoadingContract] = useState<boolean>(true);
  const [file, setFile] = useState<File | null>(null);
  const [cid, setCid] = useState("");
  const [publicUrl, setPublicUrl] = useState("");
  // const toast = useToast();

  // Initialize contract and wallet address
  // useEffect(() => {
  //   const initContract = async () => {
  //     if (!window.ethereum) {
  //       console.error("Ethereum object not found");
  //       setLoadingContract(false);
  //       return;
  //     }

  //     try {
  //       const provider = new ethers.BrowserProvider(window.ethereum);
  //       const signer = await provider.getSigner();
  //       const contractInstance = new ethers.Contract(contractAddress, contractABI, signer);

  //       const address = await signer.getAddress();
  //       setWalletAddress(address);
  //       setContract(contractInstance);

  //       console.log("Contract initialized:", contractInstance);
  //       console.log("Connected wallet address:", address);
  //     } catch (error) {
  //       console.error("Error initializing contract:", error);
  //     } finally {
  //       setLoadingContract(false);
  //     }
  //   };

  //   initContract();
  // }, []);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);

      // Preview the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  // Upload file to IPFS
  const handleUploadToIPFS = async () => {
    if (!file) {
      alert("Please select a file before uploading.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');

      const data = await response.json();

      if (data.cid) {
        setCid(data.cid);
        setPublicUrl(data.public_url);
        console.log(data.cid, data.public_url);

        // Update formData with IPFS hash
        setFormData(prevState => ({
          ...prevState,
          ipfs: data.cid
        }));
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("An error occurred while uploading the file.");
    }
  };

  // Remove uploaded image
  const removeImage = () => {
    setImagePreview(null);
    setFile(null); // Reset the file state
    console.log("Image removed");
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
    console.log(`Updated ${id}:`, value);
  };

  // Handle form submission
  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   if (!contract) {
  //     console.error("Contract is not initialized");
  //     return;
  //   }

  //   try {
  //     const tx = await contract.submitSkill(
  //       formData.certificateName,
  //       formData.techStack,
  //       formData.issuingOrg,
  //       formData.ipfs
  //     );

  //     console.log("Transaction sent:", tx);
  //     await tx.wait();
      
  //     console.log("Certificate submitted successfully. Transaction hash:", tx.hash);

  //     // Reset form data after submission
  //     setFormData({
  //       certificateName: '',
  //       techStack: '',
  //       issuingOrg: '',
  //       orgWallet: '',
  //       ipfs: ''
  //     });
      
  //     removeImage();
  //   } catch (error) {
  //     console.error('Error submitting certificate:', error);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!contract) {
        console.error("Contract is not initialized");
        return;
        
    }

    try {
        const tx = await contract.submitSkill(
            formData.certificateName,
            formData.techStack,
            formData.issuingOrg,
            formData.ipfs
        );

        console.log("Transaction sent:", tx);
        await tx.wait();

        console.log("Certificate submitted successfully. Transaction hash:", tx.hash);

        // Show success notification
        toast.success("Certificate submitted successfully!");

        // Reset form data after submission
        setFormData({
            certificateName: '',
            techStack: '',
            issuingOrg: '',
            orgWallet: '',
            ipfs: ''
        });
        
        removeImage();

        // Redirect to home page after a short delay
        setTimeout(() => {
            history.push('/'); // Redirect to home
        }, 2000); // Adjust the delay as needed

    } catch (error) {
        console.error('Error submitting certificate:', error);
        toast.error('Error submitting certificate. Please try again.'); // Show error notification
    }
};

  // Display loading state
  if (loadingContract) {
    return <div>Loading contract...</div>;
  }


  // Display loading state
  if (loadingContract) {
    return <div>Loading contract...</div>;
  }

  return (
    <div className="min-h-screen bg-[#0A0A23] text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-2xl mt-16 mx-auto bg-[#1C1C3B] border-none text-gray-100">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-white">Submit Certificate</CardTitle>
          <CardDescription className="text-center text-purple-300">
            Add your blockchain certification details
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="certificateName" className="text-purple-300">Certificate Name</Label>
              <Input
                id="certificateName"
                placeholder="e.g. Advanced Blockchain Developer"
                value={formData.certificateName}
                onChange={handleChange}
                className="bg-[#2C2C4B] border-purple-500 text-gray-100 placeholder-gray-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="techStack" className="text-purple-300">Tech Stack</Label>
              <Input
                id="techStack"
                placeholder="e.g. Ethereum, Solidity, Web3.js"
                value={formData.techStack}
                onChange={handleChange}
                className="bg-[#2C2C4B] border-purple-500 text-gray-100 placeholder-gray-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="issuingOrg" className="text-purple-300">Issuing Organization</Label>
              <Input
                id="issuingOrg"
                placeholder="e.g. Blockchain Academy"
                value={formData.issuingOrg}
                onChange={handleChange}
                className="bg-[#2C2C4B] border-purple-500 text-gray-100 placeholder-gray-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ipfs" className="text-purple-300">IPFS Hash</Label>
              <Input
                id="ipfs"
                placeholder="e.g. QmW2WQi7j6c7UgJTarActp7tDNikE4B2qXtFCfLPdsgaTQ"
                value={formData.ipfs}
                onChange={handleChange}
                className="bg-[#2C2C4B] border-purple-500 text-gray-100 placeholder-gray-400"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-purple-300">Certificate Image</Label>
              <div className="flex items-center justify-center w-full">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-purple-500 border-dashed rounded-lg cursor-pointer bg-[#2C2C4B] hover:bg-[#3C3C5B] transition-colors duration-300">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    {imagePreview ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full h-full"
                      >
                        <img src={imagePreview} alt="Certificate Preview" className="w-full h-full object-contain" />
                        <Button variant="destructive" className="absolute top-2 right-2" onClick={removeImage}>
                          <X className="h-5 w-5" />
                        </Button>
                      </motion.div>
                    ) : (
                      <>
                        <Upload className="w-10 h-10 text-purple-300" />
                        <p className="text-purple-300">Drag and drop your file here, or click to upload</p>
                      </>
                    )}
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            <Button type="button" disabled={!cid} className="w-full text-gray-100 bg-purple-500 hover:bg-purple-600 transition-colors duration-300">
              Upload Certificate
            </Button>
            <Button type="submit" className="w-full text-gray-100 bg-blue-500 hover:bg-blue-600 transition-colors duration-300">
              Submit Certificate
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
export default CertificateSubmissionComponent; 
import React, { useState } from "react";
import { Layout, theme } from 'antd';
const { Header } = Layout;
import { Space, Table, Tag, Button } from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
import Web3 from 'web3';
import { ethers } from 'ethers';
import { Toaster, toast } from 'sonner'


//Static files
import './Homepage.scss'
import StackOSImg from '../assets/stack.jpeg'
import BiconomyImg from '../assets/biconomy.png'
import EthereumImg from '../assets/ethereum.png'
import SolanaImg from '../assets/solana.png'
import PushImg from '../assets/push.png'
import AirstackImg from '../assets/airstack.jpeg'
import Logo from '../assets/Logo.png'
import TokenContractABI from "../assets/CarbonCredit";


const ProjectDesc = () => {
    return (
        <div className="desc_container">
            <div className="desc_container-heading">EcoNexus: Innovating Green with Tokenized Carbon Credits, NFTs, and Crowdfunding</div>
            <div className="desc_container-description">
                EcoNexus introduces a groundbreaking approach to sustainability by merging blockchain technology with environmental responsibility. Our platform tokenizes carbon credits, transforming them into decentralized assets that are easy to trade and transparent to track. This innovative system empowers individuals and organizations to take part in carbon trading, making the process more efficient and accessible. Additionally, EcoNexus integrates NFTs and crowdfunding, offering unique opportunities to support eco-friendly projects while promoting global efforts to combat climate change. Join us in shaping a greener future, one token at a time.
            </div>
            <div className="desc_links">
                <div className="desc_link">Explore the <a href="/marketplace">marketplace</a>.</div>
                <div className="desc_link">Explore the <a href="https://vishal-islive.github.io/Carbon-Simulation/">Carbon-credit simulation</a></div>
                <div className="desc_link">Track Your tokens <a href="https://etherscan.io/tokens">check it</a>.</div>
                <div className="desc_link">Support <a href="https://support.blockchain.com/hc/en-us/requests/new">contact us</a>!</div>
                <div className="desc_link">Explore the <a href="/">Eco themed NFT</a>.</div>
                <div className="desc_link">Explore the <a href="/">Hire volunteer</a>.</div>
            </div>
        </div>
    );
};



const HomePage = () => {
    const [walletAddress, setWalletAddress] = useState('');
    const [web3Ins, setWeb3Ins] = useState(null);
    const {
        token: { colorBgContainer },
    } = theme.useToken();   
    
    // const provider = new Web3.providers.HttpProvider('https://rpc.public.zkevm-test.net');
    // const web3 = new Web3(provider); // Assumes MetaMask is installed and connected
    // const contractAddress = '0x04C6C2726c57292aFc8bfb980068EFC52D620D4B'; // Replace with your contract address
    // const tokenContract = new web3.eth.Contract(TokenContractABI, contractAddress);
    async function requestAccount() {
        await window.ethereum.request({ method: "eth_requestAccounts "})
    }

    async function getBalance() {
        if(!typeof window.ethereum !== "undefined"){
            const contractAddress = '0x04C6C2726c57292aFc8bfb980068EFC52D620D4B';
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            console.log("provider", provider)

            const contract = new ethers.Contract (
                contractAddress,
                TokenContractABI,
                provider
            )
            console.log("contract", contract)
            try {
                const data = await contract.balanceOf("0x556187546B7Cdb3FE7494AC3A163587B0f6c89EC")
                console.log("data", data)
            } catch (err) {
                console.log("error", err)

            }
        }
    }


    async function issueToken() {

        if(typeof window.ethereum !== "undefined"){
            // await requestAccount()
            const contractAddress = '0x04C6C2726c57292aFc8bfb980068EFC52D620D4B';
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner(0)
            console.log("provider", provider)

            const contract = new ethers.Contract (
                contractAddress,
                TokenContractABI,
                signer
            )
            console.log("contract", contract)
            try {
                const transaction = await contract.issueCredits("0xbbB6623C5938cA5331f53B32BAe8dDe13d974dE0", "9")
                // const transaction = await contract.approve("0x8eCEE3795D22f95F608a7000bAda71ff1b8cAdA0", "10000000")
                await transaction.wait()
                console.log("data", transaction)
                {transaction && toast.success('Congratulations! Token issued successful.')}
            } catch (err) {
                console.log("error", err)

            }
        }
        
            // try {
            //   const provider = new ethers.providers.JsonRpcProvider('https://polygonzkevm-testnet.g.alchemy.com/v2/NYVWW-T0s1uG_TE0q5lpLkb4ew0Z4N4D'); // Replace with Polygon testnet RPC URL
            //   console.log(provider.connection)
            //   const signer = provider.getSigner("0x556187546B7Cdb3FE7494AC3A163587B0f6c89EC"); // Get the signer
            //   console.log("provider, signer",provider,signer)
      
            //   const contractAddress = '0x04C6C2726c57292aFc8bfb980068EFC52D620D4B';
            //   const tokenContract = new ethers.Contract(contractAddress, TokenContractABI, signer);
            //   console.log("token", tokenContract )
            //   // Call the issueCredits function
            //   const tx = await tokenContract.issueCredits('0xbbB6623C5938cA5331f53B32BAe8dDe13d974dE0', "100"); // Replace recipient and amount
            // //   const tx = await tokenContract.balanceOf('0xbbB6623C5938cA5331f53B32BAe8dDe13d974dE0');
            //   console.log(tx) // Replace recipient and amount
            //   await tx.wait(); // Wait for the transaction to be mined
            //   console.log('Credits issued');
            // } catch (error) {
            //   console.error('Error issuing credits:', error);
            // }
            


      }
    
      const OrganizationData = () => {
        const columns = [
            {
                title: 'Rate of Change',
                dataIndex: 'ratechange',
                key: 'ratechange',
                render: (text) => <a>{text}</a>,
                width: 150,
                alignItems: 'center',
            },
            {
                title: 'Organisation',
                dataIndex: 'org',
                key: 'org',
                render: (text) => <a>{text}</a>,
            },
            {
                title: 'Carbon Emission',
                dataIndex: 'carbem',
                key: 'carbem',
            },
            {
                title: 'Tags',
                key: 'tags',
                dataIndex: 'tags',
                render: (_, { tags }) => (
                    <>
                        {tags.map((tag) => {
                            let color = tag.length > 5 ? 'geekblue' : 'green';
                            if (tag === 'loser') {
                                color = 'volcano';
                            }
                            return (
                                <Tag color={color} key={tag}>
                                    {tag.toUpperCase()}
                                </Tag>
                            );
                        })}
                    </>
                ),
            },
            {
                title: 'Action',
                key: 'action',width: 150,
                render: (_, record) => (
                    <Space size="middle">
                        <Button onClick={() => {issueToken()}}>Buy</Button>
                    </Space>
                ),
            },
        ];
        const data = [
            {
                key: '1',
                ratechange: <div><span><CaretUpOutlined style={{ color: '#08c', fontSize: "1.2rem" }} />2.5%</span></div>,
                org: <div className="table_org_content"><span><img className="table_img" src={StackOSImg} alt="StackOS" /></span>StackOS</div>,
                carbem: '12.8CC',
                tags: ['Low Impact', 'Sustainable'],
                reward: 'Green Innovator Badge'
            },
            {
                key: '2',
                ratechange: <div><span><CaretUpOutlined style={{ color: '#08c', fontSize: "1.2rem" }} />4.1%</span></div>,
                org: <div className="table_org_content"><span><img className="table_img" src={BiconomyImg} alt="Biconomy" /></span>Biconomy</div>,
                carbem: '18.4CC',
                tags: ['Medium Impact', 'Offset Initiatives'],
                reward: 'Carbon Saver Points'
            },
            {
                key: '3',
                ratechange: <div><span><CaretUpOutlined style={{ color: '#08c', fontSize: "1.2rem" }} />3.8%</span></div>,
                org: <div className="table_org_content"><span><img className="table_img" src={EthereumImg} alt="Ethereum" /></span>Ethereum</div>,
                carbem: '25.6CC',
                tags: ['High Impact', 'Carbon Neutrality'],
                reward: 'Eco Warrior Certification'
            },
            {
                key: '4',
                ratechange: <div><span><CaretUpOutlined style={{ color: '#08c', fontSize: "1.2rem" }} />1.9%</span></div>,
                org: <div className="table_org_content"><span><img className="table_img" src={SolanaImg} alt="Solana" /></span>Solana</div>,
                carbem: '15.3CC',
                tags: ['Low Emission', 'Green Energy'],
                reward: 'Environmental Steward Award'
            },
            {
                key: '5',
                ratechange: <div><span><CaretUpOutlined style={{ color: '#08c', fontSize: "1.2rem" }} />5.2%</span></div>,
                org: <div className="table_org_content"><span><img className="table_img" src={PushImg} alt="Push" /></span>Push</div>,
                carbem: '22.1CC',
                tags: ['Medium Impact', 'Emission Reduction'],
                reward: 'Climate Champion Bonus'
            },
            {
                key: '6',
                ratechange: <div><span><CaretUpOutlined style={{ color: '#08c', fontSize: "1.2rem" }} />2.7%</span></div>,
                org: <div className="table_org_content"><span><img className="table_img" src={AirstackImg} alt="Airstack" /></span>Airstack</div>,
                carbem: '14.7CC',
                tags: ['Low Emission', 'Eco-Friendly'],
                reward: 'Sustainable Star Points'
            },
        ];
        return (
            <>
                <Table className="table_layout" columns={columns} dataSource={data} />
            </>
        )
    }

    const connectToMetaMask = async () => {
        if (window.ethereum) {
            try {
                // Requesting access to MetaMask
                await window.ethereum.request({ method: 'eth_requestAccounts' });
    
                // Creating Web3 instance
                const web3Instance = new Web3(window.ethereum);
                setWeb3Ins(web3Instance);
                // Get the selected account
                // console.log("A",web3Instance.eth.getUncle)
                const accounts = await web3Instance.eth.getAccounts();
                if (accounts.length > 0) {
                    setWalletAddress(accounts[0]); // Set the wallet address in state
                }
            } catch (error) {
                console.error('Error connecting to MetaMask:', error);
            }
        } else {
            console.error('MetaMask extension not detected');
        }
    };
    return (
        <>
            <div className="home_container">
            <Toaster position="top-center" richColors toastOptions={{ style: { fontSize: "0.9rem" } }} />
            <Layout style={{ backgroundColor: "white" }}>
                <Header
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: "space-between",
                    }}
                >
                    <a style={{ height : "75%"}} href="/"><img style={{ height: "60%"}} src={Logo}/></a>
                    {walletAddress ? <p className="wallet_details">Connected wallet - {walletAddress}</p> : <Button onClick={() => connectToMetaMask()}>Connect Wallet</Button> }
                </Header>

            </Layout>
            <Layout style={{ borderRadius: "12px" }} className="internal_container">
                <ProjectDesc />
            </Layout>
            <Layout style={{ borderRadius: "16px" }} className="internal_container">
                <OrganizationData />
            </Layout>
            </div>
        </>
    )
}

export default HomePage;
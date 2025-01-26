
import { ethers } from 'ethers';
import SecureLoanABI from '../artifacts/contracts/SecureLoan.sol/SecureLoan.json';

const contractAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'; // Replace with your deployed contract address

const getContract = async () => {
    if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send('eth_requestAccounts', []);
        const signer = provider.getSigner();
        return new ethers.Contract(contractAddress, SecureLoanABI.abi, signer);
    } else {
        alert('Please install MetaMask!');
    }
};

export const createLoan = async (amount, repaymentAmount, duration) => {
    const contract = await getContract();
    await contract.createLoan(
        ethers.utils.parseEther(amount.toString()),
        ethers.utils.parseEther(repaymentAmount.toString()),
        duration
    );
};

export const getLoan = async () => {
    const contract = await getContract();
    const loanCount = await contract.loanCount();
    const loans = [];

    for (let i = 1; i <= loanCount; i++) {
        const loan = await contract.loans(i);
        if (loan.isActive) {
            loans.push({
                loanId: i,
                amount: ethers.utils.formatEther(loan.amount),
                repaymentAmount: ethers.utils.formatEther(loan.repaymentAmount),
                deadline: loan.deadline,
            });
        }
    }
    return loans;
};

export const repayLoan = async (loanId, repaymentAmount) => {
    const contract = await getContract();
    await contract.repayLoan(loanId, {
        value: ethers.utils.parseEther(repaymentAmount.toString()),
    });
};

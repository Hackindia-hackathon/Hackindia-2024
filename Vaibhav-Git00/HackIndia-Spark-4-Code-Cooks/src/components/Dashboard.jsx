import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Monthly_analyze from './Analysis/Monthly_analyze';
import TotalAnalyze from './Analysis/TotalAnalyze';




function Dashboard() {
    const navigate = useNavigate();

    const [cardDetails, setCardDetails] = useState({
        cardHolderName: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
    });

    useEffect(() => {
        const storedCardDetails = localStorage.getItem("GetcardDetails");
        if (storedCardDetails) setCardDetails(JSON.parse(storedCardDetails));
    }, []);

    const [selectedCurrency, setSelectedCurrency] = useState('INR');

    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
    };

    const budgetIcons = {
        total: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 bg-sky-200 text-sky-950 rounded-md p-[3px]"
            >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M18 6h-11h3a4 4 0 0 1 0 8h-3l6 6" />
                <line x1="7" y1="10" x2="18" y2="10" />
            </svg>
        ),
        expenses: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 bg-red-200 text-red-950 rounded-md p-[3px]"
            >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
            </svg>
        ),
        investments: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 bg-green-200 text-green-950 rounded-md p-[3px]"
            >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
            </svg>
        ),
        savings: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 bg-yellow-200 text-yellow-800 rounded-md p-[3px]"
            >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="3" y1="21" x2="21" y2="21" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <polyline points="5 6 12 3 19 6" />
                <line x1="4" y1="10" x2="4" y2="21" />
                <line x1="20" y1="10" x2="20" y2="21" />
                <line x1="8" y1="14" x2="8" y2="17" />
                <line x1="12" y1="14" x2="12" y2="17" />
                <line x1="16" y1="14" x2="16" y2="17" />
            </svg>
        ),
    };
    const [totalBudget, setTotalBudget] = React.useState(localStorage.getItem("total_budget") || 0);
    const [totalExpenses, setTotalExpenses] = React.useState(localStorage.getItem("total_expenses") || 0);
    const [totalInvestment, setTotalInvestment] = React.useState(localStorage.getItem("total_investment") || 0);
    const [UserRemainingBalance, setUserRemainingBalance] = React.useState(totalBudget - totalExpenses || 0);
    const [totalSavings, setTotalSaving] = useState(0);


    React.useEffect(() => {
        const storedTotalBudget = localStorage.getItem("total_budget");
        if (storedTotalBudget) setTotalBudget(parseFloat(storedTotalBudget));

        const storedTotalExpenses = localStorage.getItem("total_expenses");
        if (storedTotalExpenses) setTotalExpenses(parseFloat(storedTotalExpenses));

        const storedTotalInvestment = localStorage.getItem("total_investment");
        if (storedTotalInvestment) setTotalInvestment(parseFloat(storedTotalInvestment));

        const remainingBalance = parseFloat(storedTotalBudget) - parseFloat(storedTotalExpenses);

        if (remainingBalance) {
            const savings = remainingBalance * 0.20;
            setTotalSaving(savings)
            setUserRemainingBalance(remainingBalance - savings)
        };



    }, []);



    const AtmCard = ({ selectedCurrency, handleCurrencyChange, UserBalance }) => (
        <div className='mb-2'>
            <p className='mb-2'>Your Card</p>
            <div className='h-40 md:h-64 lg:h-52 w-full text-white rounded-2xl mb-2 flex justify-center items-center'>
                <div className=" 1/6 md:w-3/6 lg:w-4/5 relative ">
                    <img
                        className="rounded-2xl"
                        src="/credit_card_bg.jpeg"
                        alt="banckground"
                    />

                    <div className="absolute top-3 left-4">
                        <img src="/chip.png" alt="" width={40} />
                    </div>
                    <div className="absolute top-3 right-5  ">
                        <img className='' src="/mastercard.png" alt="mastercrd  " width={80} />
                    </div>
                    <div className="absolute top-14 left-10 py-10">
                        <p className="text-white text-sm lg:text-xl font-semibold">
                            <span className='font-normal'>#</span> {cardDetails.cardNumber}
                        </p>
                    </div>
                    <div className="absolute bottom-[-10px] left-3 py-7 ">
                        <p className="text-white text-xs lg:text-sm ">
                            Card Holder Name
                        </p>
                        <p className="text-white text-sm lg:text-md font-semibold">
                            {cardDetails.cardHolderName}
                        </p>
                    </div>
                    <div className="absolute bottom-[-10px] right-20 py-7 ">
                        <p className="text-white text-xs lg:text-sm ">Expires</p>
                        <p className="text-white text-sm lg:text-md font-semibold">{cardDetails.expiryDate}</p>
                    </div>
                    <div className="absolute bottom-[-10px] right-5  py-7 ">
                        <p className="text-white text-xs lg:text-sm ">CVV </p>
                        <p className="text-white text-sm lg:text-md font-semibold">{cardDetails.cvv}</p>
                    </div>
                </div>
            </div>
            <div className='mb-2 border-2 border-[#efefef] rounded-xl p-2 ps-3'>
                <p className='mb-1'>Your Balance</p>
                <div className='mb-2 flex justify-start items-center text-3xl font-bold space-x-2'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="black"
                            viewBox="0 0 24 24"
                            strokeWidth={1.1}
                            stroke="currentColor"
                            className="w-8 h-8 bg-sky-200 rounded-full text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </span>
                    <span>{UserBalance}</span>
                </div>
                <p className='h-[1.5px] w-full bg-[#efefef] mb-2'></p>
                <div className='flex justify-between items-center pe-4'>
                    <p><span>Currency:</span>
                        <select id="currency" value={selectedCurrency} onChange={handleCurrencyChange}>
                            <option value="INR">INR</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                            <option value="AUD">AUD</option>
                            <option value="CAD">CAD</option>
                            <option value="JPY">JPY</option>
                            <option value="CNY">CNY</option>
                            <option value="CHF">CHF</option>
                            <option value="SEK">SEK</option>
                            <option value="NZD">NZD</option>
                            <option value="SGD">SGD</option>
                        </select>
                    </p>
                    <div className='h-3 w-3 rounded-full bg-green-500'></div>
                </div>
            </div>
            <button
                onClick={() => {
                    navigate("/user/card");
                    localStorage.setItem("current_menu", "Card");
                }}
                className='p-1 bg-sky-200 rounded-full w-full flex justify-center items-center space-x-2 h-10'

            >
                <svg xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.1}
                    stroke="currentColor"
                    className="w-5 h-5 bg-sky-500 rounded-full p-[3px] font-bold text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <span>Add Card</span>
            </button>
        </div>
    );

    const BudgetCard = ({ icon, title, amount }) => (
        <div className='bg-white rounded-xl p-2 mb-3 md:w-1/4 md:mb-0 lg:w-1/4 lg:mb-0'>
            <div className='flex justify-start items-center space-x-2 mb-2'>
                <span>{icon}</span>
                <p>{title}</p>
            </div>
            <div className='mb-2 flex justify-center items-center text-3xl'>
                {amount}
            </div>
        </div>
    );
    return (
        <div className='p-4 h-full w-full lg:flex lg:space-x-4'>
            <div className='lg:w-4/6 mb-4 lg:mb-0'>
                <div className='lg:flex lg:justify-between lg:items-center lg:space-x-4 md:flex md:justify-between md:items-center md:space-x-4'>
                    {/* TOTAL BUDGET */}
                    <BudgetCard
                        icon={budgetIcons.total}
                        title="Total Budget"
                        amount={totalBudget}
                    />
                    {/* TOTAL EXPENSES */}
                    <BudgetCard
                        icon={budgetIcons.expenses}
                        title="Total Expenses"
                        amount={totalExpenses}
                    />
                    {/* INVESTMENTS */}
                    <BudgetCard
                        icon={budgetIcons.investments}
                        title="Investments"
                        amount={totalInvestment}
                    />
                    {/* TOTAL SAVINGS */}
                    <BudgetCard
                        icon={budgetIcons.savings}
                        title="Total Savings"
                        amount={totalSavings}
                    />
                </div>

                <div className='bg-white mt-4 rounded-xl p-3    '>
                    <Monthly_analyze />
                </div>
            </div>
            {/* YOUR CARD SECTION */}
            <div className='bg-white ps-4 p-3 pe-4 lg:w-2/6 rounded-xl'>
                <AtmCard
                    selectedCurrency={selectedCurrency}
                    handleCurrencyChange={handleCurrencyChange}
                    UserBalance={UserRemainingBalance}
                />
                <div className=' h-[195px] flex justify-center items-center border-2 rounded-xl mt-3 border-sky-200'>
                    <TotalAnalyze />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

import React, { useState, useEffect } from "react";

function UserExpense() {

  const currDate = new Date().getDate();

  const [salary, setSalary] = useState(localStorage.getItem("user_salary") || 0);
  const [pension, setPension] = useState(localStorage.getItem("user_pension") || 0);
  const [investments, setInvestments] = useState(localStorage.getItem("user_investment") || 0);
  const [otherIncome, setOtherIncome] = useState(localStorage.getItem("user_otherincome") || 0);

  const [HomeMortage, setHomeMortage] = useState(localStorage.getItem("user_home_mortgage") || 0);
  const [HomeInsurance, setHomeInsurance] = useState(localStorage.getItem("user_home_insurance") || 0);
  const [HomeMaintainance, setHomeMaintainance] = useState(localStorage.getItem("user_home_maintenance") || 0);
  const [HomeUtilities, setHomeUtilities] = useState(localStorage.getItem("user_home_utilities") || 0);

  const [LivingFood, setLivingFood] = useState(localStorage.getItem("user_living_food") || 0);
  const [LivingClothing, setLivingClothing] = useState(localStorage.getItem("user_living_clothing") || 0);
  const [LivingHouseholdSupplies, setLivingHouseholdSupplies] = useState(localStorage.getItem("user_living_household_supplies") || 0);
  const [LviningOtherExpense, setLviningOtherExpense] = useState(localStorage.getItem("user_living_other_expense") || 0);

  const [DebtOtherLoan, setDebtOtherLoan] = useState(localStorage.getItem("user_debt_other_loan") || 0);
  const [DebtVehicleLoan, setDebtVehicleLoan] = useState(localStorage.getItem("user_debt_vehicle_loan") || 0);
  const [DebtEducationLoan, setDebtEducationLoan] = useState(localStorage.getItem("user_debt_education_loan") || 0);
  const [DebtCreditCard, setDebtCreditCard] = useState(localStorage.getItem("user_debt_credit_card") || 0);

  const [MiscTravelVacation, setMiscTravelVacation] = useState(localStorage.getItem("user_misc_travel_vacation") || 0);
  const [MiscEntertainment, setMiscEntertainment] = useState(localStorage.getItem("user_misc_entertainment") || 0);
  const [MiscHobbySport, setMiscHobbySport] = useState(localStorage.getItem("user_misc_hobby_sport") || 0);
  const [MiscGiftDonation, setMiscGiftDonation] = useState(localStorage.getItem("user_misc_gift_donation") || 0);

  const [PaymentVendor, setPaymentVendor] = useState(localStorage.getItem("payment_vendor") || "");
  const [PaymentDate, setPaymentDate] = useState(localStorage.getItem("payment_date") || "");
  const [PaymentAmount, setPaymentAmount] = useState(localStorage.getItem("payment_amount") || 0);
  const [paymentSuccess, setPaymentSuccess] = useState(localStorage.getItem("payment_success") === 'true' || false);

  const [totalBudgetOfUser, setTotalBudgetOfUser] = useState(localStorage.getItem("total_budget_of_user") || 0);
  const [totalExpenseOfUser, setTotalExpenseOfUser] = useState(localStorage.getItem("total_expense_of_user") || 0);
  const [totalInvestmentOfUser, setTotalInvestmentOfUser] = useState(localStorage.getItem("total_investment_of_user") || 0);

  React.useEffect(() => {
    localStorage.setItem("user_salary", salary.toString());
    localStorage.setItem("user_pension", pension.toString());
    localStorage.setItem("user_investment", investments.toString());
    localStorage.setItem("user_otherincome", otherIncome.toString());

    localStorage.setItem("user_home_mortgage", HomeMortage.toString());
    localStorage.setItem("user_home_insurance", HomeInsurance.toString());
    localStorage.setItem("user_home_maintenance", HomeMaintainance.toString());
    localStorage.setItem("user_home_utilities", HomeUtilities.toString());

    localStorage.setItem("user_living_food", LivingFood.toString());
    localStorage.setItem("user_living_clothing", LivingClothing.toString());
    localStorage.setItem("user_living_household_supplies", LivingHouseholdSupplies.toString());
    localStorage.setItem("user_living_other_expense", LviningOtherExpense.toString());

    localStorage.setItem("user_debt_other_loan", DebtOtherLoan.toString());
    localStorage.setItem("user_debt_vehicle_loan", DebtVehicleLoan.toString());
    localStorage.setItem("user_debt_education_loan", DebtEducationLoan.toString());
    localStorage.setItem("user_debt_credit_card", DebtCreditCard.toString());

    localStorage.setItem("user_misc_travel_vacation", MiscTravelVacation.toString());
    localStorage.setItem("user_misc_entertainment", MiscEntertainment.toString());
    localStorage.setItem("user_misc_hobby_sport", MiscHobbySport.toString());
    localStorage.setItem("user_misc_gift_donation", MiscGiftDonation.toString());

    localStorage.setItem("payment_vendor", PaymentVendor);
    localStorage.setItem("payment_date", PaymentDate);
    localStorage.setItem("payment_amount", PaymentAmount.toString());
    localStorage.setItem("payment_success", paymentSuccess.toString());

    localStorage.setItem("total_budget_of_user", totalBudgetOfUser.toString());
    localStorage.setItem("total_expense_of_user", totalExpenseOfUser.toString());
    localStorage.setItem("total_investment_of_user", totalInvestmentOfUser.toString());
  }, [
    salary, pension, investments, otherIncome,
    HomeMortage, HomeInsurance, HomeMaintainance, HomeUtilities,
    LivingFood, LivingClothing, LivingHouseholdSupplies, LviningOtherExpense,
    DebtOtherLoan, DebtVehicleLoan, DebtEducationLoan, DebtCreditCard,
    MiscTravelVacation, MiscEntertainment, MiscHobbySport, MiscGiftDonation,
    PaymentVendor, PaymentDate, PaymentAmount, paymentSuccess,
    totalBudgetOfUser, totalExpenseOfUser, totalInvestmentOfUser
  ]);

  useEffect(() => {
    const totalBudget =
      parseFloat(salary) + parseFloat(pension) + parseFloat(otherIncome);
    setTotalBudgetOfUser(totalBudget);
    localStorage.setItem("total_budget", totalBudget.toString());
  }, [salary, pension, otherIncome]);

  useEffect(() => {
    const totalExpense =
      parseFloat(HomeMortage) +
      parseFloat(HomeInsurance) +
      parseFloat(HomeMaintainance) +
      parseFloat(HomeUtilities) +
      parseFloat(LivingFood) +
      parseFloat(LivingClothing) +
      parseFloat(LivingHouseholdSupplies) +
      parseFloat(LviningOtherExpense)+
      parseFloat(investments)+
      parseFloat(MiscGiftDonation)+
      parseFloat(MiscHobbySport)+
      parseFloat(MiscEntertainment) +
      parseFloat(MiscTravelVacation);
    setTotalExpenseOfUser(totalExpense);
    localStorage.setItem("total_expenses", totalExpense.toString());
  }, [
    HomeMortage,
    HomeInsurance,
    HomeMaintainance,
    HomeUtilities,
    LivingFood,
    LivingClothing,
    LivingHouseholdSupplies,
    LviningOtherExpense,
    investments,
    MiscGiftDonation,
    MiscHobbySport,
    MiscEntertainment,
    MiscTravelVacation,
  ]);

  useEffect(() => {
    const totalInvestment = parseFloat(investments);
    setTotalInvestmentOfUser(totalInvestment);
    localStorage.setItem("total_investment", totalInvestment.toString());
  }, [investments]);

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const inputWidth = (value) => {
    const minWidth = 90;
    const calculatedWidth = `${value.length * 10}px`;
    return calculatedWidth >= minWidth ? calculatedWidth : `${minWidth}px`;
  };

  const handlePayment = () => {
    setPaymentSuccess(true);
    localStorage.setItem("vendor_name", PaymentVendor);
    localStorage.setItem("vendor_date", PaymentDate.toString());
    localStorage.setItem("vendor_amount", PaymentAmount.toString());

    setTimeout(() => {
      setPaymentVendor("");
      setPaymentDate("");
      setPaymentAmount(0);
      setPaymentSuccess(false);
    }, 1000);
  };

  

  return (
    <div className="h-full w-full p-4">
      <div className=" lg:flex lg:space-x-4 lg:items-center lg:justify-between md:flex md:space-x-4 md:items-center md:justify-between">
        <div className="lg:w-3/5 lg:flex lg:justify-between lg:items-center lg:space-x-4">
          <div className="lg:w-1/2">
            {/* INCOMES INPUTS */}
            <div className=" bg-white rounded-xl mb-3 lg:h-52 md:h-52  w-full">
              <div className="bg-sky-400 p-2 font-bold rounded-t-xl">
                INCOMES
              </div>
              <div className="p-2 ">
                <div className="flex space-x-3 mb-2 items-center">
                  <label>Salary & Income</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(salary) }}
                    type="number"
                    value={salary}
                    onChange={(e) => handleInputChange(e, setSalary)}
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
                <div className="flex space-x-3 mb-2 items-center">
                  <label>Pension </label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(salary) }}
                    type="number"
                    value={pension}
                    onChange={(e) => handleInputChange(e, setPension)}
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
                <div className="flex space-x-3 mb-2 items-center">
                  <label>Investments & Savings</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(salary) }}
                    type="number"
                    value={investments}
                    onChange={(e) => handleInputChange(e, setInvestments)}
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
                <div className="flex space-x-3 items-center">
                  <label>Other Income</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(salary) }}
                    type="number"
                    value={otherIncome}
                    onChange={(e) => handleInputChange(e, setOtherIncome)}
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
              </div>
            </div>
            {/* HOUSING AND UTILITIZE */}
            <div className=" bg-white  rounded-xl mb-3 lg:h-52 md:h-52  w-full">
              <div className="bg-sky-400 p-2 font-bold rounded-t-xl">
                HOUSING & UTILITIES
              </div>
              <div className="p-2 ">
                <div className="flex space-x-3 mb-2 items-center">
                  <label>Mortage </label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(HomeMortage) }}
                    type="number"
                    value={HomeMortage}
                    onChange={(e) => handleInputChange(e, setHomeMortage)}
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
                <div className="flex space-x-3 mb-2 items-center">
                  <label>Home maintainance</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(HomeMaintainance) }}
                    type="number"
                    value={HomeMaintainance}
                    onChange={(e) => handleInputChange(e, setHomeMaintainance)}
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
                <div className="flex space-x-3 mb-2 items-center">
                  <label>Insurance</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(HomeInsurance) }}
                    type="number"
                    value={HomeInsurance}
                    onChange={(e) => handleInputChange(e, setHomeInsurance)}
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
                <div className="flex space-x-3 items-center">
                  <label>Utilities</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(HomeUtilities) }}
                    type="number"
                    value={HomeUtilities}
                    onChange={(e) => handleInputChange(e, setHomeUtilities)}
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
              </div>
            </div>
            {/* LIVING EXPENSES */}
            <div className=" bg-white rounded-xl lg:h-52 md:h-52  w-full">
              <div className="bg-sky-400 p-2 font-bold rounded-t-xl">
                LIVING EXPENSES
              </div>
              <div className="p-2 ">
                <div className="flex space-x-3 mb-2 items-center">
                  <label>Food</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(LivingFood) }}
                    type="number"
                    value={LivingFood}
                    onChange={(e) => handleInputChange(e, setLivingFood)}
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
                <div className="flex space-x-3 mb-2 items-center">
                  <label>Clothing</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(LivingClothing) }}
                    type="number"
                    value={LivingClothing}
                    onChange={(e) => handleInputChange(e, setLivingClothing)}
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
                <div className="flex space-x-3 mb-2 items-center">
                  <label>Household Supplies</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(LivingHouseholdSupplies) }}
                    type="number"
                    value={LivingHouseholdSupplies}
                    onChange={(e) =>
                      handleInputChange(e, setLivingHouseholdSupplies)
                    }
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
                <div className="flex space-x-3 items-center">
                  <label>OtherExpense</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(LviningOtherExpense) }}
                    type="number"
                    value={LviningOtherExpense}
                    onChange={(e) =>
                      handleInputChange(e, setLviningOtherExpense)
                    }
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            {/* Loan INPUTS */}
            <div className=" bg-white rounded-xl mb-2  pb-2  w-full">
              <div className="bg-sky-400 p-2 font-bold rounded-t-xl">
                DEBT & LOAN PAYMENTS
              </div>
              <div className="p-2 ">
                <div className="flex space-x-3 mb-2 items-center">
                  <label>Credit Card</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(DebtCreditCard) }}
                    type="number"
                    value={DebtCreditCard}
                    onChange={(e) => handleInputChange(e, setDebtCreditCard)}
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
                <div className="flex space-x-3 mb-2 items-center">
                  <label>Education Loan</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(DebtEducationLoan) }}
                    type="number"
                    value={DebtEducationLoan}
                    onChange={(e) => handleInputChange(e, setDebtEducationLoan)}
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
                <div className="flex space-x-3 mb-2 items-center">
                  <label>Vehicle Loan</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(DebtVehicleLoan) }}
                    type="number"
                    value={DebtVehicleLoan}
                    onChange={(e) => handleInputChange(e, setDebtVehicleLoan)}
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
                <div className="flex space-x-3 items-center">
                  <label>Other Loan</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(DebtOtherLoan) }}
                    type="number"
                    value={DebtOtherLoan}
                    onChange={(e) => handleInputChange(e, setDebtOtherLoan)}
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
              </div>
            </div>
            {/* MISCELLANEOUS EXPENSES */}
            <div className=" bg-white rounded-xl mb-2  pb-2  w-full">
              <div className="bg-sky-400 p-2 font-bold rounded-t-xl">
                MISCELLANEOUS EXPENSES
              </div>
              <div className="p-2 ">
                <div className="flex space-x-3 mb-2 items-center">
                  <label>Travel & Vacation</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(MiscTravelVacation) }}
                    type="number"
                    value={MiscTravelVacation}
                    onChange={(e) =>
                      handleInputChange(e, setMiscTravelVacation)
                    }
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
                <div className="flex space-x-3 mb-2 items-center">
                  <label>Entertainment/ Tickets</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(MiscEntertainment) }}
                    type="number"
                    value={MiscEntertainment}
                    onChange={(e) => handleInputChange(e, setMiscEntertainment)}
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
                <div className="flex space-x-3 mb-2 items-center">
                  <label>Hobbies/Sports</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(MiscHobbySport) }}
                    type="number"
                    value={MiscHobbySport}
                    onChange={(e) => handleInputChange(e, setMiscHobbySport)}
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
                <div className="flex space-x-3 items-center">
                  <label>Gifts/Donations</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(MiscGiftDonation) }}
                    type="number"
                    value={MiscHobbySport}
                    onChange={(e) => handleInputChange(e, setMiscGiftDonation)}
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
              </div>
            </div>
            {/* PERSONAL PAYMENT */}
            <div className=" bg-white rounded-xl  pb-1  w-full">
              <div className="bg-sky-400 p-2 font-bold rounded-t-xl">
                PAYMENTS
              </div>
              <div className="p-2">
                <div className="flex space-x-3 mb-2 ps-3 items-center">
                  <label>Vendor</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1 w-50 "
                    type="text"
                    value={PaymentVendor}
                    onChange={(e) => handleInputChange(e, setPaymentVendor)}
                  />
                </div>
                <div className="flex space-x-8 mb-2 ps-3 items-center">
                  <label>Date</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1 w-50"
                    type="date"
                    value={PaymentDate}
                    onChange={(e) => handleInputChange(e, setPaymentDate)}
                  />
                </div>
                <div className="flex space-x-3 mb-2 ps-3 items-center">
                  <label>Amount</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1 w-50"
                    type="number"
                    value={PaymentAmount}
                    onChange={(e) => handleInputChange(e, setPaymentAmount)}
                  />
                </div>

                <div className="flex justify-center items-center p-2">
                  <button
                    className="bg-sky-200 w-1/2 rounded-lg  p-1  hover:bg-sky-400 hover:text-white"
                    onClick={handlePayment}
                  >
                    PAY
                  </button>
                </div>

                {paymentSuccess && (
                  <div className="text-green-600 text-center">
                    Payment successful!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="2/5"></div>
      </div>
    </div>
  );
}

export default UserExpense;

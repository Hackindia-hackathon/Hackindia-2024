import React from "react";
import { useState , useEffect } from "react";
import ExpenseEaselogo from "../assets/ExpenseEase.png";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function MainPageDashboard() {
  const navigate = useNavigate();

  let menu_Dashboard = "Dashboard";
  let menu_Expense = "Expense";
  let menu_Card = "Card";
  let menu_Transactions = "Transactions";
  let general_FAQ = "FAQ";
  let general_Settings = "Settings";
  const [WhatsTheMenu, setTheMenu] = useState();
  React.useEffect(() => {
    if (localStorage.getItem("current_menu"))
      setTheMenu(localStorage.getItem("current_menu"));
    else setTheMenu(menu_Dashboard);
  }, []);

  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreementChecked: false
  });

  useEffect(() => {
    const storedFormData = localStorage.getItem('userData');
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  const [UserName, setUserName] = useState(formData.firstName);

  useEffect(() => {
    setUserName(formData.firstName);
  }, [formData]);


  return (
    <div className="h-full w-full flex">
      {/* ________ SIDEBAR ________ */}

      <section className="h-screen w-1/5 lg:w-1/6 md:w-1/5 bg-white relative flex flex-col justify-between">
        {/* --------------- LOGO FOR THE SITE --------- */}
        <div className="flex space-x-1 justify-center items-center p-2  lg:pe-4 pt-5 lg:pt-3 md:pt-3">
          <img
            className="w-[30px]  md:w-[27px] lg:w-[35px]"
            src={ExpenseEaselogo}
          />
          <h1 className="text-[20px] lg:text-[27px] hidden md:block lg:block">
            Expenses<span className="text-sky-500 ">Sol</span>{" "}
          </h1>
        </div>

        {/* --------------- MENU ITEMS -------------- */}
        <div className="h-4/6">
          <div className="flex flex-col space-x-3 mb-2 lg:ms-2 md:ms-2">
            <p className="text-sky-500 text-center md:text-left lg:text-left ps-0 lg:ps-2 md:ps-2 text-[15px]">
              Menu
            </p>
            <ul>
              <li className="mb-2 mt-2  hover:bg-sky-200 hover:text-sky-950 rounded-l-lg">
                <button
                  onClick={() => {
                    setTheMenu(menu_Dashboard);
                    localStorage.setItem("current_menu", menu_Dashboard);
                    navigate("/user/");
                  }}
                  className="flex space-x-1 justify-center md:justify-start lg:justify-start items-center w-5/6 p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                    />
                  </svg>
                  <span className="text-[17px] hidden md:block lg:block">
                    {menu_Dashboard}
                  </span>
                </button>
              </li>
              <li className="mb-2 mt-2  hover:bg-sky-200 hover:text-sky-950 rounded-l-lg">
                <button
                  onClick={() => {
                    setTheMenu(menu_Expense);
                    localStorage.setItem("current_menu", menu_Expense);
                    console.log(localStorage.getItem("current_menu"));
                    navigate("/user/expenses");
                  }}
                  className="flex space-x-1 justify-center md:justify-start lg:justify-start items-center w-5/6 p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                    />
                  </svg>

                  <span className="text-[17px] hidden md:block lg:block">
                    {menu_Expense}
                  </span>
                </button>
              </li>
              <li className="mb-2 mt-2  hover:bg-sky-200 hover:text-sky-950 rounded-l-lg">
                <button
                  onClick={() => {
                    setTheMenu(menu_Card);
                    localStorage.setItem("current_menu", menu_Card);
                    navigate("/user/card");
                  }}
                  className="flex space-x-1 justify-center md:justify-start lg:justify-start items-center w-5/6 p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                    />
                  </svg>

                  <span className="text-[17px] hidden md:block lg:block">
                    {menu_Card}
                  </span>
                </button>
              </li>
              <li className="mb-2 mt-2  hover:bg-sky-200 hover:text-sky-950 rounded-l-lg">
                <button
                  onClick={() => {
                    setTheMenu(menu_Transactions);
                    localStorage.setItem("current_menu", menu_Transactions);
                    navigate("/user/transaction");
                  }}
                  className="flex space-x-1 justify-center md:justify-start lg:justify-start items-center w-5/6 p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                    />
                  </svg>

                  <span className="text-[17px] hidden md:block lg:block">
                    {menu_Transactions}
                  </span>
                </button>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-x-3 lg:ms-2 md:ms-2">
            <span className="text-sky-500 text-center md:text-left lg:text-left ps-0 lg:ps-2 md:ps-2 text-[15px] ">
              General
            </span>
            <ul>
              <li className="mb-1 mt-2  hover:bg-sky-200 hover:text-sky-950 rounded-l-lg">
                <button
                  onClick={() => setTheMenu(general_FAQ)}
                  className="flex space-x-1 justify-center md:justify-start lg:justify-start items-center w-5/6 p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                    />
                  </svg>

                  <span className="text-[17px] hidden md:block lg:block">
                    {general_FAQ}
                  </span>
                </button>
              </li>
              <li className="mb-2 mt-1  hover:bg-sky-200 hover:text-sky-950 rounded-l-lg">
                <button
                  onClick={() => setTheMenu(general_Settings)}
                  className="flex space-x-1 justify-center md:justify-start lg:justify-start items-center w-5/6 p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                    />
                  </svg>

                  <span className="text-[17px] hidden md:block lg:block">
                    {general_Settings}
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className=" flex justify-center items-center p-3 mb-2  ">
          <button className="flex space-x-1 justify-center items-center hover:text-sky-500"
            onClick={() => {
              setTimeout(() => {
                alert("Logging out succesfully!")
                navigate("/");
              }, 500)


            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
              />
            </svg>
            <span className="text-[17px] hidden md:block lg:block">LogOut</span>
          </button>
        </div>
      </section>

      <section className="h-screen w-4/5 lg:w-5/6 md:w-4/5 bg-sky-200">
        {/* --------- NAVBAR ----------- */}
        <div className="flex justify-between items-center bg-white p-3">
          <p className="text-xl font-bold md:text-2xl lg:text-3xl">
            {WhatsTheMenu}
          </p>
          <div className="flex justify-evenly items-center space-x-2">
            <button className=" p-2 bg-sky-200   rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={1.1}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </button>

            <div className="flex justify-center items-center w-auto h-10 bg-sky-200  rounded-3xl ps-0 pt-2 pb-2 pe-5 ">
              <div className="h-10 w-10 rounded-full flex justify-center items-center font-medium text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  strokeWidth={1.1}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>
              <div>{UserName}!</div>
            </div>
          </div>
        </div>
        {/* ---- MAIN CONTENT ----- */}
        <div className="">
          <Outlet />
        </div>
      </section>
    </div>
  );
}

export default MainPageDashboard;

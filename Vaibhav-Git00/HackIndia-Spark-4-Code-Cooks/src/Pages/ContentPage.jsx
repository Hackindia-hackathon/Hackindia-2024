import React from "react";
import logo from "../assets/logo.png";


const ContentPage = () => {
  return (
    <div className=" ">
      <div className="content flex flex-col justify-center items-center text-center my-4 ">
        <img src={logo} alt="" width={"400rem"}/>
        <div>
          <h1 className="text-7xl font-bold text-white my-6">
            Take Control of <span className="accent text-black">Your Money</span>
          </h1>
          <p className="text-xl my-6">
            Personal Budgeting is the secret to financial freedom. Start your
            journey today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;

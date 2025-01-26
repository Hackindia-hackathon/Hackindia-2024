import React from "react";
import image from "./image.png";
import { CardBody, CardContainer, CardItem } from "./ThreeD"; // Adjust the import path if needed

export function ThreeDCardDemo({ className }) {
  return (
    <CardContainer className={`inter-var ${className} `}>
      <CardBody className={`inter-var ${className} `}>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-[#2DB6FA]">
          <a href="#" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', padding: '20px',color:"#2DB6FA" }}>
            <i className="ri-lock-line icon hover:bg-[#2DB6FA]" style={{ fontSize: '114px', backgroundColor: 'white' }}></i>
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-[#35b869]">
                Security
              </h5>
            </a>
            <p className="mb-3 font-normal text-white">
            The blockchain would protect this data from tampering, and it can be used to determine the amount of CO2 level.
            </p>
            
             
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
          
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}

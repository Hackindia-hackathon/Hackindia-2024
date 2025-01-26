import React from "react";
import Cards from "./Cards";
import { MdOutlineForest } from "react-icons/md";
import HeroCard from "./HeroCard"; // Ensure you have this component correctly defined
import { ThreeDCardDemo } from "./ThreeDCardDemo";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Grids from "./Grids";
import { CardBody, CardContainer, CardItem } from "./ThreeD";
const Landing = ({className}) => {
  const featuredProjects = [
    // Add URLs for the featured project images
  ];

  const trendingProjects = [
    // Add URLs for the trending project images
  ];

  const cardData = [
    {
      title: "Project 1",
      imageUrl: "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      message: "Message for Project 1"
    },
    {
      title: "Project 2",
      imageUrl: "https://images.pexels.com/photos/418831/pexels-photo-418831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      message: "Message for Project 2"
    },
    {
      title: "Project 3",
      imageUrl: "https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      message: "Message for Project 3"
    },
    {
      title: "Project 4",
      imageUrl: "https://images.pexels.com/photos/1834399/pexels-photo-1834399.jpeg?auto=compress&cs=tinysrgb&w=600",
      message: "Message for Project 4"
    },
    {
      title: "Project 5",
      imageUrl: "https://images.pexels.com/photos/1061623/pexels-photo-1061623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      message: "Message for Project 5"
    }
  ];

  return (
    <div>
      

      <main>
        <HeroCard />
        
        <h2 className="text-center text-5xl text-white font-bold">Potential Features</h2>

        <div className="p-8">
          
          <Grids />
        </div>
        <h1 className="text-center text-5xl text-white font-bold m-3">Key Benefits of Blockchain Technology</h1>
        <div className="flex justify-center  gap-6 space-x-4">

        <CardContainer className={`inter-var ${className} `}>
      <CardBody className={`inter-var ${className} `}>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-[#2DB6FA]">
          <a href="#" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2DB6FA', padding: '20px',color:"#2DB6FA" }}>
            <i className="ri-lock-line icon text-white bg-[#2DB6FA] hover:bg-[#2DB6FA]" style={{ fontSize: '114px', backgroundColor: '#2DB6FA' }}></i>
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-[#3d9cd3]">
                Security
              </h5>
            </a>
            <p className="mb-3 font-normal text-white">
            The blockchain would protect this data from tampering, and it is immutable can not be changed on the blockchain.
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

 
        <CardContainer className={`inter-var ${className} `}>
      <CardBody className={`inter-var ${className} `}>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-[#2DB6FA]">
          <a href="#" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F68C09', padding: '20px',color:"#2DB6FA" }}>
            <i className="ri-discuss-line icon text-white hover:bg-[#2DB6FA]" style={{ fontSize: '114px', backgroundColor: '#F68C09' }}></i>
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-[#ecaa4e]">
              Transparency
              </h5>
            </a>
            <p className="mb-3 font-normal text-white">
            The datas are visible to both people and government.Data is being used with integrity, lawfully, fairly and traceably, for valid purposes.
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

    <CardContainer className={`inter-var ${className} `}>
      <CardBody className={`inter-var ${className} `}>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-[#2DB6FA]">
          <a href="#" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#08DA4E', padding: '20px',color:"#2DB6FA" }}>
            <i className="ri-git-merge-line icon text-white hover:bg-[#2DB6FA]" style={{ fontSize: '114px', backgroundColor: '#08DA4E' }}></i>
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-[#35b869]">
              Connectivity
              </h5>
            </a>
            <p className="mb-3 font-normal text-white">
            Provide the connection between industries and government. It helps to government to known about the Sustainability of the industries.
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


   
      
     
    </div>
    



        {/* 
        <section className="featured-projects">
          <h3>Featured projects</h3>
          <div className="project-cards">
            {featuredProjects.map((url, index) => (
              <img key={index} src={url} alt={`Featured project ${index + 1}`} />
            ))}
          </div>
        </section>

        <section className="trending-projects">
          <h3>Discover trending projects</h3>
          <div className="project-cards">
            {trendingProjects.map((url, index) => (
              <img key={index} src={url} alt={`Trending project ${index + 1}`} />
            ))}
          </div>
        </section>

        <section className="get-started">
          <h3>Get started</h3>
          <div className="cards">
            {getStartedCards.map((card, index) => (
              <Card key={index} title={card.title} description={card.description} imageUrl={card.imageUrl} />
            ))}
          </div>
        </section>
        */}
      </main>

      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          padding: 1rem;
        }

        .hero {
          text-align: center;
          padding: 2rem;
        }

        .project-cards {
          display: flex;
          gap: 1rem;
        }

        .get-started .cards {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }
      `}</style>


      
    </div>
  );
};

export default Landing;

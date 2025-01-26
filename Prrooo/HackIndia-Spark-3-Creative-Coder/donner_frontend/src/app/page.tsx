"use client";
import React, { useState, useEffect } from 'react';
import Header from './header';
import Footer from './footer';

interface Question {
  text: string;
  options: string[];
}

export default function Homepage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const questions: Question[] = [
    {
      text: "What is your age group?",
      options: ["Under 18", "18-24", "25-34", "35-44"],
    },
    {
      text: "How satisfied are you with our product?",
      options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"],
    },
    {
      text: "What features do you find most useful?",
      options: ["Ease of Use", "Customer Support", "Pricing", "Other"],
    },
    {
      text: "On a scale of 1-10, how likely are you to recommend us?",
      options: ["1-3", "4-6", "7-9", "10"],
    },
    {
      text: "What areas could be improved?",
      options: ["User Interface", "Performance", "Features", "Support"],
    },
  ];

  useEffect(() => {
    // Generate falling stars dynamically
    const starContainer = document.querySelector('.stars');
    if (starContainer) {
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 2 + 1}s`;
        starContainer.appendChild(star);
      }
    }

    // Generate shooting stars dynamically
    const shootingStarContainer = document.querySelector('.shooting-stars');
    if (shootingStarContainer) {
      for (let i = 0; i < 5; i++) { // Adjust number of shooting stars as needed
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        shootingStar.style.top = `${Math.random() * 100}vh`;
        shootingStar.style.left = `${Math.random() * 100}vw`;
        shootingStar.style.animationDuration = `${Math.random() * 2 + 1}s`;
        shootingStarContainer.appendChild(shootingStar);
      }
    }
  }, []);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleOptionChange = (option: string) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestion] = option;
    setSelectedOptions(updatedOptions);
  };

  return (
    <>
      <Header />

      {/* Sky with Falling Stars and Shooting Stars Background */}
      <div className="sky">
        <div className="stars"></div>
        <div className="shooting-stars"></div>
        
        {/* Hero Section */}
        <div
          className="page-hero-section bg-image hero-home-1"
          style={{ backgroundImage: "url(/img/bg_hero_1.svg)" }}
        >
          <div className="hero-caption pt-5">
            <div className="container d-flex flex-column justify-content-center align-items-center h-100">
              <div className="header-container d-flex justify-content-between w-100 mb-4">
                <h1 className="header-text">Survey</h1>
                <button className="btn btn-primary">Start Survey</button>
              </div>
              <div className="survey-container text-center">
                <h3 className="mb-4">
                  <strong>{questions[currentQuestion].text}</strong>
                </h3>
                <div className="options-group d-flex flex-column align-items-center">
                  {questions[currentQuestion].options.map((option, index) => (
                    <label key={index} className="option-label mb-3">
                      <input
                        type="radio"
                        name={`question-${currentQuestion}`}
                        value={option}
                        checked={selectedOptions[currentQuestion] === option}
                        onChange={() => handleOptionChange(option)}
                        className="d-none"
                      />
                      <span className="animated-button px-4 py-2">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Fixed Buttons */}
        <div className="fixed-buttons">
          <button
            className="btn btn-secondary"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>
          <button
            className="btn btn-primary"
            onClick={handleNext}
            disabled={currentQuestion === questions.length - 1}
          >
            Next
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

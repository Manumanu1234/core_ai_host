import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navigation } from '../components/navigation';
import {
  kiran, devananda, festin, leela, fein,
  aakash, eldhode, gayathri
} from '../assests/projects/index';

const StudentProjects = ({ props = {} }) => {
  const [revealedDescription, setRevealedDescription] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const handleToggleDescription = (index) => {
    setRevealedDescription((prev) => (prev === index ? null : index));
  };

  const truncateDescription = (text, limit = 25) => {
    const words = text.split(' ');
    return words.length > limit ? words.slice(0, limit).join(' ') + '...' : text;
  };

  const data = props.data || {
    projects: [
      {
        project_name: "KERALA GOC",
        members: ["Eldhose Saju"],
        description:
          "Kerala: God's Own Country is an interactive web application developed using Python and Streamlit. It features interactive maps to explore major tourist destinations in Kerala and a responsive UI for both desktop and mobile devices. Technologies used include Python for backend development, Streamlit as the frontend framework, Pandas for data handling, GeoPandas for geographic mapping, and OpenStreetMap for interactive maps.",
        link: "https://github.com/Eldhose-saju/KERALA_GOC",
        image: eldhode,
      },
      {
        project_name: "Lifestyle Hub",
        members: ["Gayathri J S"],
        description:
          "A comprehensive personal lifestyle management web application built with Streamlit. Lifestyle Hub helps you organize your daily activities, track habits, manage finances, and maintain a positive mindset. Features include a home dashboard with greetings, affirmations, and daily overview; calendar to track events and appointments; daily affirmations (predefined or custom); daily planner for tasks and long-term goals; habit tracker with visual progress; and a finance tracker to monitor expenses and visualize spending patterns.",
        link: "https://github.com/Gayathriijs/Streamlit",
        image: gayathri,
      },
      {
        project_name: "Real-time Stock Market Monitoring",
        members: ["Aakash Rajeev"],
        description:
          "Real-Time Stock Market Monitoring using Streamlit, Alpha Vantage API, Gemini AI Integration, and Plotly visualizations.",
        link: "https://github.com/aakshpy/Real-time-Stock-Market-Monitoring",
        image: aakash,
      },
      {
        project_name: "Churn prediction Using SVM",
        members: ["Kiran Sreekanth (CSE 2022-26)"],
        description:
          "A Support Vector Machine Model to find and detect the number of churned members.",
        link: "https://github.com/kiransreekanth/SVM-model.git",
        image: kiran,
      },
      {
        project_name: "Churn predictor",
        members: ["Deva Nanda Nair (CSE 2023-27)"],
        description:
          "Predict customer churn using Telco Customer Churn dataset and Python ML tools like pandas, scikit-learn, matplotlib.",
        link: "https://github.com/devananda6200/churn-predictor",
        image: devananda,
      },
      {
        project_name: "California House Price Prediction",
        members: ["Festin Biju (CSE 2023-27)"],
        description:
          "Machine learning regression model to predict house prices using the California housing dataset. Built in Google Colab.",
        link: "https://github.com/FestinBiju/AI-ML-house-price-prediction",
        image: festin,
      },
      {
        project_name: "House Price Prediction",
        members: ["Leela Bobby (ECE 2023-27)"],
        description:
          "Simple house price prediction model using linear regression.",
        link: "https://github.com/githubleelabobby/House-Price-Prediction-ML-Project",
        image: leela,
      },
      {
        project_name: "Mandhi Finder",
        members: ["Fidhaan Ameer", "Irene Isaan", "Elson Biju"],
        description:
          "Find info about different types of mandhi and where to get them.",
        link: "https://github.com/Eldhose177/mandhi_finder.git",
        image: fein,
      },
    ],
  };

  return (
    <div id="projects">
      <Navigation />
      <div className="project-title">
        <h2>Student Projects</h2>
        <ul className="project-container">
          {data.projects.length ? (
            data.projects.map((project, index) => (
              <li key={index} className="project-card" data-aos="fade-up">
                <div className="project-card-header">
                  <img src={project.image} alt={project.project_name} />
                  <h3>{project.project_name}</h3>
                </div>

                <div className="project-card-body">
                  <p className="project-members">
                    Members:
                    <ul>
                      {project.members.map((member, i) => (
                        <li key={i}>{member}</li>
                      ))}
                    </ul>
                  </p>

                  <div
                    className={`project-description ${revealedDescription === index ? 'expanded' : 'collapsed'
                      }`}
                  >
                    {revealedDescription === index
                      ? project.description
                      : truncateDescription(project.description)}
                  </div>

                  {project.description.split(' ').length > 25 && (
                    <button
                      className="reveal-btn"
                      onClick={() => handleToggleDescription(index)}
                    >
                      {revealedDescription === index ? 'Hide' : 'View Full Description'}
                    </button>
                  )}
                </div>

                <div className="project-card-footer">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
              </li>
            ))
          ) : (
            <p>Loading projects...</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default StudentProjects;

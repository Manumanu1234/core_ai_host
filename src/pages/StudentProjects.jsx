import React, { useState } from 'react';
import { Navigation } from '../components/navigation';
import {
  kiran, devananda, festin, leela, fein,
  aakash, eldhode, gayathri
} from '../assests/projects/index';

const StudentProjects = ({ props = {} }) => {
  const [revealedDescription, setRevealedDescription] = useState(null);

  const handleToggleDescription = (index) => {
    setRevealedDescription((prev) => (prev === index ? null : index));
  };

  const data = props.data || {
    projects: [
      {
        project_name: "KERALA GOC",
        members: ["Eldhose Saju"],
        description: "Kerala: God's Own Country is an interactive web application developed using Python and Streamlit.\n\nFeatures:-\n- Interactive Maps – Explore Kerala's major tourist destinations through an interactive map.\n- Responsive UI – Designed for seamless viewing on desktop and mobile devices.\n\nTechnologies Used:-\n- Python (Backend Development)\n- Streamlit (Frontend & UI Framework)\n- Pandas (Data Handling)\n- GeoPandas (Mapping & Geographic Data)\n- OpenStreetMap (Interactive Maps)",
        link: "https://github.com/Eldhose-saju/KERALA_GOC",
        image: eldhode
      },
      {
        project_name: "Lifestyle Hub",
        members: ["Gayathri J S"],
        description: "A comprehensive personal lifestyle management web application built with Streamlit.\n\nOverview:\nLifestyle Hub helps you organize your daily activities, track habits, manage finances, and maintain a positive mindset.\n\nFeatures:\n- Home Dashboard with greetings, affirmations, and daily overview\n- Calendar to track events and appointments\n- Daily Affirmations – Predefined or custom\n- Daily Planner for tasks and long-term goals\n- Habit Tracker with visual progress\n- Finance Tracker to monitor expenses and visualize spending patterns",
        link: "https://github.com/Gayathriijs/Streamlit",
        image: gayathri
      },
      {
        project_name: "Real-time Stock Market Monitoring",
        members: ["Aakash Rajeev"],
        description: "📈 Real-Time Stock Market Monitoring using Streamlit, Alpha Vantage API, Gemini AI Integration, and Plotly visualizations.",
        link: "https://github.com/aakshpy/Real-time-Stock-Market-Monitoring",
        image: aakash
      },
      {
        project_name: "Churn prediction Using SVM",
        members: ["Kiran Sreekanth (CSE 2022-26)"],
        description: "A Support Vector Machine Model to find and detect the number of churned members.",
        link: "https://github.com/kiransreekanth/SVM-model.git",
        image: kiran
      },
      {
        project_name: "Churn predictor",
        members: ["Deva Nanda Nair (CSE 2023-27)"],
        description: "Predict customer churn using Telco Customer Churn dataset and Python ML tools like pandas, scikit-learn, matplotlib.",
        link: "https://github.com/devananda6200/churn-predictor",
        image: devananda
      },
      {
        project_name: "California House Price Prediction",
        members: ["Festin Biju (CSE 2023-27)"],
        description: "Machine learning regression model to predict house prices using the California housing dataset. Built in Google Colab.",
        link: "https://github.com/FestinBiju/AI-ML-house-price-prediction",
        image: festin
      },
      {
        project_name: "House Price Prediction",
        members: ["Leela Bobby (ECE 2023-27)"],
        description: "Simple house price prediction model using linear regression.",
        link: "https://github.com/githubleelabobby/House-Price-Prediction-ML-Project",
        image: leela
      },
      {
        project_name: "Mandhi Finder",
        members: ["Fidhaan Ameer", "Irene Isaan", "Elson Biju"],
        description: "Find info about different types of mandhi and where to get them.",
        link: "https://github.com/Eldhose177/mandhi_finder.git",
        image: fein
      }
    ]
  };

  const truncateDescription = (text, limit = 25) => {
    const words = text.split(' ');
    return words.length > limit ? words.slice(0, limit).join(' ') + '...' : text;
  };

  return (
    <div id="projects">
      <Navigation />
      <div className="project-title">
        <h2>Student Projects</h2>
        <ul className="project-container">
          {data.projects.length ? (
            data.projects.map((project, index) => (
              <li key={index} className="project-card">
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
                    className={`project-description ${revealedDescription === index ? 'expanded' : 'collapsed'}`}
                  >
                    {revealedDescription === index
                      ? project.description
                      : truncateDescription(project.description)}
                  </div>

                  <button
                    className="reveal-btn"
                    onClick={() => handleToggleDescription(index)}
                  >
                    {revealedDescription === index ? 'Hide' : 'View Full Description'}
                  </button>
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

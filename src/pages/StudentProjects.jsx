import React, { useState } from 'react';
import { Navigation } from '../components/navigation';
import { kiran, devananda, festin, leela, fein } from '../assests/projects/index'

const StudentProjects = ({ props = {} }) => {
  const [newProject, setNewProject] = useState({
    project: '',
    description: '',
    members: ''
  });

  const [revealedDescription, setRevealedDescription] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Adding project:', newProject);
  };

  const handleToggleDescription = (id) => {
    setRevealedDescription((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const data = props.data || {
    projects: [
      {
        "project_name": "Churn prediction Using SVM",
        "members": ["Kiran Sreekanth (CSE 2022-26)"],
        "description": "A Support Vector Machine Model to find and detect the number of churned members.",
        "link": "https://github.com/kiransreekanth/SVM-model.git",
        "image": kiran
      },
      {
        "project_name": "Churn predictor",
        "members": ["Devananda Nair (CSE 2023-27)"],
        "description": "Model for predicting customer churn using Telco Customer Churn dataset using classification algorithms models and identify the reason for customers leaving, using Python tools such as pandas, scikit-learn for data manipulation and matplotlib for visualizations.",
        "link": "https://github.com/devananda6200/churn-predictor",
        "image": devananda
      },
      {
        "project_name": "California House Price Prediction",
        "members": ["Festin Biju (CSE 2023-27)"],
        "description": "Machine learning project that utilizes regression analysis to predict house prices based on the California housing dataset. The project is implemented in Python and designed for execution in Google Colab, making it accessible for users with varying levels of expertise in data science.",
        "link": "https://github.com/FestinBiju/AI-ML-house-price-prediction",
        "image": festin
      },
      {
        "project_name": "House Price Prediction",
        "members": ["Leela Bobby (ECE 2023-27)"],
        "description": "House price prediction project using Linear regression.",
        "link": "https://github.com/githubleelabobby/House-Price-Prediction-ML-Project",
        "image": leela
      },
      {
        "project_name": "Mandhi Finder",
        "members": ["Fidhaan Ameer (CSE 2024-28)", "Irene Isaan (CSE 2024-28)", "Elson Biju (CSE 2024-28)"],
        "description": "It gives info about different types of mandhi.",
        "link": "https://github.com/Eldhose177/mandhi_finder.git",
        "image": fein
      },

    ],
  };

  const truncateDescription = (description, limit = 12) => {
    const words = description.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return description;
  };

  return (
    <div id="projects">
      <Navigation />
      <div className="project-title">
        <h2>Student Projects</h2>
        <ul className="project-container">
          {data.projects.length > 0 ? (
            data.projects.map((content) => (
              <li key={content.id} className="project-card">
                <div className="project-card-header">
                  <img src={content.image} alt="" />
                  <h3>{content['project_name']}</h3>
                </div>
                <div className="project-card-body">
                  <p className='project-members'>
                    Members:<ul>
                      {content.members.map((name) => (
                        <li key={name}>{name}</li>
                      ))}
                    </ul>
                  </p>

                  <p>
                    {revealedDescription[content.id]
                      ? content.description
                      : truncateDescription(content.description)
                    }
                  </p>

                  <button
                    className="reveal-btn"
                    onClick={() => handleToggleDescription(content.id)}
                  >
                    View Full Description
                  </button>


                </div>
                <div className="project-card-footer">
                  <a href={content.link} target="_blank" rel="noopener noreferrer">
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

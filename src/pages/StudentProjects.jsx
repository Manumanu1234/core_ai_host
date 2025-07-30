import React, { useState } from 'react';
import { Navigation } from '../components/navigation';
import { kiran, devananda, festin, leela, fein, aakash, eldhode, gayathri } from '../assests/projects/index'

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
        "project_name": "KERALA GOC",
        "members": ["Eldhose Saju"],
        "description": "Kerala: God's Own Country is an interactive web application developed using Python and Streamlit.\n\nFeatures:-\n- Interactive Maps – Explore Kerala's major tourist destinations through an interactive map.\n- Responsive UI – Designed for seamless viewing on desktop and mobile devices.\n\nTechnologies Used:-\n- Python (Backend Development)\n- Streamlit (Frontend & UI Framework)\n- Pandas (Data Handling)\n- GeoPandas (Mapping & Geographic Data)\n- OpenStreetMap (Interactive Maps)",
        "link": "https://github.com/Eldhose-saju/KERALA_GOC",
        "image": eldhode
      },
      {
        "project_name": "Lifestyle Hub",
        "members": ["Gayathri J S"],
        "description": "A comprehensive personal lifestyle management web application built with Streamlit.\n\nOverview:\nLifestyle Hub helps you organize your daily activities, track habits, manage finances, and maintain a positive mindset.\n\nFeatures:\n- Home Dashboard with greetings, affirmations, and daily overview\n- Calendar to track events and appointments\n- Daily Affirmations – Predefined or custom\n- Daily Planner for tasks and long-term goals\n- Habit Tracker with visual progress\n- Finance Tracker to monitor expenses and visualize spending patterns",
        "link": "https://github.com/Gayathriijs/Streamlit",
        "image": gayathri
      },
      {
        "project_name": "Real-time Stock Market Monitoring",
        "members": ["Aakash Rajeev"],
        "description": "📈 Real-Time Stock Market Monitoring\nStreamlit-based real-time stock market monitoring app powered by Alpha Vantage API.\n\n✅ What is expected:\n✔️ Gemini AI Integration – Forecast stock trends & provide investment recommendations.\n✔️ Fetches real-time stock data for user-defined stock symbols.\n✔️ Interactive stock market trend visualization using Plotly.\n✔️ Optimized performance with cached API requests.\n\nPlanned Future Features:\n🔹 Integration of NSE API – Support for Indian stocks.\n🔹 Dark/Light Mode Toggle – Improve UI experience.\n🔹 Auto-Refresh Option – Refresh stock data at regular intervals.\n🔹 Sidebar with Extra Features – Display company profiles, market capital, and more.\n\n⚠️ What to look out for:\n❌ NSE stock symbols not supported currently.\n❌ API Rate Limits – Free tier allows 5 API calls per minute.\n❌ Timeout Handling – Not implemented.\n❌ Slow Data Retrieval – For uncached symbols.\n\n🛠️ Installation & Setup\n1️⃣ Clone the Repository:\n   git clone https://github.com/aakshpy/Real-time-Stock-Market-Monitoring.git\n2️⃣ Install Dependencies:\n   pip install -r requirements.txt\n3️⃣ Run the App:\n   streamlit run RTSMM.py",
        "link": "https://github.com/aakshpy/Real-time-Stock-Market-Monitoring",
        "image": aakash
      },
      {
        "project_name": "Churn prediction Using SVM",
        "members": ["Kiran Sreekanth (CSE 2022-26)"],
        "description": "A Support Vector Machine Model to find and detect the number of churned members.",
        "link": "https://github.com/kiransreekanth/SVM-model.git",
        "image": kiran
      },
      {
        "project_name": "Churn predictor",
        "members": ["Deva Nanda Nair (CSE 2023-27)"],
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

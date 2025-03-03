import React, { useState } from 'react';
import { Navigation } from '../components/navigation';

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
        id: 1,
        title: 'Project 1',
        Image:'',
        description: 'This is a sample project that has a long description. It will be truncated initially, and you can reveal the full description by clicking the button below.',
        members: ['member 1', 'member 2', 'member 3'],
        url: 'https://www.example.com',
      },
      {
        id: 2,
        title: 'Project 2',
        image:'',
        description: 'This is another sample project that also has a long description. It will be truncated initially, and you can reveal the full description by clicking the button below.This is another sample project that also has a long description. It will be truncated initially, and you can reveal the full description by clicking the button below.This is another sample project that also has a long description. It will be truncated initially, and you can reveal the full description by clicking the button below.This is another sample project that also has a long description. It will be truncated initially, and you can reveal the full description by clicking the button below.This is another sample project that also has a long description. It will be truncated initially, and you can reveal the full description by clicking the button below.',
        members: ['member 1', 'member 2'],
        url: 'https://www.example2.com',
      },
      {
        id: 3,
        title: 'Project 2',
        image:'',
        description: 'This is another sample project that also has a long description . It will be truncated initially, and you can reveal the full description by clicking the button below.This is another sample project that also has a long description. It will be truncated initially, and you can reveal the full description by clicking the button below.This is another sample project that also has a long description. It will be truncated initially, and you can reveal the full description by clicking the button below.This is another sample project that also has a long description. It will be truncated initially, and you can reveal the full description by clicking the button below.This is another sample project that also has a long description. It will be truncated initially, and you can reveal the full description by clicking the button below.',
        members: ['member 1', 'member 2'],
        url: 'https://www.example2.com',
      },
      {
        id: 4,
        title: 'Project 2',
        image:'',
        description: 'This is another sample project that also has a long description. It will be truncated initially, and you can reveal the full description by clicking the button below.This is another sample project that also has a long description. It will be truncated initially, and you can reveal the full description by clicking the button below.This is another sample project that also has a long description. It will be truncated initially, and you can reveal the full description by clicking the button below.This is another sample project that also has a long description. It will be truncated initially, and you can reveal the full description by clicking the button below.This is another sample project that also has a long description. It will be truncated initially, and you can reveal the full description by clicking the button below.',
        members: ['member 1', 'member 2'],
        url: 'https://www.example2.com',
      },
    ],
  };

  const truncateDescription = (description, limit = 15) => {
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
                  <img src="https://img.freepik.com/free-photo/document-marketing-strategy-business-concept_53876-132231.jpg" alt="" />
                  <h3>{content.title}</h3>
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
                  <a href={content.url} target="_blank" rel="noopener noreferrer">
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
      <div className='section-title'>
      <h3>Add Project</h3>
      <form onSubmit={handleFormSubmit} className="project-form">
        <div>
          <input
            type="text" name="project"
            placeholder="Project name"
            value={newProject.project}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div>
          <input
            type="text" name="description"
            placeholder="Project description"
            value={newProject.description}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div>
          <input
            type="text" name="members" className="form-input"
            placeholder="Member names (comma separated)"
            value={newProject.members}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input type="submit" value="Add" className="submit-btn" />
        </div>
      </form>
      </div>
    </div>
  );
};

export default StudentProjects;

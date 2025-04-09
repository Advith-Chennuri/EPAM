import React, { useState } from 'react';
import './App.css';

const teamMembers = [
  {
    name: 'Advith',
    image: 'https://via.placeholder.com/150?text=Alice',
    info: 'Frontend Developer, loves React.',
  },
  {
    name: 'Shashank',
    image: 'https://via.placeholder.com/150?text=Bob',
    info: 'Backend Developer, works with Node.js.',
  },
  {
    name: 'Harshith',
    image: 'https://via.placeholder.com/150?text=Charlie',
    info: 'UI/UX Designer, creates awesome designs.',
  },
  {
    name: 'Dushyanth',
    image: 'https://via.placeholder.com/150?text=Diana',
    info: 'DevOps Engineer, manages deployments.',
  },
];

function App() {
  const [flipped, setFlipped] = useState(Array(teamMembers.length).fill(false));

  const toggleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <div className="app">
      <h1>My Team</h1>
      <div className="card-grid">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`flip-card ${flipped[index] ? 'flipped' : ''}`}
            onClick={() => toggleFlip(index)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
              </div>
              <div className="flip-card-back">
                <h3>{member.name}</h3>
                <p>{member.info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

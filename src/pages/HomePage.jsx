import React from 'react';
import companiesData from '../companies.json';
import { Link } from 'react-router-dom';

function HomePage(props) {
  return (
    <div className="home-page-container">
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      {companiesData.map((company) => {
        return (
          <div key={company.id} className="company-container">
            <h1>{company.name}</h1>
            <img
              src={company.logo}
              alt={`Logo of ${company.name}`}
              style={{ maxWidth: '100px' }} // Adjust the max width as needed
            />
          </div>
        );
      })}

    </div>
  );
}

export default HomePage;

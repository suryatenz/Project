import React, { useState } from 'react';
import './Signin.css';
// import logo from '../assets/Google';

const Signin = () => {
  const [selectedTab, setSelectedTab] = useState('individual');

  return (
    <div className="signin-page">
      <div className="signin-box">
        <div className="tabs">
          <h2 
            className={selectedTab === 'individual' ? 'active' : ''} 
            onClick={() => setSelectedTab('individual')}
          >
            Individual
          </h2>
          <h2 
            className={selectedTab === 'company' ? 'active' : ''} 
            onClick={() => setSelectedTab('company')}
          >
            Company
          </h2>
        </div>
          <div className="form">
            <input type="text" placeholder="Enter Username" />
            <input type="password" placeholder="Enter Password" />
            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>
            <button className="signin-button">Sign In</button>
            <p className="or-text">or</p>
            <button className="google-button">Continue with Google</button>
          </div>
      </div>
    </div>
  );
};

export default Signin;

import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

function Name() {
  const fullName = "Барсуков Вячеслав Владимирович";
  const phoneNumber = "+380637000444";
  const emailAddress = "barsukov200491@gmail.com";

  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <div className="contact-info">
        <h1>{fullName}</h1>
        <p>Телефон: {phoneNumber}</p>
        <p>Email: {emailAddress}</p>
      </div>
      <Link className="App-link" to="/city">
        Next
      </Link>
    </div>
  );
}

export default Name;

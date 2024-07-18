import React, { useState } from 'react';
import './App.css'; // Import your CSS file

function App() {
  const [userType, setUserType] = useState('');

  // Function to open modal
  const openModal = (type, action) => {
    setUserType(type);
    if (action === 'login') {
      document.getElementById('loginModal').style.display = 'block';
    } else if (action === 'signup') {
      document.getElementById('signupModal').style.display = 'block';
    }
  };

  // Function to close modal
  const closeModal = () => {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('signupModal').style.display = 'none';
  };

  // Function to handle login submission
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (email && password) {
      localStorage.setItem('user', JSON.stringify({ email, userType }));
      if (userType === 'fundi') {
        window.location.href = '/Professional.html'; // Adjust routes as needed
      } else if (userType === 'client') {
        window.location.href = '/client-dashboard.html'; // Adjust routes as needed
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  // Function to handle signup submission
  const handleSignup = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const fullName = event.target.fullName.value;
    const location = event.target.location.value;
    const age = event.target.age.value;
    const idNumber = event.target.idNumber.value;
    const password = event.target.password.value;

    if (email && fullName && location && age && idNumber && password) {
      localStorage.setItem('user', JSON.stringify({ email, fullName, location, userType }));
      if (userType === 'fundi') {
        window.location.href = '/Professional.html'; // Adjust routes as needed
      } else if (userType === 'client') {
        window.location.href = '/client-dashboard.html'; // Adjust routes as needed
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  // Display user info on dashboard
  const displayUserInfo = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      return (
        <div>
          <p>User Name: {user.fullName}</p>
          <p>User Email: {user.email}</p>
          <p>User Location: {user.location}</p>
        </div>
      );
    }
  };

  return (
    <div className="App">
      <div className="flex-container">
        <img src="./LOGO IMAGE" alt="LOGO" />
      </div>
      <button className="card-button" onClick={() => window.location.href = '/Home.html'}>HomePage</button>
      <button className="card-button" onClick={() => window.location.href = './about-us.html'}>About Us</button>

      <div className="grid-container">
        <div className="register-div card">
          <h2>FUNDI</h2>
          <p>Log in to manage your projects, connect with clients, and track your progress.</p>
          <p>Your tools for success are just a click away.</p>
          <div className="button-container">
            <button className="card-button" onClick={() => openModal('fundi', 'login')}>Log In</button>
            <button className="card-button" onClick={() => openModal('fundi', 'signup')}>Sign Up</button>
          </div>
        </div>

        <div className="login-div card">
          <h2>CLIENT</h2>
          <p>Log in to find skilled professionals, manage your projects, and get the help you need.</p>
          <p>Your next project starts here.</p>
          <div className="button-container">
            <button className="card-button" onClick={() => openModal('client', 'login')}>Log In</button>
            <button className="card-button" onClick={() => openModal('client', 'signup')}>Sign Up</button>
          </div>
        </div>
      </div>

      {/* Modal structure for login */}
      <div id="loginModal" className="modal" style={{ display: 'none' }}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <h2>Log In</h2>
          <form id="loginForm" onSubmit={handleLogin}>
            <p><label htmlFor="loginEmail">Email/Phone Number:</label>
              <input type="email" id="loginEmail" name="email" required /></p>
            <p><label htmlFor="loginPassword">Password:</label>
              <input type="password" id="loginPassword" name="password" required /></p>
            <button type="submit" className="card-button">Submit</button>
          </form>
        </div>
      </div>

      {/* Modal structure for signup */}
      <div id="signupModal" className="modal" style={{ display: 'none' }}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <h2>Sign Up</h2>
          <form id="signupForm" onSubmit={handleSignup}>
            <p><label htmlFor="signupEmail">Email Address:</label>
              <input type="email" id="signupEmail" name="email" required /></p>
            <p><label htmlFor="signupFullName">Full Name:</label>
              <input type="text" id="signupFullName" name="fullName" required /></p>
            <p><label htmlFor="signupLocation">Location:</label>
              <input type="text" id="signupLocation" name="location" required /></p>
            <p><label htmlFor="signupAge">Age:</label>
              <input type="number" id="signupAge" name="age" required /></p>
            <p><label htmlFor="signupIdNumber">ID Number:</label>
              <input type="text" id="signupIdNumber" name="idNumber" required /></p>
            <p><label htmlFor="signupPassword">Password:</label>
              <input type="password" id="signupPassword" name="password" required /></p>
            <button type="submit" className="card-button">Submit</button>
          </form>
        </div>
      </div>

      {/* Display user info */}
      <div className="user-info">
        {displayUserInfo()}
      </div>
    </div>
  );
}

export default App;

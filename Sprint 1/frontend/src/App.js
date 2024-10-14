import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import RegisterPage from './RegisterPage';
import LogInPage from './LogInPage';
import logo from './logo.svg';
import './App.css';


function Header() {
  return (
    <header className= "App-header">
    <p>
      Welcome to SomethingEthical
    </p>
    </header>
  )
}

function Main() {
  return (
    <div className = "App-main">
      <Link to="/RegisterPage" className="App-button">Register</Link>
      <Link to="/LogInPage" className="App-button">Log In</Link>
    </div>
  )
}

function Footer() {

}

function Button({ label, onClick }) {
  return (
    <button onClick={onClick} className = "App-button">
      {label}
    </button>
  )
}


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/RegisterPage" element={<RegisterPage />} />
          <Route path="/LogInPage" element={<LogInPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
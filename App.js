import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import "./App.css";

const ClientPage = () => {
  return (
    <div>
      <header>
        <h1>Hotel Reservation System</h1>
        <nav>
          <Link to="#home">Home</Link>
          <Link to="#about">About</Link>
          <Link to="#contact">Contact</Link>
        </nav>
      </header>

      <main>
        <h2>Find Your Stay</h2>
        <form>
          <label>
            Destination:
            <input type="text" placeholder="Enter a destination" />
          </label>
          <label>
            Check-in:
            <input type="date" />
          </label>
          <label>
            Check-out:
            <input type="date" />
          </label>
          <label>
            Guests:
            <input type="number" min="1" defaultValue="1" />
          </label>
          <button type="submit">Search</button>
        </form>

        <Link to="/usertype">
          <button>Connexion</button>
        </Link>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ClientPage />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
};

export default App;

// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import './Navbar.css'; // Add your styles for Navbar here

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/">Task 1</Link></li>
        <li><Link to="/task2">Task 2</Link></li>
        <li><Link to="/task3">Task 3</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

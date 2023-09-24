import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from '../../about';

// Define your About component (or other components) here
// const About = () => {
//   return <h2>About Page</h2>;
// };

const Navbar = () => {
  return (
    <Router>
      <>
        <nav className="mt-40">
          <ul>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/events'>Events</Link>
            </li>
            <li>
              <Link to='/annual'>Annual Report</Link>
            </li>
            <li>
              <Link to='/team'>Teams</Link>
            </li>
            <li>
              <Link to='/blogs'>Blogs</Link>
            </li>
            <li>
              <Link to='/sign-up'>Sign Up</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/about' element={<About />} />
          {/* Define more routes here */}
        </Routes>
      </>
    </Router>
  );
};

export default Navbar;
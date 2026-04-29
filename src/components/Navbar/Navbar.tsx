import React from 'react';
import { Link, useLocation, useMatch } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const match1 = useMatch('/people/*');
  const match2 = useMatch('/people');
  const isPeoplePage = match1 || match2;

  return (
    <nav
      data-cy="nav"
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className={`navbar-item ${
              location.pathname === '/' ? 'has-background-grey-lighter' : ''
            }`}
          >
            Home
          </Link>

          <Link
            to="/people"
            className={`navbar-item ${
              isPeoplePage ? 'has-background-grey-lighter' : ''
            }`}
          >
            People
          </Link>
        </div>
      </div>
    </nav>
  );
};

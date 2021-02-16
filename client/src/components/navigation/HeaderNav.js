import React from 'react';
import { Link } from '@reach/router';

const HeaderNav = () => {
  return (
    <div className="wrapper-header-subnav">
      <nav id="nav" className="app-navigation">
        <div className="navbar">
          <ul className="navbar__list-items">
            <li>
              <Link className="govuk-link" to="agent">
                Agent
              </Link>
            </li>

            <li>
              <Link className="govuk-link" to="customer">
                Customer
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HeaderNav;

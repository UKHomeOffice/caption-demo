import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="wrapper-footer">
        <div>
          <p className="footer-message">
            A Home Office Digital, Data and Technology service
          </p>
          <p className="footer-message">
            Contains sensitive information from Home Office departments. Do not
            circulate this information further without prior approval from CTO -
            Innovation Team. Any printed copies must be kept secure and read in
            a secure environment.
          </p>
        </div>
        <div className="footer-menu">
          <ul>
            <li>
              <a
                className="govuk-link"
                href="mailto:cto-innovationdesignauthority@homeoffice.gov.uk"
              >
                Feedback
              </a>
            </li>
            <li>
              <a href="#0">Help</a>
            </li>
            <li>
              <a href="#0">GOV.UK home</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

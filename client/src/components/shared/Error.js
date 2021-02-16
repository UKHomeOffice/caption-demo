import React from 'react';

const Error = ({ title, error }) => (
  <div
    className="govuk-error-summary"
    aria-labelledby="error-summary-title"
    role="alert"
    tabIndex="-1"
    data-module="error-summary"
  >
    <h2 className="govuk-error-summary__title" id="error-summary-title">
      {title ? title : `There is a problem`}
    </h2>
    <div className="govuk-error-summary__body">
      <ul className="govuk-list govuk-error-summary__list">
        <li>
          <p className="govuk-body error-paragraph">{error}</p>
        </li>
      </ul>
    </div>
  </div>
);

export default Error;

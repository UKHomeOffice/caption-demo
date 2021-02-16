import React from 'react';

const WarningText = ({ text }) => {
  return (
    <div className="govuk-warning-text">
      <span className="govuk-warning-text__icon" aria-hidden="true">
        !
      </span>
      <strong className="govuk-warning-text__text">
        <span className="govuk-warning-text__assistive">Warning</span>
        {text}
      </strong>
    </div>
  );
};

export default WarningText;

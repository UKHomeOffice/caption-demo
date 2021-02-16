import React from 'react';

const ConfirmPanel = ({ title, text }) => {
  return (
    <div className="govuk-panel govuk-panel--confirmation">
      <h1 className="govuk-panel__title">{title}</h1>
      <div className="govuk-panel__body">{text}</div>
    </div>
  );
};

export default ConfirmPanel;

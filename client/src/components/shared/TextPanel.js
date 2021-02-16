import React from 'react';

const TextPanel = ({ text, phrase, lang }) => {
  return (
    <>
      {lang ? (
        <h2 className="govuk-heading-m">Language: {lang.language}</h2>
      ) : (
        <div className="govuk-warning-text">
          <span className="govuk-warning-text__icon" aria-hidden="true">
            !
          </span>
          <strong className="govuk-warning-text__text">
            <span className="govuk-warning-text__assistive">Warning</span>
            You have not selected an input language.
          </strong>
        </div>
      )}
      <p className="govuk-body">
        {phrase && phrase.join(' ')} {text}
      </p>
    </>
  );
};

export default TextPanel;

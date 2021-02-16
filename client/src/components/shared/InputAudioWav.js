import React from 'react';
import { Field } from 'react-final-form';

const InputAudioWav = ({ name, ...props }) => {
  return (
    <Field name={name}>
      {({ input: { value, onChange, ...input } }) => {
        const handleChange = ({ target }) => {
          onChange(target.files); // instead of the default target.value
        };
        return (
          <input {...input} type="file" onChange={handleChange} {...props} />
        );
      }}
    </Field>
  );
};

export default InputAudioWav;

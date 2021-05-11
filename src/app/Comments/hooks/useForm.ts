import { useState } from 'react';

/**
 * Simple hook to manage form
 * @param callback submit function
 * @param initialState initial values form
 * @returns onchange, onsubmit and values
 */

export const useForm = (callback: any, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await callback();
  };

  return {
    onChange,
    onSubmit,
    values,
  };
};

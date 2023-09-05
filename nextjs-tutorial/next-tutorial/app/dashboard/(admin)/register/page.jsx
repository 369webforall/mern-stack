import React from 'react';

const networkError = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Simulated network error'));
    }, 2000);
  });
};
const Register = () => {
  const error = networkError();
  return <div>User registration {error} </div>;
};

export default Register;

import React from 'react';
import styles from './Login.module.scss';
import Box from '../components/Box/Box';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import Link from '../components/Link/Link';
import { Link as RouterLink } from 'react-router-dom';
import { useFormik } from 'formik';

import * as yup from 'yup';

/*
confirmation
validationSchema: Yup.object({
  password: Yup.string().required('Password is required'),
  passwordConfirmation: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match')
});
 */
const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('You must have a username')
    .min(3, 'Min 3 characters required'),
  password: yup
    .string()
    .required('You must have a password')
    .min(6, 'Min 6 chacarters required'),
});

const Login = () => {
  const loginForm = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted with values:', values);
    },
  });
  console.log(loginForm.errors);
  return (
    <div className={styles.loginContainer}>
      <Box>
        <h2>Clonestagram</h2>
        <form onSubmit={loginForm.handleSubmit}>
          <div className={styles.inputContainer}>
            <Input
              type="text"
              placeholder="Enter username"
              name="username"
              value={loginForm.values.username}
              onChange={loginForm.handleChange}
            />
            {loginForm.errors?.username && (
              <span
                style={{ color: 'red', display: 'block', marginTop: '5px' }}
              >
                {loginForm.errors?.username}
              </span>
            )}
          </div>
          <div className={styles.inputContainer}>
            <Input
              type="password"
              name="password"
              placeholder="Enter password"
              value={loginForm.values.password}
              onChange={loginForm.handleChange}
            />
          </div>
          <div className={styles.inputContainer}>
            <Button
              type="submit"
              size="block"
              variation="primary"
              label="Log In"
            />
          </div>
          <div className={styles.inputContainer}>
            <Link href="#">Forgot Password</Link>
          </div>
          <div className={styles.inputContainer}>
            Dont have an account?
            <RouterLink to="/register">
              <Link> Sign Up</Link>
            </RouterLink>
          </div>
        </form>
      </Box>
    </div>
  );
};

export default Login;

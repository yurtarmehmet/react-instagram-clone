import React from 'react';
import styles from './Register.module.scss';
import { Link as RouterLink } from 'react-router-dom';
import Box from '../components/Box/Box';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import Link from '../components/Link/Link';

const Register = () => {
  return (
    <div className={styles.registerContainer}>
      <Box>
        <h2>Clonestagram</h2>
        <div className={styles.inputContainer}>
          <Input type="text" placeHolder="Full Name" />
        </div>
        <div className={styles.inputContainer}>
          <Input type="text" placeHolder="Enter username" />
        </div>
        <div className={styles.inputContainer}>
          <Input type="password" placeHolder="Enter password" />
        </div>
        <div className={styles.inputContainer}>
          <Button size="block" variation="primary" label="Sign Up" />
        </div>
        <div className={styles.inputContainer}>
          Have an account?
          <RouterLink to="/login">
            <Link> Log In</Link>
          </RouterLink>
        </div>
      </Box>
    </div>
  );
};

export default Register;

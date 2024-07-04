// LoginButton.js
import React from 'react';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const LoginButton = () => {
  return (
    <Button as={Link} to="/login" colorScheme="teal" variant="link" ml={10}>
      Login
    </Button>
  );
};

export default LoginButton;

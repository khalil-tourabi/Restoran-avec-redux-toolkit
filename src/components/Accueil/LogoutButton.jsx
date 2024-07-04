// LoginButton.js
import React from 'react';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const LogoutButton = () => {
  return (
    <Button as={Link} to="/" colorScheme="teal" variant="link" ml={10}>
      Logout
    </Button>
  );
};

export default LogoutButton;

// LoginButton.js
import React from 'react';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../state/user/userSlice';

const LogoutButton = () => {
  const dispatch = useDispatch();
  return (
    <Button as={Link} to="/login" colorScheme="teal" variant="link" ml={10} onClick={() => dispatch(logout())}>
      Logout
    </Button>
  );
};

export default LogoutButton;

import React from 'react'
import { Box, Button, FormControl, Input, Stack, VStack, useBreakpointValue} from '@chakra-ui/react';
import { addUser } from '../../JS/Actions/action';
import {useDispatch} from 'react-redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function RegisterForm({history}) {
    const logoImage = '/L_logo_onlytext.png';
    const circleSize = useBreakpointValue({ base: '360px', sm: '400px', md: '400px' });
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();
    const users = useSelector((state) => state.app.users)
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
      event.preventDefault();
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      if(users.some(obj => obj.username === username)){
        alert("username not unique")
        return
      }
      alert(`Username: ${username}, Password: ${password}`);
      const user = {username, password};
      dispatch(addUser(user));
      setUsername('');
      setPassword('');
      setConfirmPassword('');
      navigate('/login');
    };
    return (
      <VStack spacing={8} alignItems="center" justifyContent="center" minHeight="100vh">
        <Box
        position="absolute"
        top="40%"
        left="40%"
        transform="translate(-50%, -50%)"
        width={circleSize} // Width based on screen size
        height={circleSize} // Height based on screen size
        bg="rgba(0, 0, 0, 0.6)" // Top left circle (black)
        borderRadius="50%"
      />
      <Box
        position="absolute"
        top="40%"
        right="40%"
        transform="translate(50%, -50%)"
        width={circleSize} // Width based on screen size
        height={circleSize} // Height based on screen size
        bg="rgba(0, 123, 255, 0.6)" // Top right circle (cyan.400)
        borderRadius="50%"
      />
      <Box
        position="absolute"
        bottom="40%"
        left="40%"
        transform="translate(-50%, 50%)"
        width={circleSize} // Width based on screen size
        height={circleSize} // Height based on screen size
        bg="rgba(0, 123, 255, 0.6)" // Bottom left circle (cyan.400)
        borderRadius="50%"
      />
      <Box
        position="absolute"
        bottom="40%"
        right="40%"
        transform="translate(50%, 50%)"
        width={circleSize} // Width based on screen size
        height={circleSize} // Height based on screen size
        bg="rgba(0, 0, 0, 0.6)" // Bottom right circle (black)
        borderRadius="50%"
      />
        <Box
          maxW="sm"
          p={8}
          borderRadius={40}
          boxShadow="lg"
          bg="rgba(0, 123, 255, 0.75)" // Background color with 60% transparency
          color="white" // Text color
          zIndex="1"
        >
          {/* Replace placeholder text with image */}
          <Box textAlign="center" mb={4}>
            <img src={`${logoImage}`} alt="Logo" style={{ maxWidth: '100%' }} />
          </Box>
  
          {/* Username Field */}
          <FormControl>
            <Input
              type="text"
              placeholder="Username"
              variant="flushed" // Use variant="flushed" for bottom outline
              sx={{
                borderBottomWidth: '2px', // Bottom border width
                borderBottomColor: 'white', // Bottom border color
                '&:hover, &:focus': {
                  borderBottomColor: 'blue.400', // Hover and focus color for bottom border
                },
                '&::placeholder': { color: 'white' }, // Placeholder text color
              }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
  
          {/* Password Field */}
          <FormControl mt={4}>
            <Input
              type="password"
              placeholder="Password"
              variant="flushed" // Use variant="flushed" for bottom outline
              sx={{
                borderBottomWidth: '2px', // Bottom border width
                borderBottomColor: 'white', // Bottom border color
                '&:hover, &:focus': {
                  borderBottomColor: 'blue.400', // Hover and focus color for bottom border
                },
                '&::placeholder': { color: 'white' }, // Placeholder text color
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <FormControl mt={4}>
            <Input
              type="password"
              placeholder="Confirm Password"
              variant="flushed" // Use variant="flushed" for bottom outline
              sx={{
                borderBottomWidth: '2px', // Bottom border width
                borderBottomColor: 'white', // Bottom border color
                '&:hover, &:focus': {
                  borderBottomColor: 'blue.400', // Hover and focus color for bottom border
                },
                '&::placeholder': { color: 'white' }, // Placeholder text color
              }}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FormControl>
  
          {/* Submit Button and Link to Register Form */}
          <Stack pt={4} mt={4} direction="row" justify="center" alignItems="center">
            <Button
              variant="outline"
              color="white"
              borderColor="white"
              borderWidth="3px"
              borderRadius="40px"
              width="45%"
              _hover={{ bg: 'white', color: 'cyan.400' }} // Hover styles
              onClick={handleSubmit}
            >
              Register
            </Button>
          </Stack>
        </Box>
      </VStack>
    );
}

export default RegisterForm
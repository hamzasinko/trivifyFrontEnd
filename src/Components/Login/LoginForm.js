import { Box, Button, FormControl, Input, Stack, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../JS/Actions/action';

const LoginForm = () => {
  const logoImage = '/L_logo_onlytext.png';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const users = useSelector((state) => state.app.users);
  const navigate = useNavigate();
  // Define sizes for different screen breakpoints
  const circleSize = useBreakpointValue({ base: '360px', sm: '400px', md: '400px' });

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!users.some(obj => obj.username === username)){
      alert("username not correct")
      return
    }
    if(!users.some(obj => obj.password === password)){
      alert("password not correct")
      return
    }
    const user = {username, password};
    dispatch(login(user));
    setUsername('');
    setPassword('');
    navigate('/');
  };

  return (
    <VStack spacing={8} alignItems="center" justifyContent="center" minHeight="100vh" position="relative">
      {/* Circles */}
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

      {/* Login Form */}
      <Box
        maxW="sm"
        p={8}
        borderRadius={40}
        boxShadow="lg"
        bg="rgba(0, 123, 255, 0.75)" // Background color with 60% transparency
        color="white" // Text color
        zIndex="1" // Ensure the form is above circles
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

        {/* Submit Button and Link to Register Form */}
        <Stack pt={4} mt={4} direction="row" justify="space-between" alignItems="center">
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
            Login
          </Button>
          <Text>
            Or{' '}
          </Text>
          <Link as="RouterLink" 
                to={'/register'}>
            <Text _hover={{ color: 'cyan.400' }}>create an account</Text>
          </Link>
        </Stack>
      </Box>
    </VStack>
  );
};

export default LoginForm;

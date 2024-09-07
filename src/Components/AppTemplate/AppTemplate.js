import React from 'react'
import { Box } from '@chakra-ui/react';

const AppTemplate = ({ children }) => {
    const backgroundImage = '/background.png';
    return (
      <Box
        bgImage={`url(${backgroundImage})`}
        bgSize="cover"
        bgPosition="center"
        minHeight="100vh"
        color="white"
        p={8}
      >
        <Box>
          {children}
        </Box>
      </Box>
    );
  };

export default AppTemplate
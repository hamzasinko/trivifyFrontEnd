import { Box, Heading, Text, Flex, Icon } from '@chakra-ui/react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function Contact() {
  return (
    <Box pt="150px">
      <Navbar />
      <Box height="50vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgColor="white" color="black" mx="auto" px={{ base: '6', md: '8' }} py="12">
        <Heading size="lg" mb="4">Contact Us</Heading>
        
        <Flex align="center" mb="4">
          <Icon as={FaPhone} fontSize="xl" mr="2" />
          <Text fontWeight="bold">Phone:</Text>
          <Text ml="2">+1234567890</Text>
        </Flex>
        
        <Flex align="center" mb="4">
          <Icon as={FaEnvelope} fontSize="xl" mr="2" />
          <Text fontWeight="bold">Email:</Text>
          <Text ml="2">info@example.com</Text>
        </Flex>
        
        <Flex align="center">
          <Icon as={FaMapMarkerAlt} fontSize="xl" mr="2" />
          <Text fontWeight="bold">Address:</Text>
          <Text ml="2">123 Street, City, Country</Text>
        </Flex>
        
      </Box>
      <Footer />
    </Box>
  );
}

export default Contact;

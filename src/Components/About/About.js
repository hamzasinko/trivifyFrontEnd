import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function About() {
  return (
    <Box pt="150px">
      <Navbar />
      <Box height="50vh" bgColor={'white'} color={'black'} display="flex" flexDirection="column" justifyContent="center" alignItems="center" mx="auto" px={{ base: '6', md: '8' }} py="12">
        <Heading size="lg" mb="4">About This Quiz App</Heading>
        <Text fontSize="lg" mb="8">
          Welcome to our Quiz App! Whether you're a trivia enthusiast or just looking to challenge your knowledge, our quiz app provides a fun and interactive way to test yourself on various topics. Dive into categories ranging from history and science to pop culture and sports.
        </Text>
        <Text fontSize="lg" mb="8">
          Our quizzes are designed to be educational and entertaining, suitable for all ages. Track your scores, challenge your friends, and discover new facts along the way. Join our community of quiz enthusiasts and start exploring today!
        </Text>
        <Text fontSize="lg">
          Thank you for choosing our Quiz App. We hope you enjoy the experience!
        </Text>
      </Box>
      <Footer />
    </Box>
  );
}

export default About;

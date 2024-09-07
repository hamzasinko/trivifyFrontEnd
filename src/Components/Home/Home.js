import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Box, Heading, Flex, Text } from '@chakra-ui/react';
import QuizList from '../Quiz/QuizList';
import { useSelector } from 'react-redux';
import Footer from '../Footer/Footer';

function Home() {
  const quizes = useSelector((state) => state.app.quizes);
  const user = useSelector((state) => state.app.currentUser);
  const generalKnowledgeQuizes = quizes.filter((quiz) => quiz.categorie === 'General Knowledge');
  const sportsQuizes = quizes.filter((quiz) => quiz.categorie === 'Sports');
  const userQuizes = quizes.filter((quiz) => quiz.creater === user.username);

  return (
    <Box pt="80px" pb="120px"> {/* Adjusted padding top and bottom to account for Navbar and Footer height */}
      <Navbar />
      <Box p={5} m={5} bg="rgba(0, 123, 255)" borderRadius={20} boxShadow="lg">
        <Flex direction="column">
          <Heading as="h2" size="xl" mb={6} textAlign="left">
            General Knowledge
          </Heading>
          <Box flex="1">
            <QuizList quizes={generalKnowledgeQuizes} />
          </Box>
        </Flex>
      </Box>
      <Box p={5} m={5} bg="rgba(0, 123, 255)" borderRadius={20} boxShadow="lg">
        <Flex direction="column">
          <Heading as="h2" size="xl" mb={6} textAlign="left">
            Sports
          </Heading>
          <Box flex="1">
            <QuizList quizes={sportsQuizes} />
          </Box>
        </Flex>
      </Box>
      <Box p={5} m={5} bg="rgba(0, 123, 255)" borderRadius={20} boxShadow="lg">
        <Flex direction="column">
          <Heading as="h2" size="xl" mb={6} textAlign="left">
            Your quizes
          </Heading>
          <Box flex="1">
            {userQuizes.length === 0 ? <Text>No quizes created</Text> : <QuizList quizes={userQuizes} />}
          </Box>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
}

export default Home;

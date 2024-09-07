import React, { useState, useEffect, useRef } from 'react';
import {
  ChakraProvider,
  Box,
  Button,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Progress,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Flex,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { activateQuiz, createNewRoom } from '../../JS/Actions/action';

const Room = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [quizFinished, setQuizFinished] = useState(false);
  const [isExitDialogOpen, setIsExitDialogOpen] = useState(false);
  const [timer, setTimer] = useState(30);
  const cancelRef = useRef();
  const quizData = useSelector((state) => state.app.activeQuiz);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          handleTimeout();
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentQuestionIndex]);

  const handleSubmit = () => {
    if (selectedOption === quizData.content[currentQuestionIndex].answer) {
      setScore(score + timer);
    }
    setSelectedOption('');
    setTimer(30);
    if (currentQuestionIndex < quizData.content.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleTimeout = () => {
    setScore((prevScore) => Math.max(prevScore - 10, 0));
    setSelectedOption('');
    setTimer(30);
    if (currentQuestionIndex < quizData.content.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleExit = () => {
    dispatch(activateQuiz());
    dispatch(createNewRoom(""));
    navigate('/');
  };

  const handleOpenExitDialog = () => {
    setIsExitDialogOpen(true);
  };

  const handleCloseExitDialog = () => {
    setIsExitDialogOpen(false);
  };

  const scorePercentage = (score / (quizData.content.length * 30)) * 100;

  return (
    <ChakraProvider>
      <Flex 
        justify="center" 
        align="center" 
        minH="100vh"
        pt={4}
      >
        <Box
          p={{ base: 2, md: 5 }}
          maxW={{ lg: '100%', base: '100%', md: '100%' }}
          borderWidth={1}
          borderRadius="md"
          boxShadow="lg"
          height="500px"
          width="500px"
          bg="white"
          color="black"
          position="relative"
          textAlign="center" // Center align text within the box
          display="flex"
          flexDirection="column"
          justifyContent="space-between" // Space evenly between children
        >
          {!quizFinished ? (
            <>
              <Button
                position="absolute"
                top={2}
                right={2}
                colorScheme="red"
                onClick={handleOpenExitDialog}
              >
                Exit
              </Button>
              <Text fontSize={{ base: 'lg', md: 'xl' }} mx={5} mt={10} mb={4} textAlign="center">
                {quizData.content[currentQuestionIndex].question}
              </Text>
              <RadioGroup onChange={setSelectedOption} value={selectedOption}>
                <Stack direction="column" alignItems="center">
                  {quizData.content[currentQuestionIndex].choices.map((option, index) => (
                    <Radio key={index} value={option}>
                      {option}
                    </Radio>
                  ))}
                </Stack>
              </RadioGroup>
              <Text fontSize={{ base: 'md', md: 'lg' }} mt={4} textAlign="center">
                Time remaining: {timer} seconds
              </Text>
              <Flex mt={4} justifyContent="flex-start">
                <Button
                  colorScheme="teal"
                  onClick={handleSubmit}
                  isDisabled={!selectedOption}
                  position="absolute"
                  bottom={2}
                  right={2}
                >
                  Submit
                </Button>
              </Flex>
            </>
          ) : (
            <>
              <Text fontSize={{ base: 'lg', md: 'xl' }} mb={4} textAlign="center">
                Quiz finished! Your score is {score}/{quizData.content.length * 30}.
              </Text>
              <Progress value={scorePercentage} size="lg" colorScheme="teal" />
              <Button mt={4} onClick={handleOpenExitDialog}>
                Exit
              </Button>
            </>
          )}
        </Box>

        <AlertDialog
          isOpen={isExitDialogOpen}
          leastDestructiveRef={cancelRef}
          onClose={handleCloseExitDialog}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Exit Quiz
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure you want to exit the quiz? Your progress will be lost.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={handleCloseExitDialog}>
                  No
                </Button>
                <Button colorScheme="red" onClick={handleExit} ml={3}>
                  Yes
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Flex>
    </ChakraProvider>
  );
};

export default Room;

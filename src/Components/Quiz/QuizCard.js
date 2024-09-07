import React,{useState, useEffect} from 'react';
import { Box, Image, Text, Button, Flex } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { activateQuiz,createNewRoom } from '../../JS/Actions/action';
import { useNavigate } from 'react-router-dom';

function QuizCard(props) {
    const [chosenQuiz, setChosenQuiz] = useState(null);
    const [shouldNavigate, setShouldNavigate] = useState(false);
    const dispatch = useDispatch();
    const roomUrl = useSelector((state) => state.app.roomUrl);
    const quizes = useSelector((state) => state.app.quizes);
    const navigate = useNavigate();

    const handleChoose = () => {
        const choosingQuiz = quizes.find(obj => obj.title === props.title);
        setChosenQuiz(choosingQuiz);
        dispatch(activateQuiz(choosingQuiz));
        dispatch(createNewRoom());
        setShouldNavigate(true); // Set flag to navigate after state update
        alert(`Quiz chosen: ${props.title}`);
      };

      useEffect(() => {
        if (shouldNavigate && chosenQuiz) {
          const completeUrl = "/room/" + roomUrl;
          alert(`Room URL: ${roomUrl}`);
          navigate(completeUrl);
          setShouldNavigate(false); // Reset flag after navigation
        }
      }, [roomUrl, shouldNavigate, chosenQuiz, navigate]);
    

  return (
    <Box 
      maxW={{ base: '100%', sm: 'sm', md: 'md' }} // Adjust max width for different screen sizes
      borderWidth="1px" 
      borderRadius="lg" 
      overflow="hidden" 
      boxShadow="md"
      bgColor={'white'}
      p={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
      mx="auto"
      h="100%"
    >
      <Image 
        src={props.image}
        alt={props.title} 
        borderRadius="md"
        height="200px"
        objectFit="cover"
        width="100%"
      />
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        p={6}
        height="100%"
        textAlign="center"
        width="100%" // Ensure text content is centered
      >
        <Box d="flex" display="flex" alignItems="baseline" justifyContent="center" width="100%">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {props.categorie}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
          color={'black'}
        >
          {props.title}
        </Box>

        <Box d="flex" mt="2" alignItems="center" width="100%">
          <Text fontSize="sm" color="gray.500">
            {props.description}
          </Text>
        </Box>

        <Button 
          mt={4} 
          colorScheme="teal"
          onClick={(e) => {
            e.preventDefault();
            handleChoose();
          }}
        >
          Start the Quiz
        </Button>
      </Flex>
    </Box>
  );
}

export default QuizCard;

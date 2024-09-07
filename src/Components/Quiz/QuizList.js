import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import QuizCard from './QuizCard';

function QuizList(props) {
  return (
    <Box textAlign="center">
      <SimpleGrid columns={[1, 1, 3]} spacing="40px" justifyContent="center">
        {props.quizes.map((quiz, index) => (
          <Box key={index} width="100%">
            <QuizCard
              image={quiz.image}
              title={quiz.title}
              categorie={quiz.categorie}
              description={quiz.description}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default QuizList;

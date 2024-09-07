import { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
  Box,
  Divider,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addQuiz } from '../../JS/Actions/action';

const CreateQuiz = () => {
  const user = useSelector((state) => state.app.currentUser);
  const [quizData, setQuizData] = useState({
    title: '',
    description: '',
    categorie: '',
    content: [
      { question: '', choices: ['', '', '', ''], answer: '' },
      { question: '', choices: ['', '', '', ''], answer: '' },
      { question: '', choices: ['', '', '', ''], answer: '' },
      { question: '', choices: ['', '', '', ''], answer: '' },
      { question: '', choices: ['', '', '', ''], answer: '' },
    ],
  });
  const defaultImage="/default_image.jpg";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...quizData.content];
    updatedQuestions[index][field] = value;
    setQuizData({ ...quizData, content: updatedQuestions });
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...quizData.content];
    updatedQuestions[questionIndex].choices[optionIndex] = value;
    setQuizData({ ...quizData, content: updatedQuestions });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const quiz = {title: quizData.title,
        description: quizData.description,
        categorie: quizData.categorie,
        image: defaultImage,
        content: quizData.content,
        creater: user.username}
    dispatch(addQuiz(quiz));
    navigate('/');
  };

  return (
    <Box mt={8} mb={8} bg="rgba(0, 123, 255)" color={'white'} p={6} shadow="md" borderWidth="1px" borderRadius="md" width={{ base: '100%', md: '80%' }} mx="auto">
      <form onSubmit={handleSubmit}>
        <FormControl id="title" isRequired>
          <FormLabel>Title</FormLabel>
          <Input type="text" value={quizData.title} onChange={(e) => setQuizData({ ...quizData, title: e.target.value })} />
        </FormControl>

        <FormControl id="description" mt={4} isRequired>
          <FormLabel>Description</FormLabel>
          <Textarea value={quizData.description} onChange={(e) => setQuizData({ ...quizData, description: e.target.value })} />
        </FormControl>

        <FormControl id="categorie" mt={4} isRequired>
          <FormLabel>Category</FormLabel>
          <Select value={quizData.categorie} onChange={(e) => setQuizData({ ...quizData, categorie: e.target.value })}>
            <option value="General Knowledge">General Knowledge</option>
            <option value="Sports">Sports</option>
            <option value="Other">Other</option>
          </Select>
        </FormControl>

        <Divider my={6} />

        {quizData.content.map((question, index) => (
          <Box key={index} mb={6}>
            <FormControl id={`question-${index}`} isRequired>
              <FormLabel>{`Question ${index + 1}`}</FormLabel>
              <Textarea
                value={question.question}
                onChange={(e) => handleQuestionChange(index, 'question', e.target.value)}
                isRequired
              />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel>Choices</FormLabel>
              {question.choices.map((option, optionIndex) => (
                <Input
                  key={optionIndex}
                  type="text"
                  placeholder={`Option ${optionIndex + 1}`}
                  value={option}
                  onChange={(e) => handleOptionChange(index, optionIndex, e.target.value)}
                  isRequired
                />
              ))}
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel>Correct Answer</FormLabel>
              <Select
                value={question.answer}
                color={'black'}
                onChange={(e) => handleQuestionChange(index, 'answer', e.target.value)}
                isRequired
              >
                {question.choices.map((option, optionIndex) => (
                  <option key={optionIndex} value={option}>{`Option ${optionIndex + 1}`}</option>
                ))}
              </Select>
            </FormControl>
          </Box>
        ))}

        <Button type="submit" colorScheme="blue" mt={8}>
          Submit Quiz
        </Button>
      </form>
    </Box>
  );
};

export default CreateQuiz;

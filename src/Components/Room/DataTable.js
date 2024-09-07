import React, { useEffect, useState } from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { activateQuiz, createNewRoom } from '../../JS/Actions/action';
import { useNavigate } from 'react-router-dom';

const DataTable = ({ data, searchTerm }) => {
  const [chosenQuiz, setChosenQuiz] = useState(null);
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const dispatch = useDispatch();
  const roomUrl = useSelector((state) => state.app.roomUrl);
  const navigate = useNavigate();

  const handleChoose = (itemTitle) => {
    const choosingQuiz = data.find(obj => obj.title === itemTitle);
    setChosenQuiz(choosingQuiz);
    dispatch(activateQuiz(choosingQuiz));
    dispatch(createNewRoom());
    setShouldNavigate(true); // Set flag to navigate after state update
    alert(`Quiz chosen: ${itemTitle}`);
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
      width={{ base: '100%', md: '100%' }} // Responsive width based on screen size
      margin="0 auto"
      bg="white"
      p={4}
      borderRadius="md"
      boxShadow="md"
      overflowX="auto" // Add horizontal scroll for small screens
    >
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th colSpan={3} textAlign="center">
              Items Table
            </Th>
          </Tr>
          <Tr>
            <Th>Title</Th>
            <Th>Category</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody color="black">
          {filteredData.map((item) => (
            <Tr key={item.title}>
              <Td>{item.title}</Td>
              <Td>{item.categorie}</Td>
              <Td>
                <Button
                  colorScheme="teal"
                  size="sm"
                  onClick={(e) => {
                    e.preventDefault();
                    handleChoose(item.title);
                  }}
                >
                  Choose
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default DataTable;

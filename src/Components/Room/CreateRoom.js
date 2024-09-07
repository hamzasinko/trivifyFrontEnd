import React from 'react';
import SearchTable from './SearchTable';
import { useSelector } from 'react-redux';
import { Flex } from '@chakra-ui/react';

function CreateRoom() {
    const quizes = useSelector((state) => state.app.quizes);

    return (
        <Flex justifyContent="center" alignItems="center" height="100vh">
            <SearchTable data={quizes} />
        </Flex>
    );
}

export default CreateRoom;

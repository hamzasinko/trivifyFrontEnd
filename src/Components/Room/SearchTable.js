import { useState } from "react";
import { Input, Box } from "@chakra-ui/react";
import DataTable from "./DataTable";
import React from 'react'

const SearchTable = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    return (
      <Box
        width={{ base: '100%', md: '50%' }} // Responsive width: 100% on small screens, 50% on medium and larger screens
        bg="white"
        p={4}
        borderRadius="md"
        boxShadow="md"
        margin="0 auto"
      >
        <Input
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearch}
          mb={4}
          color={"black"}
          width="100%" // Full width on all screens within the Box
        />
        <DataTable data={data} searchTerm={searchTerm} />
      </Box>
    );
};

export default SearchTable;
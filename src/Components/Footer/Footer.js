import { Flex, Box, Text, Link, Icon } from '@chakra-ui/react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'; // Example icons, import the ones you use

const Footer = () => {
  const logoImage = '/L_logo_onlytext.png';
  return (
    <Flex
      as="footer"
      align="center"
      justify="space-between"
      py="4"
      px={{ base: '4', md: '8' }}
      bg="gray.800"
      color="white"
      position="fixed"
      width="100%"
      bottom="0"
      left="0"
      zIndex="1"
    >
      <Box>
        <Text>&copy; 2024 Your Website Name. All rights reserved.</Text>
      </Box>
      <Box>
        <img src={logoImage} alt="Logo" width="200" />
      </Box>
      <Box>
        <Link href="https://x.com/" mx="2" target="_blank" rel="noopener noreferrer">
          <Icon as={FaTwitter} boxSize="6" />
        </Link>
        <Link href="https://www.facebook.com/" mx="2" target="_blank" rel="noopener noreferrer">
          <Icon as={FaFacebook} boxSize="6" />
        </Link>
        <Link href="https://www.instagram.com/" mx="2" target="_blank" rel="noopener noreferrer">
          <Icon as={FaInstagram} boxSize="6" />
        </Link>
      </Box>
    </Flex>
  );
};

export default Footer;

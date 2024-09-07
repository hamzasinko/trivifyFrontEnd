import React from 'react';
import {
  Box,
  Flex,
  Center,
  Link,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  Text,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  MenuItem
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaUser, FaBars } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../JS/Actions/action';

const Navbar = () => {
  const logoImage = '/M_to_S_logo.png';
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useSelector((state) => state.app.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = (event) => {
    event.preventDefault();
    dispatch(logout());
    navigate('/login');
  };

  return (
    <Box bg="#007BFF" px={4} position="fixed" top="0" left="0" right="0" zIndex="999">
      <Flex h="80px" alignItems="center" justifyContent="space-between">
        {/* Logo and main navigation */}
        <HStack spacing={8} alignItems="center">
          <RouterLink to="/">
            <Box>
              <img src={logoImage} alt="Trivify logo" style={{ height: '100px' }} />
            </Box>
          </RouterLink>
          <HStack
            as="nav"
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
          >
            <Link
              as={RouterLink}
              px={2}
              py={1}
              rounded={'md'}
              _hover={{ textDecoration: 'none', borderBottom: '2px solid white'}}
              to={'/'}
              color="white"
              style={isActive('/')}
            >
              Home
            </Link>
            <Link
              as={RouterLink}
              px={2}
              py={1}
              rounded={'md'}
              _hover={{ textDecoration: 'none', borderBottom: '2px solid white'}}
              to={'/about'}
              color="white"
              style={isActive('/about')}
            >
              About
            </Link>
            <Link
              as={RouterLink}
              px={2}
              py={1}
              rounded={'md'}
              _hover={{ textDecoration: 'none', borderBottom: '2px solid white'}}
              to={'/contact'}
              color="white"
              style={isActive('/contact')}
            >
              Contact
            </Link>
          </HStack>
        </HStack>

        {/* Buttons and user menu */}
        <HStack spacing={4} alignItems="center" display={{ base: 'none', md: 'flex' }}>
          <Button
            as={RouterLink}
            to="/room/create"
            bg="white"
            color="#007BFF"
            _hover={{ bg: 'gray.200' }}
          >
            Create a Room
          </Button>
          <Button
            as={RouterLink}
            to="/quiz/create"
            bg="white"
            color="#007BFF"
            _hover={{ bg: 'gray.200' }}
          >
            Create a Quiz
          </Button>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<FaUser />}
              bg="white"
              _hover={{ bg: 'gray.200' }}
            />
            <MenuList>
              <MenuItem as="div" _hover={{ bgColor: 'white' }}>
                <Box width="100%">
                  <Center>
                    <Text fontWeight="bold" color="#007BFF">{user.username}</Text>
                  </Center>
                </Box>
              </MenuItem>
              <MenuItem as="div" _hover={{ bgColor: 'white' }}>
                <Box width="100%">
                  <Center>
                    <Button
                      variant="outline"
                      bg="white"
                      borderColor="#007BFF"
                      borderWidth="3px"
                      borderRadius="40px"
                      color="#007BFF"
                      _hover={{ bg: '#007BFF', color: 'white' }}
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </Button>
                  </Center>
                </Box>
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>

        {/* Responsive menu button for small screens */}
        <IconButton
          size="md"
          icon={<FaBars style={{ margin: 'auto' }} />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={onOpen}
        />
      </Flex>

      {/* Responsive Drawer for small screens */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Stack p={4} spacing={4}>
            <Link
              as={RouterLink}
              to="/"
              onClick={onClose}
              color="#007BFF"
            >
              Home
            </Link>
            <Link
              as={RouterLink}
              to="/about"
              onClick={onClose}
              color="#007BFF"
            >
              About
            </Link>
            <Link
              as={RouterLink}
              to="/contact"
              onClick={onClose}
              color="#007BFF"
            >
              Contact
            </Link>
            <Button
              as={RouterLink}
              to="/room/1"
              bg="#007BFF"
              color="white"
              _hover={{ bg: 'gray.200' }}
              onClick={onClose}
            >
              Create a Room
            </Button>
            <Button
              as={RouterLink}
              to="/quiz/create"
              bg="#007BFF"
              color="white"
              _hover={{ bg: 'gray.200' }}
              onClick={onClose}
            >
              Create a Quiz
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                bg="#007BFF"
                color="white"
                _hover={{ bg: 'gray.200' }}
              >
                Profile
              </MenuButton>
              <MenuList mx={5} alignItems="center" display={{ md: 'flex' }}>
                <MenuItem as="div" _hover={{ bgColor: 'white' }} onClick={onClose}>
                  <Box width="100%">
                    <Center>
                      <Text fontWeight="bold" color="#007BFF">{user.username}</Text>
                    </Center>
                  </Box>
                </MenuItem>
                <MenuItem as="div" _hover={{ bgColor: 'white' }}>
                  <Box width="100%">
                    <Center>
                      <Button
                        variant="outline"
                        as={RouterLink}
                        to="/login"
                        bg="white"
                        borderColor="#007BFF"
                        borderWidth="3px"
                        borderRadius="40px"
                        color="#007BFF"
                        _hover={{ bg: '#007BFF', color: 'white' }}
                      >
                        Sign Out
                      </Button>
                    </Center>
                  </Box>
                </MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;

// Function to check active link
function isActive(path) {
  return window.location.pathname === path ? { borderBottom: '2px solid yellow', padding: '2px 0px','&:hover': {
                  borderBottomColor: 'white',
                } } : {};
}

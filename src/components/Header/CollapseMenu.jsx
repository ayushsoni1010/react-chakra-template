import React from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Collapse,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { linkDetails } from './__linkDetails';
import { NavLink } from 'react-router-dom';

const CollapseMenu = ({ isOpen, setOpen }) => {
  return (
    <React.Fragment>
      <Collapse in={isOpen}>
        <Box
          display={{ md: 'none', sm: 'flex' }}
          flexDir="column"
          m="5"
          p="5"
          borderRadius="md"
          minH="50vh"
          justifyContent="space-between"
          alignItems="start"
          bg={useColorModeValue('teal.100', 'gray.700')}
        >
          <Stack
            display={{ md: 'none', sm: 'flex' }}
            flexDir="column"
            alignItems="start"
          >
            {linkDetails.map((item, index) => (
              <Button
                key={index}
                as={NavLink}
                variant="ghost"
                size="sm"
                onClick={setOpen}
                colorScheme="teal"
                to={item.link}
                _focus={{ boxShadow: 'outline' }}
              >
                {item.name}
              </Button>
            ))}
          </Stack>
          <ButtonGroup display={{ sm: 'flex' }}>
            <Button
              as="a"
              target="_blank"
              href="https://drive.google.com/file/d/1sFBFE3quWw07F45CJJr5672j4zb-wF9J/view?usp=sharing"
              border="2px"
              variant="outline"
              size="sm"
              onClick={setOpen}
              colorScheme="teal"
              _focus={{ boxShadow: 'outline' }}
            >
              Resume
            </Button>
            <Button
              as="a"
              href="https://calendly.com/ayushsoni1010/"
              target="_blank"
              variant="solid"
              size="sm"
              colorScheme="teal"
              bgGradient="linear(to-r, teal.500, green.400)"
              onClick={setOpen}
              _focus={{ boxShadow: 'outline' }}
            >
              Schedule a Meeting
            </Button>
          </ButtonGroup>
        </Box>
      </Collapse>
    </React.Fragment>
  );
};

export default CollapseMenu;

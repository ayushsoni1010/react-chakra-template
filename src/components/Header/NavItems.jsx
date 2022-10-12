import React from 'react';
import { NavLink } from 'react-router-dom';
import { linkDetails } from './__linkDetails';
import { HStack, Button, ButtonGroup } from '@chakra-ui/react';

const NavItems = () => {
  return (
    <React.Fragment>
      <HStack
        display={{ base: 'flex', md: 'flex', sm: 'none' }}
        flexDir={'row'}
      >
        <ButtonGroup isAttached alignSelf="center">
          {linkDetails.map((item, index) => (
            <Button
              key={index}
              as={NavLink}
              variant={'ghost'}
              size="md"
              colorScheme="teal"
              to={item.link}
              _focus={{ boxShadow: 'outline' }}
            >
              {item.name}
            </Button>
          ))}
        </ButtonGroup>
      </HStack>
    </React.Fragment>
  );
};

export default NavItems;

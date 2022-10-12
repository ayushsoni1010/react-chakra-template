import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import {
  Box,
  Flex,
  Link,
  Stack,
  Button,
  ButtonGroup,
  IconButton,
  Image,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import NavItems from './NavItems';
import CollapseMenu from './CollapseMenu';

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    console.log('changed');
    setOpen(prevState => !prevState);
  };
  return (
    <React.Fragment>
      <Box position="fixed" top="0" zIndex="10" minW="100%">
        <Flex
          backdropFilter="blur(4px)"
          border="none"
          minH="60px"
          py={{ base: 2, md: 3 }}
          px={{ base: 4, md: 7 }}
          alignSelf="center"
        >
          <Stack
            flex={{ base: 1, md: 1 }}
            justify="space-between"
            direction="row"
            align="center"
            cursor="pointer"
          >
            <Link
              as={NavLink}
              to="/"
              textDecoration="none"
              style={{ textDecoration: 'none' }}
            >
              <Image
                src="https://ik.imagekit.io/ayushsoni1010/Logo/logo_QMXL5sBnF.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1665559064546"
                alt="Brand Logo"
                w={50}
                h={50}
              />
            </Link>
          </Stack>
          <NavItems />
          <Stack
            flex={{ base: 1, md: 1 }}
            justify="end"
            direction="row"
            align="center"
            spacing="3"
            mx={{
              base: 0,
            }}
          >
            <ColorModeSwitcher
              justifySelf="flex-end"
              display={{ base: 'none', md: 'inline-flex', sm: 'inline-flex' }}
            />
            <Box display={{ md: 'none', lg: 'none' }}>
              <IconButton
                variant="outline"
                icon={<FiMenu />}
                colorScheme="teal"
                onClick={handleToggle}
                border="2px"
                aria-label={'Hamburger Menu'}
                _focus={{ boxShadow: 'outline' }}
              />
            </Box>
            <ButtonGroup display={{ base: 'flex', md: 'flex', sm: 'none' }}>
              <Button
                as="a"
                target="_blank"
                href="https://drive.google.com/file/d/1sFBFE3quWw07F45CJJr5672j4zb-wF9J/view?usp=sharing"
                border="2px"
                variant="outline"
                size="md"
                colorScheme="teal"
                _focus={{ boxShadow: 'outline' }}
              >
                Resume
              </Button>
              <Button
                colorScheme="teal"
                target="_blank"
                as="a"
                href="https://calendly.com/ayushsoni1010/"
                variant="solid"
                size="md"
                bgGradient="linear(to-r, teal.500, green.400)"
                _focus={{ boxShadow: 'outline' }}
              >
                Schedule a Meeting
              </Button>
            </ButtonGroup>
          </Stack>
        </Flex>
        <CollapseMenu isOpen={isOpen} setOpen={handleToggle} />
      </Box>
    </React.Fragment>
  );
};

export default Header;

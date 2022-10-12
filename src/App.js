import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          {/* <Route path='/about' element={}/> */}
          {/* <Route path='/projects' element={}/> */}
          {/* <Route path='/about' element={}/> */}
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

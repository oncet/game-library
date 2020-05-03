import React from 'react';
import { Container, Toolbar } from '@material-ui/core';
import Header from './Header';
import Body from './Body';

function App() {
  return (
    <Container>
      <Header />
      <Toolbar />
      <Body />
    </Container>
  );
}

export default App;

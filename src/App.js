import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react'
import './App.css';
import ClapForm from './ClapForm.js'

class App extends Component {
  render() {
    return (
      <Container text={ true } textAlign='center' className='main'>
        <Header size='huge' as='h1' color='red'>CLAP &#128079; THAT &#128079;&#127997; </Header>
        <ClapForm />
      </Container>
    );
  }
}

export default App;

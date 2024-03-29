import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react'
import './App.css';
import ClapForm from './ClapForm.js'
import Emoji from './Emoji.js'

class App extends Component {
  render() {
    var random1 = Emoji.random();
    var random2 = Emoji.random();
    return (
      <Container text={ true } textAlign='center' className='main'>
        <Header size='huge' as='h1' color='red'>CLAP {random1} THAT {random2}</Header>
        <ClapForm />
        <h4 className="ui header">
          created by <a href="https://twitter.com/paulfedory" target="_blank">@paulfedory</a>
        </h4>
      </Container>
    );
  }
}

export default App;

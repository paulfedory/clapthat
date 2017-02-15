import React, { Component } from 'react';
import { TextArea, Button } from 'semantic-ui-react'
import Emoji from './Emoji.js'
// import './ClapForm.css';

function clapify(text, emoji) {
  var clapped = text.toUpperCase();
  clapped = clapped.replace(/ /g, " " + emoji + " ");
  clapped = clapped.concat(" " + emoji);
  return clapped;
}

class ClapForm extends Component {
  constructor(props) {
    super(props);
    this.state = {clapping_text: "stop writing boring posts"};
  }

  handleChange(event) {
    this.setState({clapping_text: event.target.value});
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ clapping_text: clapify(this.state.clapping_text, e.currentTarget.innerText) });
  }

  render() {
    return (
      <div>
      <TextArea
        name='clapping_text'
        value={this.state.clapping_text}
        placeholder='stop writing boring posts'
        rows='5'
        onChange={this.handleChange.bind(this)} />
      <Button.Group>
        {Emoji.list().map((x,i) => <Button primary compact={true} size='massive' onClick={ this.handleClick } key={i}>{x}</Button>)}
      </Button.Group>
      </div>
    );
  }
}

export default ClapForm;


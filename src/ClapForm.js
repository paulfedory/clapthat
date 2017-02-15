import React, { Component } from 'react';
import { TextArea, Button, Icon } from 'semantic-ui-react'
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

  handleChange = (e) => {
    this.setState({clapping_text: e.target.value});
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ clapping_text: clapify(this.state.clapping_text, e.currentTarget.innerText) });
  }

  render() {
    return (
      <div className="ui form massive">
        <div className="field">
          <TextArea
            name='clapping_text'
            value={this.state.clapping_text}
            placeholder='stop writing boring posts'
            rows='5'
            onChange={ this.handleChange } />
        </div>
        <div className="field">
          <Button.Group>
            {Emoji.list().map((x,i) => <Button primary compact={true} size='massive' onClick={ this.handleClick } key={i}>{x}</Button>)}
          </Button.Group>
        </div>
        <div className="field">
          <Button icon="clipboard" content='Copy to Clipboard' labelPosition='left' />
          <Button icon="remove" content='Reset' labelPosition='left' />
        </div>
        <div className="field">
          <Button color='facebook'>
            <Icon name='facebook' /> Post
          </Button>
          <Button color='twitter'>
            <Icon name='twitter' /> Tweet
          </Button>
        </div>
      </div>
    );
  }
}

export default ClapForm;


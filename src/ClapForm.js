import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react'
import ClapTextArea from './ClapTextArea.js'
import EmojiButtonList from './EmojiButtonList.js'
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

  onTextChange = (new_text) => {
    this.setState({clapping_text: new_text});
  }

  addClaps = (emoji) => {
    this.setState({ clapping_text: clapify(this.state.clapping_text, emoji) });
  }

  render() {
    return (
      <div className="ui form massive">
        <ClapTextArea onTextChange={ this.onTextChange }
                      value={ this.state.clapping_text } />
        <EmojiButtonList onClick={ this.addClaps } />
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


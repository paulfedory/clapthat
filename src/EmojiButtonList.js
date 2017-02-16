import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import Emoji from './Emoji.js'

class EmojiButtonList extends Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.onClick(e.currentTarget.innerText);
  }

  render() {
    return (
      <div className="field">
        <Button.Group>
          { Emoji.list().map((x,i) =>
            <Button
              primary
              compact={true}
              size='massive'
              onClick={ this.handleClick }
              key={i}>
              {x}
            </Button>) }
        </Button.Group>
      </div>

    );
  }
}

export default EmojiButtonList;

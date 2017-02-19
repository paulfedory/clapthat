import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

class UtilityButtonList extends Component {
  handleClipboardClick = (e) => {
    e.preventDefault();
    this.props.onCopyToClipboard();
  }

  handleRemoveClick = (e) => {
    e.preventDefault();
    this.props.onRemove();
  }

  handleTweetClick = (e) => {
    e.preventDefault();
    this.props.onTweet();
  }

  render() {
    return (
      <div className="field">
        <Button
          onClick={ this.handleTweetClick }
          icon="twitter"
          content="Tweet That"
          labelPosition="left" />
        <Button
          onClick={ this.handleClipboardClick }
          icon="clipboard"
          content="Copy That"
          labelPosition="left" />
        <Button
          onClick={ this.handleRemoveClick }
          icon="remove"
          content="Reset That"
          labelPosition="left" />
      </div>
    );
  }
}

export default UtilityButtonList;

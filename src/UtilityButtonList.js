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

  render() {
    return (
      <div className="field">
        <Button
          onClick={ this.handleClipboardClick }
          icon="clipboard"
          content="Copy to Clipboard"
          labelPosition="left" />
        <Button
          onClick={ this.handleRemoveClick }
          icon="remove"
          content="Reset"
          labelPosition="left" />
      </div>
    );
  }
}

export default UtilityButtonList;

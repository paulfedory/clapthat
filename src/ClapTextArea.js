import React, { Component } from 'react';
import { TextArea } from 'semantic-ui-react'

class ClapTextArea extends Component {
  handleChange = (e) => {
    this.props.onTextChange(e.target.value);
  }

  render() {
    return (
      <div className="field">
        <TextArea
          name='clapping_text'
          value={ this.props.value }
          placeholder='delete your boring tweets'
          rows='5'
          onChange={ this.handleChange } />
      </div>
    );
  }
}

export default ClapTextArea;

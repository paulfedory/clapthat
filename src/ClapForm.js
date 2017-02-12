import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
// import './ClapForm.css';

function clapify(text) {
  var clapped = text.toUpperCase();
  clapped = clapped.replace(/ /g, " \uD83D\uDC4F " );
  clapped = clapped.concat(" \uD83D\uDC4F");
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

  handleSubmit = (e, { formData }) => {
    e.preventDefault();
    formData.clapping_text = clapify(formData.clapping_text);
    this.setState( formData );
  }

  render() {
    return (
      <Form size='massive' onSubmit={ this.handleSubmit }>
        <Form.TextArea
          name='clapping_text'
          value={this.state.clapping_text}
          placeholder='stop writing boring posts'
          rows='3'
          onChange={this.handleChange.bind(this)} />
        <Form.Button primary size='massive'>CLAP &#128079;</Form.Button>
      </Form>
    );
  }
}

export default ClapForm;


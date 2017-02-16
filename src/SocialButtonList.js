import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react'

class SocialButtonList extends Component {
  handlePostClick = (e) => {
    e.preventDefault();
    this.props.onPost();
  }

  handleTweetClick = (e) => {
    e.preventDefault();
    this.props.onTweet();
  }

  render() {
    return (
      <div className="field">
        <Button color='facebook' onClick={ this.handlePostClick }>
          <Icon name='facebook' /> Post That
        </Button>
        <Button color='twitter' onClick={ this.handleTweetClick }>
          <Icon name='twitter' /> Tweet That
        </Button>
      </div>
    );
  }
}

export default SocialButtonList;

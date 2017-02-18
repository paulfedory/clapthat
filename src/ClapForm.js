import React, { Component } from 'react';
import ClapTextArea from './ClapTextArea.js'
import EmojiButtonList from './EmojiButtonList.js'
import UtilityButtonList from './UtilityButtonList.js'
import SocialButtonList from './SocialButtonList.js'
import copy from 'copy-to-clipboard'

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

  removeText = () => {
    this.onTextChange("");
  }

  copyToClipboard = () => {
    copy(this.state.clapping_text);
  }

  tweet = () => {
    var options = 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,';
    var url = encodeURI('http://twitter.com/intent/tweet?text=' + this.state.clapping_text);
    console.log(url);
    window.open(url, '', options+'height=254,width=600');
  }

  post = () => {
    var options = 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,';
    var url = encodeURI('https://www.facebook.com/sharer/sharer.php?u=https://clapthat.com&t=' + this.state.clapping_text);
    console.log(url);
    window.open(url, '', options+'height=300,width=600');
  }

  render() {
    return (
      <div className="ui form massive">
        <ClapTextArea onTextChange={ this.onTextChange }
                      value={ this.state.clapping_text } />
        <EmojiButtonList onClick={ this.addClaps } />
        <UtilityButtonList onCopyToClipboard={ this.copyToClipboard }
                           onRemove={ this.removeText } />
        <SocialButtonList onPost={ this.post } onTweet={ this.tweet } />
      </div>
    );
  }
}

export default ClapForm;


import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets'

class App extends React.Component {
  render() {
    const allTweets = tweets.tweets;
    console.log(allTweets);
    return (
      <div>
         <Tweets className = 'container' test={allTweets}/>
      </div>
    );
  }
}

class Tweets extends React.Component {
  render () {
    let tweetList = this.props.test.map(tweet => {
      return <div>
        <li>
          <p>{tweet.user.screen_name}</p>
          <p>{tweet.text}</p>
          <p>{tweet.created_at}</p>
        </li>
      </div>
    });
    return (
      <div className="tweets">{tweetList}</div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );

console.log("tweet react");

import React from 'react';
import profilePic from '../assets/profile-pic.jpeg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <p style={{ maxWidth: 310 }}>
          Blog by Ankit. <br />
          I&nbsp;write feelings into words.
        </p>
      </div>
    );
  }
}

export default Bio;

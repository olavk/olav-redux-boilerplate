import React, {Component} from 'react';
import {Link} from 'react-router';

export default class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <Link to="/">root</Link>
      </div>
    );
  }
}

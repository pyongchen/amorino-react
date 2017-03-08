import React from 'react';
import Head from './components/Head';

class Init extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
      <Head/>
      <div id="main">
        {this.props.children}
      </div>
    </div>
  }
}

export default Init
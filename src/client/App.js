import './app.css';
import React, { Component } from 'react';
class App extends Component {
  constructor(props){
    super(props)
  }
    render() {
        return (
          <div>
            <div>
              <img src="../../public/header.png" />
            </div>
            {this.props.children}
            <div>
              footer
            </div>
          </div>

        );
    }
}

export default App;

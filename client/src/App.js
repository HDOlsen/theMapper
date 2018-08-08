import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu'
import Footer from './components/Footer'

class App extends Component {

  state = {
    response: ''
  }
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err))
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  render() {
    return (
      <div>
        <Menu/>
        {this.props.children}
        <p>
          {this.state.response}
        </p>
        <Footer/>
      </div>
    );
  }
}

export default App;

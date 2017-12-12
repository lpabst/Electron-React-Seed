import React, { Component } from 'react';
import router from './router';
import { Link } from 'react-router-dom';
import './reset.css';
import './App.css';


class App extends Component {

  componentDidMount(){
    //document.getElementById('home').click();
  }

  scrollUp(){
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  render() {
    return (
      <div className="App">

        { router }

      </div>
    );
  }
}


export default App;

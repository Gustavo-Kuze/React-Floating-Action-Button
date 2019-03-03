import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Container, Link } from './FAB/FloatingActionButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Container>
            <Link tooltip={"Ação 0"} icon="fas fa-plus" href="/baaah" styles={{backgroundColor: "#3f51b5", color: "#FAFAFA"}}/>
            <Link tooltip={"Ação 0"} icon="fas fa-plus" href="/baaah" />
            <Button tooltip={"Ação 0"} icon="fas fa-plus" rotate={true}
            />
          </Container>
        </header>
      </div>
    );
  }
}

export default App;

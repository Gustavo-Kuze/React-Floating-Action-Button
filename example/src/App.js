import React, { useState } from 'react'
import './App.css';

import { Button, Container, Link, darkColors, lightColors } from 'react-floating-action-button'
import 'react-floating-action-button/dist/index.css'

const App = () => {

  const [isOpen, setIsOpen] = useState(false);

  return <div className="App">
    <header className="App-header">
      <h1>Welcome to React-FAB!</h1>
      <Container isOpen={isOpen}
        onMouseLeave={() => setIsOpen(false)}
      >
        <Link
          tooltip="Add note"
          icon="fas fa-plus" href="/baaah"
          styles={{ backgroundColor: darkColors.lightBlue, color: lightColors.white }} />
        <Link
          tooltip="Back to top"
          icon="fas fa-arrow-up" href="/baaah"
          styles={{ backgroundColor: darkColors.yellow, color: lightColors.white }}
        />
        <Button
          tooltip="Close"
          rotate
          icon="fa fa-plus fa-2x"
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsOpen(true)}
        />
      </Container>
    </header>
  </div>
}

export default App

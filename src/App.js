import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'

import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavbarComponent from './components/Navbar'

function App() {
  return (
    <Container>
      <NavbarComponent />
    </Container>
  )
}

export default App

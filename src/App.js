import React from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Album from './components/Album'
import Navigation from './components/Navigation'

function App() {
  return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/album/:id" component={Album}/>
          </Switch>
        </div>
      </BrowserRouter>
  )
}

export default App

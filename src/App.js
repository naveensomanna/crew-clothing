import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomeScreen from './Pages/homeScreen/HomeScreen'
import Shop from './Pages/shop/Shop'
import Header from './Components/header/Header'
import './App.css'

function App () {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomeScreen} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  )
}

export default App

import React from 'react'
import { HashRouter, Route, Redirect } from 'react-router-dom'

//Custom Components
import Home from './pages/Home'
import MainNav from './components/MainNav'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

//Custom CSS
import './App.css'

const App = () => {
  return (
    <HashRouter>
      <div className='site-bground'>
        <MainNav />
        <div id='site-container'>
          {/* <Switch> */}
          <Route path='/' exact>
            <Home></Home>
          </Route>
          <Route path='/About'>
            <About></About>
          </Route>
          <Route path='/Services'>
            <Services></Services>
          </Route>
          <Route path='/Contact'>
            <Contact></Contact>
          </Route>

          <Redirect to='/' />
          {/* </Switch> */}
        </div>
      </div>
    </HashRouter>
  )
}

export default App

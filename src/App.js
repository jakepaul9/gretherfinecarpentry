import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

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
    <Router>
      <div className='site-bground'>
        <MainNav />
        <div id='site-container'>
          {/* <Switch> */}
          <Route path='/' exact>
            <Home></Home>
          </Route>
          <Route path='/About' exact>
            <About></About>
          </Route>
          <Route path='/Services' exact>
            <Services></Services>
          </Route>
          <Route path='/Contact' exact>
            <Contact></Contact>
          </Route>

          <Redirect to='/' />
          {/* </Switch> */}
        </div>
      </div>
    </Router>
  )
}

export default App

import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

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
          <Route path='/' exact render={(props) => <Home {...props} />} />
          <Route path='/about' render={(props) => <About {...props} />} />
          <Route path='/services' render={(props) => <Services {...props} />} />
          <Route path='/contact' render={(props) => <Contact {...props} />} />
        </div>
      </div>
    </HashRouter>
  )
}

export default App

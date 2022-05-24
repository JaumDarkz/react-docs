import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './Home'
import Contact from './Contact'
import Business from './Business'
import Navbar from './Navbar'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='contact'>
            <Contact />
          </Route>
          <Route path='business'>
            <Business />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import liverpool from './components/club-liverpool.jsx'
import arsenal from './components/club-arsenal.jsx'
import manchester from './components/club-manchester.jsx'

const Post = () => (
  <Router>
    <div className="middle-layout1">
      <div className="blog-content">
        <Route exact path="/" component={liverpool}/>
        <Route path="/arsenal" component={arsenal}/>
        <Route path="/manchester" component={manchester}/>
      </div>
      <div className="nav-content">
        <div className="nav1inner">
          <div className="link"></div>
            <Link className="menu-link" to="/">Liverpool</Link>
        </div>
        <div className="nav1inner">
          <div className="link"></div>
            <Link to="/arsenal">Arsenal</Link>
        </div>
        <div className="nav1inner">
          <div className="link"></div>
            <Link to="/manchester">Manchester United</Link>
        </div>
      </div>
    </div>
  </Router>
)

export default Post

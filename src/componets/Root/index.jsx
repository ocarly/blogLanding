import {Link, Outlet}from "react-router-dom"
import "./nav.css"

const Root = () => {
    return (
      <div className = "navWrapper">
  <ul className="nav">
      <li>
          <Link to="/">Landing Page</Link>
      </li>
      <li>
          <Link to="/blog">Blog Page</Link>
      </li>
      <li>
          <Link to="/game">Game Page</Link>
      </li>
      <li>
          <Link to="/resource">Resource Page</Link>
      </li>
  
  </ul>
  <Outlet/>
  
      </div>
  )
}

export default Root;

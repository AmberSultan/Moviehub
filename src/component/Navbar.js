import React from 'react'
import { Link } from 'react-router-dom';
export default function navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand mx-3" to="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ">
      <Link className="nav-item nav-link active  " to="/">{props.home}</Link>
      <Link className="nav-item nav-link active  " to="/top-rated">{props.top}</Link>
      <Link className="nav-item nav-link active" to="/about" >{props.about}</Link>
    </div>
  </div>
</nav>
  </div>

  )
}

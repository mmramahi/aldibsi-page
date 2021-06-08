import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img
          src="Aldibsi Logo11-08.png"
          alt="aldibsi company logo"
          width="80"
        />
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  )
}

export default Navbar

import { graphql, Link } from "gatsby"
import * as React from "react"

export default function Nav() {
  return (
    <div>
      <li
        className="list-none flex   font-black w-screen
      bg-white items-end justify-around text-black p-0.5 h-6 text-sm sm:text-2xl sm:h-24 z-50"
      >
        <Link to="/">Home</Link>
        <Link to="/why-us">Why us</Link>
        <Link to="/about">About us</Link>
        <Link to="/contact">Contact us</Link>
      </li>
    </div>
  )
}

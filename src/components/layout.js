/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Footer from "./footer"
import Nav from "./nav"
import Header from "./header"

export default function Layout({ children }) {
  return (
    <>
      <div className="Layout w-screen h-screen box-border font-Nunito text-2xl font-extralight">
        <Nav></Nav>
        <Header></Header>

        {children}

        <Footer></Footer>
      </div>
    </>
  )
}

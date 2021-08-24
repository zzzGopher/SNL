import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "@fontsource/nunito"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <div className="flex flex-col sm:grid sm:p-12 sm:auto-rows-auto sm:w-screen sm:mt-16 sm:items-baseline sm:grid-cols-2 p-4 justify-center justify-items-center w-screen mt-2 sm:gap-4 ">
      <div className="sm:max-w-2xl sm:rounded sm:overflow-hidden sm:shadow-lg z-50 sm:bg-white ">
        <div className="h-80 z-50 p-4 flex sm:flex-none justify-center ">
          <StaticImage
            src="../images/Spray.jpg"
            className="shadow-xl rounded w-80 "
          />
        </div>

        <p className="p-4 z-50 sm:text-black text-white text-lg sm:text-2xl border-b sm:border-none border-gray-400 text-center font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate.
        </p>
      </div>
      <div className="sm:max-w-2xl sm:rounded sm:overflow-hidden sm:shadow-lg z-50  sm:bg-white ">
        <div className="z-50 h-80 p-4 flex justify-center sm:flex-none">
          <StaticImage
            src="../images/Spray2.jpg"
            alt="picture of spray foam being installed"
            className="shadow-xl rounded w-80"
          />
        </div>
        <p className="z-50 p-4  text-lg sm:text-2xl text-center text-white font-bold sm:text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh nisl
          condimentum id venenatis a condimentum vitae sapien. Tristique nulla
          aliquet enim tortor. Lacus suspendisse faucibus interdum posuere lorem
          ipsum dolor sit amet.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage

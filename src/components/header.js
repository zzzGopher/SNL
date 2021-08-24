import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Header() {
  return (
    <>
      <div
        className="self-center  flex w-screen h-80 sm:h-1/4 justify-center items-center sm:gap-36 testing z-50
         "
      >
        <div className=" justify-center flex z-50">
          <StaticImage
            src="../images/taco.svg"
            alt="Logo image"
            className="w-40 h-40 "
          />
        </div>
        <h1 className="sm:text-6xl text-3xl text-white font-bold p-4 z-50">
          Premium Building <div className="text-blue-300 z-50">Insulation</div>
        </h1>
        <div className="flex mt-32 mr-10 sm:mr-0">
          <StaticImage
            src="../images/location.png"
            className="sm:w-12 sm:h-16 w-6 h-8 mr-2"
          ></StaticImage>
          <h2 className="text-white self-end hover:underline text-base sm:text-xl">
            Location
          </h2>
        </div>
      </div>
    </>
  )
}

// a hoagie menu item
// *********************************

import { Image } from "@storyofams/storyblok-toolkit"
import Link from "next/link"
import Icon from "../Icon"

// import * as React from "react"

const Hoagie = ({ blok: hoagie }) => {
  // console.log("hoagie", hoagie.link)

  const { name, dressing, description, link, image, type } = hoagie

  const reversed = false
  const contentStyles = reversed ? "lg:col-start-2" : ""

  const imageWrapperStyles = reversed ? "lg:left-0" : "lg:right-0"
  const imageStyles = reversed ? "right-0" : "left-0"

  return (
    <li className="relative full-width">
      {/* IMAGE */}
      <div className={`lg:absolute lg:top-20 ${imageWrapperStyles} lg:w-1/2`}>
        <div
          className={`lg:absolute ${imageStyles} w-[1200px] max-w-[100vw] px-10 lg:px-0`}
        >
          <Image
            className=""
            src={image?.filename}
            height="100%"
            width="100%"
            fluid={1200}
            focus={image?.focus}
          />
        </div>
      </div>
      {/* END IMAGE */}

      {/* CONTENT */}
      <div className="contentGrid relative pt-12 pb-16 px-4 sm:pt-32 sm:px-6 lg:px-10 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2 lg:min-h-[400px]">
        <div className={`${contentStyles} lg:flex lg:items-center lg:pb-12`}>
          <div className="text-base max-w-prose lg:max-w-lg px-6 lg:px-0 space-y-8">
            <div>
              <h2 className="mt-2 text-3xl leading-8 tracking-tight text-gray-900 sm:text-4xl">
                <span className="font-bold">{name}</span> Hoagie
              </h2>
              <p className="leading-6 font-semibold tracking-wide uppercase mt-3">
                with Marianna's{" "}
                <span className="text-accent-500">
                  {dressing == "italian"
                    ? "Italian Dressinng"
                    : "Sweet & Sassy Mayo"}
                </span>
              </p>
            </div>

            <p className="prose prose-xl prose-stone opacity-80  lg:max-w-lg">
              {description}
            </p>
            {link.cached_url != "" && (
              <div className="inline-grid">
                <Link href={`/${link.cached_url}`}>
                  <a className="btn btn-accent">
                    <Icon
                      name={type}
                      height="1.5em"
                      title="icon"
                      className="mr-3"
                    />
                    Details
                  </a>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* END CONTENT */}
    </li>
  )
}

export default Hoagie

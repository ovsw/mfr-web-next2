// a one-off Menu Teaser Component

// *********************************
// bloks: heading, intro, content_1, content_2
// images: image_1, image_2

import * as React from "react"
import { blockIterator } from "../../utils/blockIterator"
import { Image } from "@storyofams/storyblok-toolkit"

import { SectionThemeContext } from "./section"

const RowMenuTeaserOneOff = ({ blok: rowMenuTeaserOneOff }) => {
  // console.log("two column rowCta component", rowMenuTeaserOneOff)

  const { heading, intro, content_1, content_2, image_1, image_2 } =
    rowMenuTeaserOneOff

  const sectionTheme = React.useContext(SectionThemeContext)
  const textStyles = sectionTheme.bgValue == "dark" ? "text-white" : ""

  return (
    <div className={`${textStyles}  lg:pb-60`}>
      <div className="relative z-30 space-y-10">
        {blockIterator(heading)}
        <div className="max-w-3xl">{blockIterator(intro)}</div>
      </div>

      {/* ROW WRAPPER */}
      <div className="relative full-width pt-14 lg:pt-32">
        {/* HOAGIE IMAGE */}
        <div
          className="
            lg:absolute lg:-top-40 lg:w-1/2
            lg:right-0
            "
        >
          <div
            className="
            w-full lg:w-[1717px]
            object-cover
            max-w-[100vw]
          "
          >
            <Image
              className=""
              src={image_1?.filename}
              height="100%"
              width="100%"
              fluid={[1717, 1087]}
              focus={image_1?.focus}
            />
            {/* {console.log("image?.focus}", image?.focus)} */}
          </div>
        </div>
        {/* END IMAGE */}

        {/* CONTENT: container that turns to a 2-col grid on lg*/}
        <div
          className="
          pt-12 pb-16 px-4
          sm:pt-16 sm:px-6
          lg:px-8 lg:max-w-7xl lg:mx-auto
          lg:grid lg:grid-cols-2
        "
        >
          {/* only thios column is used to place the text content (the one below)
          while the image is absolutely positioned to the parent of this elemenmt */}
          <div className="lg:pr-8">
            <div
              className="
              text-base max-w-prose mx-auto lg:max-w-lg space-y-10
              lg:mr-auto lg:ml-0
              z-30 relative
              "
            >
              {blockIterator(content_1)}
            </div>
          </div>
        </div>
        {/* END CONTENT */}
      </div>

      {/* ************* */}
      {/* PIZZA */}
      {/* ROW WRAPPER */}
      <div className="relative full-width lg:pt-60">
        {/* CONTENT WRAPPER: container that turns to a 2-col grid on lg*/}
        <div
          className="
          pt-12 pb-16 px-4
          sm:pt-16 sm:px-6
          lg:px-8 lg:max-w-7xl lg:mx-auto
          lg:grid lg:grid-cols-2
          grid-flow-row-dense
          lg:py-40 
        "
        >
          {/* PIZZA IMAGE COLUMN*/}
          <div
            className="
            lg:col-start-1 lg:-top-40 
            lg:left-0
            relative
            z-0
            "
          >
            <div
              className="
            w-full lg:w-[1167px]
            object-cover
            lg:absolute
            lg:right-0
            lg:-top-60
            z-0
            max-w-[100vw] px-10 lg:px-0
          "
            >
              <Image
                className=""
                src={image_2?.filename}
                height="100%"
                width="100%"
                fluid={[1167, 1158]}
                focus={image_2?.focus}
              />
            </div>
          </div>
          {/* END IMAGE */}

          {/* TEXT CONTENT COLUMN */}
          {/* only thios column is used to place the text content (the one below)
          while the image is absolutely positioned to the parent of this elemenmt */}
          {/* DIFF */}
          <div className="lg:col-start-2 lg:pl-8">
            <div
              className="
              text-base max-w-prose mx-auto lg:max-w-lg space-y-10
              lg:ml-auto lg:mr-0
              "
            >
              {blockIterator(content_2)}
            </div>
          </div>
        </div>
        {/* END CONTENT */}
      </div>
    </div>
  )
}

export default RowMenuTeaserOneOff

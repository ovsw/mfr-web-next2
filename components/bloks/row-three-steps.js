// a three column steps component

// *********************************
// bloks: step

import * as React from "react"
import RichTextRenderer from "../richTextRenderer"
import { Image } from "@storyofams/storyblok-toolkit"

import { SectionThemeContext } from "./section"

// svgs
import DottedPathSteps from "../svg/dotted-path-steps"

const RowThreeSteps = ({ blok: row }) => {
  // console.log("two column row component", row)

  const sectionTheme = React.useContext(SectionThemeContext)
  const textStyles = sectionTheme.bgValue == "dark" ? "text-white" : ""

  return (
    <div className={textStyles}>
      {/* <h2>This is a thre column row</h2> */}
      <div className="STEPS-ROW-WRAPPER sm:flex sm:flex-col md:flex-row space-y-10 sm:space-y-14 md:space-y-0 md:space-x-5 lg:space-x-20 sm:mb-28 relative z-30">
        {/* ITEM */}
        {row.steps.map((step, i) => {
          return (
            <div className="w-full md:w-1/3" key={i}>
              <div className="hidden w-[80px] md:block md:w-[160px] mx-auto pb-8">
                <Image src={step.image?.filename} width="200" />
              </div>

              <div className="">
                <h3 className="text-3xl flex items-start">
                  <span
                    className="bg-accent text-white rounded-full 
                    w-10 h-10 
                    text-center text-xl  mr-4
                    flex justify-center items-center"
                  >
                    {i + 1}
                  </span>

                  <span className="inline-block py-1 text-2xl lg:font-semibold">
                    {step.title}
                  </span>
                </h3>
                <div className="pl-8 pt-2 custom-list-bullets !text-base md:text-lg">
                  <RichTextRenderer data={step.description} className="" />
                </div>
              </div>
            </div>
          )
        })}
        {/* END ITEM */}
      </div>

      {/* dotted path */}
      <DottedPathSteps className="hidden md:block w-full absolute top-40 xl:top-52 h-32 xl:left-0" />
    </div>
  )
}

export default RowThreeSteps

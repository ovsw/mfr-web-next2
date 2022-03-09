// a heading group for main section headings

// *********************************
// strings: "heading_title"
// rich text: "intro_text"

import * as React from "react"
import { SectionThemeContext } from "./section"
import RichTextRenderer from "../richTextRenderer"

const PageHeading = ({ blok: pageHeading }) => {
  // console.log("pageHeading component", pageHeading)
  const { heading_title, intro_text } = pageHeading

  // dynamic styles based on section theme
  const sectionTheme = React.useContext(SectionThemeContext)
  const rootStyles = `${
    sectionTheme.bgValue == "dark" ? "text-white" : "text-theme-primary"
  }`

  const introTextColorsFromBgValue = {
    light: "text-gray-600",
    dark: "text-gray-200",
  }

  return (
    <div className={`text-center z-10 relative`}>
      <h1>
        <span
          className={` ${rootStyles}
          block
          mt-5 mb-10 
          
          text-[46px] leading-none
          md:text-[61px] 
          font-bold
          
          ${rootStyles}
          `}
        >
          {heading_title}
        </span>
      </h1>
      {intro_text && (
        <div
          className={`prose prose-xl mx-auto ${
            introTextColorsFromBgValue[sectionTheme.bgValue]
          }`}
        >
          <RichTextRenderer data={intro_text} />
        </div>
      )}
    </div>
  )
}

export default PageHeading

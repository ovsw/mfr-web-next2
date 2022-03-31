// a heading group for main section headings

// *********************************
// strings: "eyebrow", "title"

import * as React from "react"
import { SectionThemeContext } from "./section"

const MainHeadingGroup = ({ blok: mainHeadingGroup }) => {
  // console.log("MainHeadingGroup component", mainHeadingGroup)
  const { eyebrow, title, anchor_id, heading_level } = mainHeadingGroup

  // dynamic styles based on section theme
  const sectionTheme = React.useContext(SectionThemeContext)
  const rootStyles = `${
    sectionTheme.bgValue == "dark" ? "text-white" : "text-theme-primary"
  }`

  const eyebrowColorsFromBgValue = {
    light: "text-theme-accent",
    dark: "text-theme-offWhite",
  }

  const HeadingLevel = heading_level || "h2"

  return (
    <div className={rootStyles}>
      {anchor_id && <span id={anchor_id}></span>}
      <HeadingLevel>
        {eyebrow && (
          <span
            className={`eyebrow leading-none inline-block -ml-px ${
              eyebrowColorsFromBgValue[sectionTheme.bgValue]
            }`}
          >
            {eyebrow}
          </span>
        )}
        {""}
        <span
          className={`block sm:mb-10  md:pt-0 md:mb-10  text-[46px] leading-none md:text-[61px] font-bold
          ${rootStyles}
          `}
        >
          {title}
        </span>
      </HeadingLevel>
    </div>
  )
}

export default MainHeadingGroup

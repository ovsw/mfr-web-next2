// a heading component

// *********************************
// text: "title"
// text: "level" -  what level should the heading be?

import * as React from "react"
import { SectionThemeContext } from "./section"
// import { string_to_slug } from "../../lib/utils"

const headingLevelStyles = {
  h1: "text-5xl",
  h2: "text-3xl",
  h3: "text-2xl",
  h4: "text-lg",
}

const Heading = ({ blok: heading }) => {
  const HeadingLevel = heading.level || "h2"
  const HeadingStyle = heading.style || "h2"
  // console.log("heading component", heading.title, headingLevelStyles[HeadingLevel]);

  // dynamic styles based on section theme
  const sectionTheme = React.useContext(SectionThemeContext)
  const rootStyles = `${
    sectionTheme.bgValue == "dark" ? "text-white" : "text-theme-primary"
  }`

  return (
    <HeadingLevel
      className={`${headingLevelStyles[HeadingStyle]} ${rootStyles} font-bold`}
    >
      {heading.anchor_id && <span id={heading.anchor_id}></span>}
      {heading.title}
    </HeadingLevel>
  )
}

export default Heading

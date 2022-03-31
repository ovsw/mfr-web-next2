// a basic rich text component

// *********************************
// rich-text: "text"

import * as React from "react"
import RichTextRenderer from "../richTextRenderer"
import { SectionThemeContext } from "./section"
import Icon from "../Icon"

const FeatureGroup = ({ blok: featureGroup }) => {
  const sectionTheme = React.useContext(SectionThemeContext)

  const {
    text,
    heading,
    heading_level = "h2",
    heading_style = "h2",
    icon,
  } = featureGroup

  const HeadingLevel = heading_level || "h2"
  const HeadingStyle = heading_level || "h2"

  const headingLevelStyles = {
    h1: "text-5xl",
    h2: "text-3xl",
    h3: "text-2xl",
    h4: "text-lg",
  }

  const rootStyles =
    sectionTheme != undefined
      ? `${
          sectionTheme.bgValue == "dark" ? "text-neutral-300" : "text-dark-body"
        }`
      : ""

  const headingStyles =
    sectionTheme != undefined
      ? `${
          sectionTheme.bgValue == "dark"
            ? "text-stone-200"
            : "text-primary-500 "
        }`
      : ""

  return (
    <div className="${rootStyles} space-y-3">
      <HeadingLevel
        className={`${headingLevelStyles[HeadingStyle]} ${headingStyles} font-bold flex items-center`}
      >
        <Icon name={icon} title="icon" className="mr-4 " />
        {heading}
      </HeadingLevel>
      <div className={`prose prose-stone prose-xl opacity-80 ${rootStyles}`}>
        <RichTextRenderer data={text} />
      </div>
    </div>
  )
}

export default FeatureGroup

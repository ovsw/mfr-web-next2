// a basic rich text component

// *********************************
// rich-text: "text"

import * as React from "react"
import RichTextRenderer from "../richTextRenderer"
import { SectionThemeContext } from "./section"

const RichTextBasic = ({ blok: richTextBasic }) => {
  // console.log("rich text simple", richTextBasic)

  const sectionTheme = React.useContext(SectionThemeContext)

  const rootStyles =
    sectionTheme != undefined
      ? `${
          sectionTheme.bgValue == "dark" ? "text-neutral-300" : "text-dark-body"
        }`
      : ""

  return (
    <div
      className={`prose prose-neutral prose-base xl:prose-xl opacity-80  ${rootStyles} mx-auto`}
    >
      <RichTextRenderer data={richTextBasic.text} />
    </div>
  )
}

export default RichTextBasic

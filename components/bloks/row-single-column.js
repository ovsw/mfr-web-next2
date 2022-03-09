// a single column row component

// *********************************
// bloks: "content"

import * as React from "react"
import { blockIterator } from "../../utils/blockIterator"

import { SectionThemeContext } from "./section"

const RowSingleColumn = ({ blok: row }) => {
  // console.log("two column row component", row)

  const sectionTheme = React.useContext(SectionThemeContext)
  const textStyles = sectionTheme.bgValue == "dark" ? "text-white" : ""

  return (
    <div className={`${textStyles} space-y-20`}>
      {/* <h2>This is a two column row</h2> */}
      {blockIterator(row.content)}
    </div>
  )
}

export default RowSingleColumn

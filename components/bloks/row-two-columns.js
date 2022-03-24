// a two column row component

// *********************************
// bloks: "column_1" and "column_2"

import * as React from "react"
import { blockIterator } from "../../utils/blockIterator"

import { SectionThemeContext } from "./section"

const Row = ({ blok: row }) => {
  // console.log("two column row component", row)

  const sectionTheme = React.useContext(SectionThemeContext)
  const textStyles = sectionTheme.bgValue == "dark" ? "text-white" : ""

  return (
    <div className={textStyles}>
      {/* <h2>This is a two column row</h2> */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-14">
        <div className="w-full md:w-1/2 space-y-6">
          {blockIterator(row.column_1)}
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          {blockIterator(row.column_2)}
        </div>
      </div>
    </div>
  )
}

export default Row

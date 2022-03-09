// a basic rich text component

// *********************************
// rich-text: "text"

import * as React from "react"
// import RichTextRenderer from "@/components/richTextRenderer"
import { SectionThemeContext } from "./section"

const CustomTable = ({ blok: customTable }) => {
  const sectionTheme = React.useContext(SectionThemeContext)

  const { table } = customTable
  const { thead = [], tbody = [] } = table

  const rootStyles =
    sectionTheme != undefined
      ? `${
          sectionTheme.bgValue == "dark" ? "text-neutral-300" : "text-dark-body"
        }`
      : ""

  return (
    <div className={`${rootStyles} my-16`}>
      {table == "" && (
        <p className="text-2xl font-bold text-accent border p-20">
          empty table
        </p>
      )}
      {table != "" && (
        <table
          className="custom-table bg-white border-collapse text-lg text-stone-800
        
        mb-3 
        table-auto font-systemsans
        "
        >
          <thead>
            <tr>
              {thead.map(({ value }, i) => {
                return (
                  <th key={i}>
                    <span>{value}</span>
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {tbody.map((row, j) => {
              return (
                <tr key={j}>
                  {row.body.map((cell, k) => {
                    return <td key={k}>{cell.value}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
          {/* <tfoot>
          <tr>
          <td colspan="2" className="text-sm !border-b-0">
          <p className="py-2 px-1 max-w-sm">
          The % Daily Value tells you how much a nutrient in a serving of
          food contributes to a daily diet. 2,000 calories a day is used
          for general nutrition advice.
          </p>
          </td>
          </tr>
        </tfoot> */}
        </table>
      )}
    </div>
  )
}

export default CustomTable

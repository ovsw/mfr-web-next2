// a two column row component

// *********************************
// bloks: "column_1", "column_2" and "column_2"
// boolean: is_flexible => determines if the flex columns width should be dynamic (determined by content)

import * as React from "react";
import { blockIterator } from "../../utils/blockIterator";

import { SectionThemeContext } from "./section";

const Row = ({ blok: row }) => {
  // console.log("two column row component", row)

  const sectionTheme = React.useContext(SectionThemeContext);
  const textStyles = sectionTheme.bgValue == "dark" ? "text-white" : "";

  return (
    <div className={textStyles}>
      {/* <h2>This is a thre column row</h2> */}
      <div className="md:flex gap-8">
        <div className="w-full md:w-1/2 space-y-6">
          {blockIterator(row.column_1)}
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          {blockIterator(row.column_2)}
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          {blockIterator(row.column_3)}
        </div>
      </div>
    </div>
  );
};

export default Row;

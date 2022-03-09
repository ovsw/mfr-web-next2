// a button container

// *********************************
// bloks: "content"

// import * as React from "react"
import { blockIterator } from "../../utils/blockIterator";

const ButtonGroup = ({ blok: buttonGroup }) => {
  // console.log("buttonGroup component", buttonGroup)

  return (
    <div className="space-y-6 sm:flex sm:space-x-4 sm:space-y-0">
      {blockIterator(buttonGroup.content)}
    </div>
  );
};

export default ButtonGroup;

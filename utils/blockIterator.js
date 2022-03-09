// this is a helper function to display child bloks
// it takes an array of blocks from a "bloks" type field in a component
// and maps them to the DynamicComponent that renders out the respective bloks

import * as React from "react"
import { StoryblokComponent, storyblokEditable } from "@storyblok/react"

export function blockIterator(bloksArr) {
  // check that array is not empty
  if (bloksArr.length == 0) {
    return <p>NO BLOCKS TO RENDER</p>
  }

  const output = bloksArr.map(blok => (
    <StoryblokComponent
      blok={blok}
      key={blok._uid}
      {...storyblokEditable(blok)}
    />
  ))
  return output
}

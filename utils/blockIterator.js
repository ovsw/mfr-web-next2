// this is a helper function to display child bloks
// it takes an array of blocks from a "bloks" type field in a component
// and maps them to the DynamicComponent that renders out the respective bloks

import * as React from "react"
import { StoryblokComponent, storyblokEditable } from "@storyblok/react"

export function blockIterator(bloksArr) {
  // check that array is not empty

  if (bloksArr == undefined) {
    return (
      <div className="flex items-center justify-center py-10">
        <div className="text-center">
          <h1 className="text-6xl font-bold py-10">Page has no content 😅</h1>
          <p className="text-3xl mb-10">please add some?...</p>
        </div>
      </div>
    )
  }
  if (bloksArr.length == 0) {
    return (
      <p className="mx-auto max-w-2xl text-center text-bold py-10">
        No content here ༼ つ ◕_◕ ༽つ ... please add some{" "}
      </p>
    )
  }
  const output = bloksArr.map(blok => (
    <div key={blok._uid} {...storyblokEditable(blok)}>
      <StoryblokComponent blok={blok} />
    </div>
  ))
  return output
}

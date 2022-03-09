// a three column steps component

// *********************************
// name: string
// image: image file
// description: rich text

import * as React from "react"
import RichTextRenderer from "../richTextRenderer"
import { Image } from "@storyofams/storyblok-toolkit"

const Step = ({ blok: step }) => {
  return (
    <div className="w-full md:w-1/2 space-y-6">
      <Image src={step.image?.filename} width="200" className="w-full" />
      <h3>{step.title}</h3>
      <RichTextRenderer data={step.description} />
    </div>
  )
}

export default Step

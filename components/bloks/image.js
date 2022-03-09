// a blok containing a single image

// *********************************
// asset(image): "image"

// import * as React from "react"
import { Image } from "@storyofams/storyblok-toolkit"

const BlokImage = ({ blok: blokImage }) => {
  // console.log("image blok", blokImage)

  // const focus = blokImage.image?.focus || undefined

  // console.log("FOCUS", focus)
  return (
    <Image
      className="max-w-screen-md"
      src={blokImage.image?.filename}
      height="310px"
      width="100%"
      fluid={600}
      focus={blokImage.image?.focus}
    />
  )
}

export default BlokImage

// a card component

// *********************************
// image: image - the card image
// bloks: "content" - card contents

// import * as React from "react"
import { blockIterator } from "../../utils/blockIterator"
import { Image } from "@storyofams/storyblok-toolkit"

import CardLayout from "../common/card-layout"

const Card = ({ blok: card }) => {
  // console.log("card component", card)

  return (
    <CardLayout
      image={
        <Image src={card.image?.filename} width="200" className="w-full" />
      }
      content={blockIterator(card.content)}
    />
  )
}

export default Card

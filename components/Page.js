import * as React from "react"
import { StoryblokComponent, storyblokEditable } from "@storyblok/react"
import { blockIterator } from "../utils/blockIterator"

const Page = ({ blok }) => {
  return <main className="main">{blockIterator(blok.body)}</main>
}

export default Page

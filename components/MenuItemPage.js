import { StoryblokComponent, storyblokEditable } from "@storyblok/react"
import { blockIterator } from "../utils/blockIterator"

const Page = ({ blok }) => (
  <main {...storyblokEditable(blok)} key={blok._uid} className="main">
    {blockIterator(blok.body)}
  </main>
)

export default Page

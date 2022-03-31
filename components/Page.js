import * as React from "react"
import { blockIterator } from "../utils/blockIterator"

const Page = ({ blok }) => {
  return <>{blockIterator(blok.body)}</>
}

export default Page

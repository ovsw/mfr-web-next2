import { blockIterator } from "../utils/blockIterator"

const Page = ({ blok }) => <>{blockIterator(blok.body)}</>

export default Page

import { blockIterator } from "../../utils/blockIterator"

const RowMenuListing = ({ blok: rowMenuListing }) => {
  // console.log("row menu listing", rowMenuListing)

  return (
    <ul className="menuListingWrapper">
      {blockIterator(rowMenuListing.items)}
    </ul>
  )
}

export default RowMenuListing

import { blockIterator } from "../../utils/blockIterator"

const RowMenuListing = ({ blok: rowMenuListing }) => {
  // console.log("row menu listing", rowMenuListing)

  return (
    <div className="menuListingWrapper">
      {blockIterator(rowMenuListing.items)}
    </div>
  )
}

export default RowMenuListing

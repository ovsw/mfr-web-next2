import { blockIterator } from "../../utils/blockIterator"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const FaqList = ({ blok: faqList }) => {
  // console.log("row menu listing", faqList)

  return (
    <div className="max-w-7xl mx-auto my-12 px-4 sm:my-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-5xl">
          {faqList.title}
        </h2>
        <dl className="mt-12 space-y-6 divide-y divide-gray-200">
          {blockIterator(faqList.items)}
        </dl>
      </div>
    </div>
  )
}

export default FaqList

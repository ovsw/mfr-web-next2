import { blockIterator } from "../../utils/blockIterator"
import RichTextRenderer from "../richTextRenderer"
import { Disclosure } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/outline"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const FaqItem = ({ blok: faqItem }) => {
  // console.log("row menu listing", faqItem)

  return (
    <Disclosure as="div" key={faqItem.question} className="pt-6">
      {({ open }) => (
        <>
          <Disclosure.Button className=" text-lg text-left w-full flex justify-between items-center text-gray-500">
            <span
              className={`font-semibold text-2xl  ${
                !open ? "text-gray-600 " : "text-accent-500 opacity-70"
              }`}
            >
              {faqItem.question}
            </span>
            <span className="ml-6 h-7 flex items-center">
              <ChevronDownIcon
                className={classNames(
                  open ? "-rotate-180" : "rotate-0",
                  "h-6 w-6 transform"
                )}
                aria-hidden="true"
              />
            </span>
          </Disclosure.Button>
          <Disclosure.Panel as="dd" className="mt-2 pr-12">
            <div className="prose prose-stone prose-xl opacity-70">
              <RichTextRenderer data={faqItem.answer_single} />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default FaqItem

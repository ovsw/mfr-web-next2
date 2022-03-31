import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"
import Link from "next/link"
import DesktopDropdownItem from "./desktop-dropdown-item"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const DesktopDropdown = ({ title, items, description }) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              !open ? "text-stone-600" : "text-accent-500",
              "main-menu-item group bg-white inline-flex items-center"
            )}
          >
            <span className="group-hover:text-accent-500">{title}</span>
            <ChevronDownIcon
              className={classNames(
                open ? "text-accent-200" : "text-stone-400",
                "ml-2 h-5 w-5 group-hover:text-accent-200"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              className="absolute z-10 -ml-4 lg:ml-0 mt-3 top-10 
              transform w-screen 
              max-w-sm lg:max-w-xl xl:max-w-4xl
              md:left-1/2 md:-translate-x-1/2"
            >
              {({ close }) => (
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="flex">
                    <div className="py-14 pl-6 pr-4 bg-primary  min-w-max hidden xl:block">
                      <p className="text-3xl text-stone-100 font-bold">
                        {title}
                      </p>
                      <p className="text-base mt-2 text-stone-300 max-w-[200px] font-medium">
                        {description}
                      </p>
                    </div>

                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 sm:pb-12 lg:grid-cols-2">
                      {items.map(item => (
                        <DesktopDropdownItem
                          key={item.name}
                          item={item}
                          close={async () => {
                            close()
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default DesktopDropdown

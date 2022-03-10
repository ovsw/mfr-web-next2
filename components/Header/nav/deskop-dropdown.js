import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"
import Link from "next/link"

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
              max-w-md lg:max-w-4xl
              lg:left-1/2 lg:-translate-x-1/2"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="flex">
                  <div className="py-14 pl-6 pr-4 bg-tertiary-300  min-w-max">
                    <p className="text-3xl text-stone-600 font-bold">{title}</p>
                    <p className="text-base mt-2 text-stone-500 max-w-[200px] font-medium">
                      {description}
                    </p>
                  </div>

                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 sm:pb-12 lg:grid-cols-2">
                    {items.map(item => (
                      <Link key={item.name} href={item.href}>
                        <a className="group -m-3 p-3 pt-2 was-flex items-start rounded-lg hover:bg-tertiary-200/70 hover:outline-1 hover:outline-primary-500">
                          <div
                            className="
                              relative flex-shrink-0 flex items-center justify-end 
                              h-10 w-10 
                              rounded-md 
                              bg-gradient-to-r was-from-white was-to-white
                              text-primary group-hover:text-primary-500 opacity-90 sm:h-10 sm:w-12"
                          >
                            <item.icon className="h-8 w-8" aria-hidden="true" />
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-bold font-serif text-stone-800 group-hover:text-primary-500">
                              {item.name}
                            </p>
                            <p className="mt-1 text-sm text-stone-500 font-medium">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default DesktopDropdown

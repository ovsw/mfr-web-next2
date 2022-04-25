import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { CalendarIcon, PhoneIcon, XIcon } from "@heroicons/react/outline"
import Link from "next/link"
import Image from "next/image"

import DesktopLogo from "../../../public/images/mariannas-fundraisers_2022_alt_wordmark.png"

const MobileNav = ({ mobileMainMenu, mobileSecondaryMenu }) => {
  return (
    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden "
      >
        {({ close }) => (
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-stone-100 border-2 border-primary-500/80">
            {/* MOBILE MENU MAIN */}
            <div className="pt-4 pb-6 px-5">
              {/* MOBILE MENU TOP */}
              <div className="flex">
                <Link href="/">
                  <a className="w-24 sm:w-40 pt-1 mr-auto md:mx-auto">
                    <Image
                      src={DesktopLogo}
                      alt="Marianna's Fundraisers Logo"
                    />
                  </a>
                </Link>

                <div className="-mr-2 relative z-50">
                  <Popover.Button className="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-primary hover:text-stone-500 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              {/*END MOBILE MENU TOP*/}

              {/* fundraisers NAV ITEM SUBITEMS ONLY */}
              <div className="mt-6 sm:mt-10 md:mt-5 md:max-w-lg md:mx-auto md:px-5">
                <nav className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
                  <div className="grid grid-cols-1 gap-4">
                    {mobileMainMenu.slice(0, 2).map(item => (
                      <Link key={item.name} href={item.href}>
                        <a
                          className="-m-3 p-3 flex items-center rounded-lg hover:bg-stone-50"
                          onClick={async () => {
                            close()
                          }}
                        >
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-red-600 to-accent text-white">
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div className="ml-4 text-base font-medium text-stone-900">
                            {item.name}
                          </div>
                        </a>
                      </Link>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {mobileMainMenu.slice(2).map(item => (
                      <Link key={item.name} href={item.href}>
                        <a
                          className="-m-3 p-3 flex items-center rounded-lg hover:bg-stone-50"
                          onClick={async () => {
                            close()
                          }}
                        >
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-red-600 to-accent text-white">
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div className="ml-4 text-base font-medium text-stone-900">
                            {item.name}
                          </div>
                        </a>
                      </Link>
                    ))}
                  </div>
                </nav>
              </div>
              {/* SOLUTIONS NAV ITEM SUBITEMS ONLY */}
            </div>
            {/* END MOBILE MENU MAIN */}

            {/* MOBILE MENU EXTRA ITEMS */}
            <div className="py-6 px-5 md:max-w-lg md:mx-auto">
              {/* EXTRA ITEMS MAIN */}
              <div className="grid grid-cols-2 gap-4">
                {mobileSecondaryMenu.map((item, i) => {
                  return (
                    <Link key={i} href={item.href}>
                      <a
                        className="text-base font-medium text-stone-900 hover:text-stone-700 leading-5"
                        onClick={async () => {
                          close()
                        }}
                      >
                        {item.name}
                      </a>
                    </Link>
                  )
                })}
              </div>
              {/* END EXTRA ITEMS MAIN */}

              {/* EXTRA ITEMS BUTTONS  */}
              <div className="mt-6 space-y-4 md:space-y-0 md:space-x-4">
                <Link href="/schedule-a-free-tasting">
                  <a
                    className="btn btn-accent btn-small"
                    onClick={async () => {
                      close()
                    }}
                  >
                    <span className="mr-2">
                      <CalendarIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    Book Free Tasting
                  </a>
                </Link>
                {/* Existing customer? */}
                <Link href="/submit-your-order">
                  <a
                    className="btn btn-primary btn-small"
                    onClick={async () => {
                      close()
                    }}
                  >
                    <span className="mr-2">
                      <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                    </span>{" "}
                    <span className="">Submit Order</span>
                  </a>
                </Link>
              </div>
              <Link href="/get-assistance">
                <a
                  className=" flex items-center justify-center md:justify-start mt-5 border-red-600  underline text-lg"
                  onClick={async () => {
                    close()
                  }}
                >
                  <span className="mr-2">
                    <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                  </span>{" "}
                  <span className="">Get Support / Contact</span>
                </a>
              </Link>
              {/* END EXTRA ITEMS BUTTONS  */}
            </div>
          </div>
        )}
      </Popover.Panel>
    </Transition>
  )
}
export default MobileNav

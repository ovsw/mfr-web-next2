import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import {
  AnnotationIcon,
  BookOpenIcon,
  CalendarIcon,
  ChartBarIcon,
  ChatAlt2Icon,
  ChatAltIcon,
  ClipboardCheckIcon,
  CurrencyDollarIcon,
  DocumentAddIcon,
  DocumentTextIcon,
  HeartIcon,
  InboxIcon,
  MenuIcon,
  NewspaperIcon,
  PencilAltIcon,
  PhoneIcon,
  QuestionMarkCircleIcon,
  ReplyIcon,
  SparklesIcon,
  TrashIcon,
  UsersIcon,
  StarIcon,
  TemplateIcon,
  UserGroupIcon,
  XIcon,
} from "@heroicons/react/outline"
import Link from "next/link"
import Image from "next/image"

import DesktopDropdown from "./nav/deskop-dropdown"

import DesktopLogo from "../../public/images/mariannas-fundraisers_2022_alt_wordmark.png"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Header = ({ props }) => {
  return (
    <header className="shadow-md relative z-50">
      <Popover className="relative bg-white ">
        {({ open }) => (
          <>
            {/* <Popover.Overlay
              className={`${
                open ? "opacity-30 fixed inset-0" : "opacity-0"
              } bg-black`}
            /> */}
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-4 md:py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
              {/* LOGO */}
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/">
                  <a className="w-40 pt-2 md:pt-0 md:h-10 relative">
                    <span className="sr-only">Marianna's Fundraisers</span>
                    <Image
                      className=""
                      src={DesktopLogo}
                      alt="Marianna's Fundraisers Logo"
                      fit="fit"
                    />
                  </a>
                </Link>
              </div>
              {/* LOGO END */}

              {/* MOBILE TRIGGER */}
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-stone-400 hover:text-stone-500 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              {/* END MOBILE TRIGGER */}

              {/* DESKTOP NAV */}
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <DesktopDropdown
                  title="Fundraisers"
                  items={fundraisers}
                  description="We offer 14” famous hoagies and 12” delicious pizzas for your fundraising needs. You'll love how easy they are to sell and your customers will love the variety."
                />

                <Link href="/menu">
                  <a className="main-menu-item text-stone-800">Menu</a>
                </Link>

                <DesktopDropdown
                  title="About Us"
                  items={aboutUs}
                  description="We have over 40 years of experience helping groups like yours raise money. We guide you through every step to help you have the best fundraiser possible."
                />
                <DesktopDropdown
                  title="Selling Tools"
                  items={tools}
                  description="We have a variety of tools to help make your fundraising experience a little easier."
                />

                <Link href="/contact-us">
                  <a className="main-menu-item text-stone-800">Contact Us</a>
                </Link>
              </Popover.Group>

              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                {/* <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-stone-500 hover:text-stone-900"
            >
              Sign in
            </a> */}
                <Link href="/schedule-a-free-tasting">
                  <a
                    className="
              ml-8 whitespace-nowrap 
              inline-flex items-center justify-center 
              btn btn-outlined-accent
              btn-small
              "
                  >
                    Book a Free Tasting
                  </a>
                </Link>
              </div>
            </div>
            {/* END DESKTOP NAV */}

            {/* MOBILE MENU  */}
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
                className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  {/* MOBILE MENU MAIN */}
                  <div className="pt-5 pb-6 px-5">
                    {/* MOBILE MENU TOP */}
                    <div className="flex items-center justify-between">
                      <Link href="">
                        <a className="w-24">
                          <Image
                            src={DesktopLogo}
                            alt="Marianna's Fundraisers Logo"
                          />
                        </a>
                      </Link>

                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-stone-400 hover:text-stone-500 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    {/*END MOBILE MENU TOP*/}

                    {/* fundraisers NAV ITEM SUBITEMS ONLY */}
                    <div className="mt-6">
                      <nav className="grid grid-cols-1 gap-7">
                        {mobileMainMenu.map(item => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 p-3 flex items-center rounded-lg hover:bg-stone-50"
                          >
                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-red-600 to-accent text-white">
                              <item.icon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="ml-4 text-base font-medium text-stone-900">
                              {item.name}
                            </div>
                          </a>
                        ))}
                      </nav>
                    </div>
                    {/* SOLUTIONS NAV ITEM SUBITEMS ONLY */}
                  </div>
                  {/* END MOBILE MENU MAIN */}

                  {/* MOBILE MENU EXTRA ITEMS */}
                  <div className="py-6 px-5">
                    {/* EXTRA ITEMS MAIN */}
                    <div className="grid grid-cols-2 gap-4">
                      {mobileSecondaryMenu.map((item, i) => {
                        return (
                          <Link key={i} href={item.href}>
                            <a className="text-base font-medium text-stone-900 hover:text-stone-700">
                              {item.name}
                            </a>
                          </Link>
                        )
                      })}
                    </div>
                    {/* END EXTRA ITEMS MAIN */}

                    {/* EXTRA ITEMS BUTTONS  */}
                    <div className="mt-6">
                      <Link href="/schedule-a-free-tasting">
                        <a className="btn btn-accent btn-small">
                          <span className="mr-2">
                            <CalendarIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </span>
                          Book Free Tasting
                        </a>
                      </Link>
                      <p className="mt-4 text-center text-base font-medium text-stone-500">
                        {/* Existing customer? */}
                        <Link href="/get-support">
                          <a className="btn btn-outlined-primary btn-small">
                            <span className="mr-2">
                              <PhoneIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>{" "}
                            <span className="">Get Support / Contact</span>
                          </a>
                        </Link>
                      </p>
                    </div>
                    {/* END EXTRA ITEMS BUTTONS  */}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </header>
  )
}

export default Header

const fundraisers = [
  {
    name: "How it Works",
    description:
      "A full rundown of the process, from first contact to delivery.",
    href: "/how-it-works",
    icon: QuestionMarkCircleIcon,
  },
  {
    name: "Pricing Info",
    description:
      "Our pricing structure and our suggested pricing “You” based concept.",
    href: "/pricing-info",
    icon: CurrencyDollarIcon,
  },
  {
    name: "The Fundraiser that Sells Itself",
    description: "Why Marianna's truly is 'The Fundraiser that Sells Itself.'",
    href: "/the-fundraiser-that-sells-itself",
    icon: ClipboardCheckIcon,
  },
  {
    name: "Fundraiser Resources",
    description: "Guides and Info on how to run a successful fundraiser.",
    href: "/fundraiser-resources",
    icon: BookOpenIcon,
  },
  {
    name: "Get Assistance",
    description:
      "Have a question? Need help with your fundraiser? We're one phone call away!",
    href: "/get-assistance",
    icon: PhoneIcon,
  },
  {
    name: "Schedule a Free Tasting",
    description:
      "Sample our famous food, and get a personal consultation from our experts.",
    href: "/schedule-a-free-tasting",
    icon: CalendarIcon,
  },
]

const aboutUs = [
  {
    name: "Fresh & Clean Obsessed",
    description:
      "We believe in only offering food that we ourselves love to eat.",
    href: "/fresh-and-clean-obsessed",
    icon: SparklesIcon,
  },
  {
    name: "Hoagie Heroes",
    description:
      "How we empower people to make a difference for the causes they believe in.",
    href: "/hoagie-heroes",
    icon: UserGroupIcon,
  },
  {
    name: "How it's Made",
    description: "A look behind the scenes at how the Famous Hoagies are made.",
    href: "/how-it-is-made",
    icon: HeartIcon,
  },
  {
    name: "Our Leadership",
    description: "Need a subtitle for this menu item",
    href: "/our-leadership",
    icon: UsersIcon,
  },
  {
    name: "Our Story and Promise",
    description:
      "Marianna's is now over 40 years old! How it all began and why we do it.",
    href: "/our-story-and-promise",
    icon: ChatAltIcon,
  },
  {
    name: "News & Events",
    description: "News about our events, promotions, and special offers.",
    href: "/news",
    icon: NewspaperIcon,
  },
  {
    name: "Success Stories",
    description: "Hear from some of our Hoagie Heroes.",
    href: "/success-stories",
    icon: StarIcon,
  },
]

const tools = [
  {
    name: "10 Steps to Success",
    description:
      "We've laid out an easy 10 step process to get you to a successful fundraiser.",
    href: "/10-steps-to-success",
    icon: ChartBarIcon,
  },
  {
    name: "Documents and Forms",
    description:
      "Everything you need in terms of paperwork to run a sucessful fundraiser with Marianna's",
    href: "/documents-and-forms/",
    icon: DocumentTextIcon,
  },
  {
    name: "Advertising Templates",
    description:
      "Advertising posters and social media images to help you spread the word about your fundraiser.",
    href: "/advertising-templates",
    icon: TemplateIcon,
  },
  {
    name: "Fundraiser FAQs",
    description:
      "Frequent questions and just as many answers – useful info about running a Marianna’s Fundraiser.",
    href: "/fundraiser-frequently-asked-questions",
    icon: QuestionMarkCircleIcon,
  },
  {
    name: "Get Assistance",
    description:
      "Have a question? Need help with your fundraiser? We're one phone call away!",
    href: "/get-assistance",
    icon: PhoneIcon,
  },
  {
    name: "Submit Your Order",
    description:
      "Use this to submit your order to us, once you're done selling.",
    href: "/submit-your-order",
    icon: DocumentAddIcon,
  },
]

const mobileMainMenu = [
  fundraisers[2],
  fundraisers[0],
  fundraisers[1],
  {
    name: "Food Menu",
    href: "/menu",
    icon: HeartIcon,
  },
]
const mobileSecondaryMenu = [
  tools[3],
  aboutUs[1],
  aboutUs[4],
  aboutUs[5],
  aboutUs[0],
  fundraisers[3],
]

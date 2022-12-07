import { Popover } from "@headlessui/react"
import {
  BookOpenIcon,
  CalendarIcon,
  ChartBarIcon,
  ChatAltIcon,
  ClipboardCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  DocumentAddIcon,
  DocumentTextIcon,
  HeartIcon,
  LocationMarkerIcon,
  MenuIcon,
  NewspaperIcon,
  PhoneIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  UsersIcon,
  StarIcon,
  SearchIcon,
  TemplateIcon,
  UserGroupIcon,
} from "@heroicons/react/outline"
import Link from "next/link"
import Image from "next/image"

import DesktopDropdown from "./nav/deskop-dropdown"
import MobileNav from "./nav/mobile"

import DesktopLogo from "../../public/images/mariannas-fundraisers_2022_alt_wordmark.png"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Header = ({ props }) => {
  return (
    <header className="shadow-md fixed w-full z-50">
      <Popover className="relative bg-white ">
        {({ open }) => (
          <>
            {/* <Popover.Overlay
              className={`${
                open ? "opacity-30 fixed inset-0" : "opacity-0"
              } bg-black`}
            /> */}
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-4 md:py-6 sm:px-6  md:space-x-10  lg:px-8">
              {/* LOGO */}
              <div className="flex justify-start lg:w-36">
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

              {/* DESKTOP NAV */}
              <Popover.Group
                as="nav"
                className="hidden lg:flex space-x-5 xl:space-x-10"
              >
                <DesktopDropdown
                  title="Fundraisers"
                  items={fundraisers}
                  description="We offer 14” famous hoagies and 12” delicious pizzas for your fundraising needs. You'll love how easy they are to sell and your customers will love the variety."
                />

                <Link href="/products">
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
                  description="Tools to help you throughout the fundraising process."
                />

                <Link href="/contact-us">
                  <a className="main-menu-item text-stone-800">Contact Us</a>
                </Link>
              </Popover.Group>

              <div className="hidden md:flex  lg:flex-1 justify-end space-x-2 ">
                <Link href="/schedule-a-free-tasting">
                  <a
                    className="
              whitespace-nowrap 
              flex items-center justify-center 
              btn btn-outlined-accent
              btn-small
              "
                  >
                    Book Free Tasting
                  </a>
                </Link>
                <Link href="/submit-your-order">
                  <a
                    className="
              whitespace-nowrap 
              flex items-center justify-center 
              btn btn-outlined-primary
              btn-small
              "
                  >
                    Submit Order
                  </a>
                </Link>
              </div>

              {/* MOBILE TRIGGER */}
              <div className="-mr-2 -my-2 lg:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-primary-500 hover:text-stone-500 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              {/* END MOBILE TRIGGER */}
            </div>
            {/* END DESKTOP NAV */}
            <MobileNav
              mobileMainMenu={mobileMainMenu}
              mobileSecondaryMenu={mobileSecondaryMenu}
            />
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
    name: "The Fundraiser That Sells Itself",
    description: "Why Marianna's truly is 'The Fundraiser That Sells Itself.'",
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
  {
    name: "Find a Sale",
    description:
      "Would you like to purchase a fundraiser but don’t know who is selling? We can help.",
    href: "/find-a-sale",
    icon: SearchIcon,
  },
]

const aboutUs = [
  {
    name: "Fresh & Clean Obsessed",
    description:
      "We only use quality ingredients, prepared fresh daily in the highest standard of cleanliness.",
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
    description: "Meet some of the team at Marianna's!",
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
  {
    name: "Hours of Operation",
    description: "for office and delivery.",
    href: "/hours-of-operation",
    icon: ClockIcon,
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
    description: "Tools to help you throughout the fundraising process.",
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
    href: "/products",
    icon: HeartIcon,
  },
]
const mobileSecondaryMenu = [
  // tools[3],
  fundraisers[3],
  aboutUs[0],
  // aboutUs[4],
  aboutUs[2],
  aboutUs[5],
  aboutUs[1],
  aboutUs[6],
  // fundraisers[3],
]

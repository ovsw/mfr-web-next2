import Link from "next/link"

const DesktopDropdownItem = ({ item, close }) => {
  return (
    <Link key={item.name} href={item.href}>
      <a
        className="group -m-3 p-3 pt-2 was-flex items-start rounded-lg hover:bg-tertiary-200/70 hover:outline-1 hover:outline-primary-500"
        onClick={close}
      >
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
  )
}

export default DesktopDropdownItem

import { Image } from "@storyofams/storyblok-toolkit"
import SectionBrush1 from "../svg/section-brush-1"
import SectionBrush2 from "../svg/section-brush-2"

const HeroTemplate = ({
  background_image,
  children,
  border_color,
  height,
  background_color,
}) => {
  // console.log("background_image", background_image)

  const brushBorderThemes = {
    light: "fill-theme-white",
    shaded: "fill-theme-offWhite",
    green: "fill-theme-primary",
    red: "fill-theme-accent",
  }

  const heightStyles = {
    short: "py-16 sm:py-24 lg:py-40",
    default: "py-16 sm:py-24 lg:py-36 xl:py-44 2xl:py-60",
    tall: "py-16 sm:py-24 lg:py-80",
    empty: "py-32 sm:py-36 md:py-60 xl:py-[35vh] 3xl:py-[30vh]",
  }
  // const dynamicBrushStyles =
  //   border_color !== undefined
  //     ? brushBorderThemes[border_color]
  //     : "fill-theme-white"

  const sidesBgStyles = {
    light: "bg-white",
    shaded: "bg-themeFill-offWhite",
    green: "bg-primary",
    red: "bg-themeFill-accent",
    muslin: "bg-muslin",
  }

  return (
    <div className={`Hero bgs-[#1e212b] ${sidesBgStyles[background_color]}`}>
      <div className=" max-w-[1600px] mx-auto max-h-[70vh]">
        <div className="relative bg-stone-300 max-h-[70vh] z-0">
          {/* IMAGE */}
          {background_image?.filename && (
            <div className="absolute inset-0 max-h-[70vh]">
              <Image
                src={background_image?.filename}
                alt={background_image?.alt}
                height="100%"
                width="100%"
                fluid={2000}
                focus={background_image?.focus}
                className=""
              />
              <div className="absolute inset-0  mix-blend-multiply bg-gradient-to-r from-gray-900 via-gray-500 to-transparent sm:from-gray-100 sm:via-gray-100 sm:to-gray-100" />
            </div>
          )}
          {/* END IMAGE */}
          <div className="max-w-7xl mx-auto ">
            <div className="relative sm:overflow-hidden  ">
              <div className={`relative  text-white ${heightStyles[height]}`}>
                {children}
              </div>
            </div>
          </div>

          <SectionBrush1
            className={`absolute -bottom-20 z-10 ${brushBorderThemes[border_color]}`}
          />
          <div
            className={`bGBar ${sidesBgStyles[border_color]} full-width  absolute left-0 right-0 bottom-[85px] h-[100px] z-[-1]`}
            //
          ></div>
        </div>
      </div>
    </div>
  )
}

export default HeroTemplate

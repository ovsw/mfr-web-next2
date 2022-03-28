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
    short: "max-h-[40vh]",
    default: "max-h-[50vh]",
    tall: "max-h-[60vh]",
    empty: "max-h-[50vh]",
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
      <div className=" max-w-[1600px] mx-auto ">
        <div className="relative bg-stone-300 z-0">
          {/* IMAGE */}
          {background_image?.filename && (
            <div className="absolute inset-0 ">
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
            <div className="relative sm:overflow-hidden">
              <div className={`relative  text-white ${heightStyles[height]} flex items-center h-screen`}>
                <div className="pl-12 4xl:pl-0 pt-12 2xl:pt-0">
                {children}
                </div>
              </div>
            </div>
          </div>

          <SectionBrush1
            className={`absolute -bottom-20 z-10 ${brushBorderThemes[border_color]}`}
          />
          <div
            className={`bGBar ${sidesBgStyles[border_color]} full-width  absolute left-0 right-0 -bottom-[20px] h-[80px] z-[-1]`}
            //
          ></div>
        </div>
      </div>
    </div>
  )
}

export default HeroTemplate

// the main root blok component: section
// it accepts only row bloks as children

// *****************************
// - background: String (single option)
// - width: String (single option)
// - content: Bloks

import * as React from "react"
import { blockIterator } from "../../utils/blockIterator"

export const SectionThemeContext = React.createContext(null)

// SVGs
import SectionBrush1 from "../svg/section-brush-menu"
import SectionBrush2 from "../svg/section-brush-2"
import SectionBrush2b from "../svg/section-brush-2b"

const Section = ({ blok: section }) => {
  // console.log("section component", section)

  const { background, content } = section

  // style props form SB
  const width = section.width || "default"
  const decoration_top = section.decoration_top || "default"
  const decoration_bottom = section.decoration_bottom || "default"
  const margin_top = section.margin_top || "default"
  const padding_top = section.padding_top || "default"
  const margin_bottom = section.margin_bottom || "default"
  const padding_bottom = section.padding_bottom || "default"
  const overflowHidden = section.overflow_hidden

  // main styles
  const bgStyles = {
    light: "bg-themeFill-white",
    shaded: "bg-themeFill-offWhite",
    primary: "bg-themeFill-primary",
    accent: "bg-themeFill-accent",
    muslin: "bg-muslin",
  }

  const contentWidthStyles = {
    default: "max-w-7xl mx-auto max-w space-y-10",
    full: "",
    narrow: "max-w-5xl mx-auto max-w space-y-10",
  }
  const emptyComponent = () => <></>
  const brushedSVGsTop = {
    default: emptyComponent,
    brushed1: SectionBrush1,
    brushed2: SectionBrush2,
  }
  const brushedSVGsBottom = {
    default: emptyComponent,
    brushed1: SectionBrush1,
    brushed2: SectionBrush2b,
  }

  // top styles
  const topMarginStyles = {
    default: "mt-10 sm:mt-20",
    none: "",
    large: "mt-10 sm:mt-36",
    overlapping: "-mt-32",
  }
  const topPaddingStyles = {
    default: "pt-10 sm:pt-20",
    none: "",
    large: "pt-10 sm:pt-36",
    small: "pt-4 md:pt-2",
  }

  // bottom styles
  const bottomMarginStyles = {
    default: "mb-10 sm:mb-20",
    none: "",
    large: "mb-36",
    overlapping: "-mb-20",
  }
  const bottomPaddingStyles = {
    default: "pb-10 sm:pb-20",
    none: "",
    large: "pb-20 sm:pb-36",
    larger: "pb-56",
    small: "pb-14 lg:pb-10",
  }

  // to be passed down through context so that child components can know how to adapt their styles
  const themeContextValues = {
    bg: background,
    bgValue:
      background == "primary" ||
      background == "accent" ||
      background == "muslin"
        ? "dark"
        : "light",
  }

  // const dynamicBrushStyles =
  //   border_color !== undefined
  //     ? brushBorderThemes[border_color]
  //     : "fill-theme-white"

  const topDecorationSpacing = {
    default: "",
    brushed1: "mt-28",
    brushed2: "mt-24",
  }
  const decorationFillColor = {
    default: "fill-theme-white",
    shaded: "fill-theme-offWhite",
    primary: "fill-theme-primary",
    accent: "fill-theme-accent",
    light: "fill-theme-white",
    muslin: "fill-theme-muslin",
  }

  return (
    <SectionThemeContext.Provider value={themeContextValues}>
      <section
        className={`SECTION px-4 lg:px-8 2xl:px-0 
        ${overflowHidden ? "overflow-hidden" : ""}
        ${bgStyles[background]} 
        ${topMarginStyles[margin_top]} 
        ${bottomMarginStyles[margin_bottom]} relative`}
      >
        {brushedSVGsTop[decoration_top] !== undefined &&
          React.createElement(brushedSVGsTop[decoration_top], {
            className: `z-30 ${decorationFillColor[background]}`,
          })}
        <div
          className={`${topPaddingStyles[padding_top]} ${bottomPaddingStyles[padding_bottom]}`}
        >
          <div className={`${contentWidthStyles[width]} relative`}>
            {blockIterator(content)}
          </div>
        </div>
        {brushedSVGsBottom[decoration_bottom] !== undefined &&
          React.createElement(brushedSVGsBottom[decoration_bottom], {
            className: `z-30 ${decorationFillColor[background]}`,
          })}
      </section>
    </SectionThemeContext.Provider>
  )
}

export default Section

// a hero component

// *************************
// - content: Bloks
// - background_image: Asset (image)
// - height: string

import HeroTemplate from "../common/hero-template"
import RichTextRenderer from "../richTextRenderer"
import { blockIterator } from "../../utils/blockIterator"

const Hero = ({ blok: hero }) => {
  const {
    background_image,
    buttons,
    height,
    text,
    title,
    border_color,
    background_color,
    hidden = false,
  } = hero

  if (hidden) return <></>

  return (
    <>
      <HeroTemplate
        title={title}
        background_image={background_image}
        text={text}
        buttons={buttons}
        border_color={border_color}
        height={height}
        background_color={background_color}
      >
        <h1 className="text-left text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl max-w-sm md:max-w-none ">
          <span
            className="block text-white
           max-w-[7em] sm:max-w-[7em] lg:max-w-md xl:max-w-xl
           "
          >
            {title}
          </span>
          {/* <span className="block text-green-200">customer support</span> */}
        </h1>
        <div
          className="mt-6  text-left  text-stone-400 lg:leading-relaxed
          text-xl
          max-w-[50%] 2xl:max-w-lg 
          hidden md:block
        "
        >
          <RichTextRenderer data={text} />
        </div>

        {/* BUTTONS */}
        {buttons.length > 0 && (
          <div className="mt-10 max-w-sm sm:max-w-none sm:flex">
            <div className="space-y-4 sm:space-y-0 sm:inline-grid sm:grid-cols-2 sm:gap-5">
              {blockIterator(buttons)}
            </div>
          </div>
        )}

        {/* END BUTTONS */}
      </HeroTemplate>
    </>
  )
}

export default Hero

// a two column row with a big image on one side

// *********************************
// bloks: content, heading
// asset: "image"

import { useState } from "react"
import { blockIterator } from "../../utils/blockIterator"
import { Image } from "@storyofams/storyblok-toolkit"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"

// svgs
import ChevronLeftRound from "../svg/chevron-left-round"
import ChevronRightRound from "../svg/chevron-right-round"

import "swiper/css"
// import "swiper/css/pagination"
// import "swiper/css/navigation"
// import "swiper/css/a11y"

export default function TestimonialsRow({ blok: rowTestimonials }) {
  const { heading, testimonials_list, image } = rowTestimonials

  const [swiper, setSwiper] = useState(undefined)
  const [swiperIndex, setSwiperIndex] = useState(0)

  swiper?.on("slideChange", function () {
    setSwiperIndex(swiper.activeIndex)
    // console.log("slide changed", swiper.activeIndex)
  })

  const isOnFirstSlide = swiperIndex == 0
  const isOnLastSlide = swiperIndex == testimonials_list.length - 1
  // console.log("swiper instance", isOnFirstSlide, isOnLastSlide)

  const prevButtonStyles = isOnFirstSlide
    ? "opacity-100 text-gray-500"
    : "opacity-100 text-tertiary-600"
  const nextButtonStyles = isOnLastSlide
    ? "opacity-80 text-gray-500"
    : "opacity-100 text-tertiary-600"

  // console.log("testimonials_list", testimonials_list)
  return (
    <div className="container mx-auto pt-10 sm:pt-20">
      <div className="flex">
        <div className="max-w-lg">{heading && blockIterator(heading)}</div>
        <div className="flex gap-4 items-center ml-10 pb-1">
          <button onClick={() => swiper.slidePrev()} className="cursor-pointer">
            <span className="sr-only">previous testimonial</span>
            <ChevronLeftRound className={prevButtonStyles} />
          </button>
          <button
            onClick={() => swiper.slideNext()}
            className={nextButtonStyles}
          >
            <span className="sr-only">next testimonial</span>
            <ChevronRightRound />
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 ">
        <div className="" key={testimonials_list[1]._uid}>
          <Swiper
            slidesPerView={1}
            modules={[Pagination]}
            className="mySwiper"
            onSwiper={setSwiper}
          >
            {testimonials_list.map(item => {
              return (
                <SwiperSlide key={item._uid}>
                  <div className="w-full relative flex flex-col   p-6 ">
                    <div className="flex flex-col text-white">
                      <QuoteSvg />
                      <p className="xl:max-w-xl text-xl mt-4 italic text-white">
                        {item.text}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col  px-6 py-10 pt-0 text-stone-300 tracking-wider">
                    <p className="text-base font-semibold leading-4 my-2 text-tertiary-600">
                      {item.author_name}
                    </p>
                    <p className="text-base leading-4">{item.author_info}</p>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>

        {/* IMAGE */}
        <div
          className="hidden xl:block
        absolute -top-24 -bottom-20 right-0 z-40
          md:pt-0 
         aspect-[668/872]
        "
        >
          <Image
            className=""
            src={image?.filename}
            height="100%"
            width="100%"
            fluid={[668, 872]}
            focus={image?.focus}
          />
        </div>
        {/* END IMAGE */}
      </div>

      {/* <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {testimonials_list.map(testimonial => (
          <div className="bg-white" key={testimonial._uid}>
            <div className="w-full relative flex flex-col items-center md:p-12 p-6">
              <div className="text-stone-600  flex flex-col ">
                <QuoteSvg />
                <p className="xl:w-80 text-xl mt-4 italic">
                  {testimonial.text}
                </p>
              </div>
            </div>
            <div className="flex flex-col    px-12 py-10 pt-0">
               <img
              src="https://i.ibb.co/ZgF5Zzz/avatar-1.png"
              alt="profile pictre"
              className="w-12 h-12"
            /> 
              <p className="text-base font-semibold leading-4 my-2 text-stone-800">
                {testimonial.author_name}
              </p>
              <p className="text-base leading-4  text-stone-600">
                {testimonial.author_info}
              </p>
            </div>
          </div>
        ))}
      </div>  */}
    </div>
  )
}

const QuoteSvg = () => (
  <svg width={26} height={27} viewBox="0 0 26 27" fill="none">
    <g clipPath="url(#clip0)">
      <path
        d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z"
        fill="currentColor"
      />
      <path
        d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          width="24.5767"
          height={27}
          fill="white"
          transform="translate(25.2578 27) rotate(-180)"
        />
      </clipPath>
    </defs>
  </svg>
)

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
  <svg width="26" height="27" fill="none">
    <g fill="currentColor">
      <path d="M25.258 14.33h-5.961c.102-4.772 1.334-5.314 2.881-5.468l.597-.081V3.532l-.688.04c-2.02.126-4.255.526-5.745 2.548-1.307 1.772-1.883 4.667-1.883 9.112v8.235h10.799v-9.136ZM11.48 23.467v-9.136H5.599C5.7 9.558 6.893 9.016 8.44 8.86l.557-.08V3.532l-.648.04c-2.02.126-4.275.526-5.765 2.548C1.277 7.892.68 10.787.68 15.232v8.235H11.48Z" />
    </g>
  </svg>
)

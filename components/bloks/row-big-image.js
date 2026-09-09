// a two column row with a big image on one side

// *********************************
// bloks: "content"
// asset: "image"
// bool: "is_reversed"

import * as React from "react"
import { useState, useEffect } from "react"
import { useTrackingAllowed } from "../../utils/privacy"
import { blockIterator } from "../../utils/blockIterator"
import { Image } from "@storyofams/storyblok-toolkit"

import { SectionThemeContext } from "./section"
import getVideoId from "get-video-id"

// lightbox stuff
import FsLightbox from "fslightbox-react"
import { PlayIcon } from "@heroicons/react/outline"

const Row = ({ blok: rowBigImage }) => {
  // console.log("two column row component", rowBigImage)

  const sectionTheme = React.useContext(SectionThemeContext)
  const textStyles = sectionTheme.bgValue == "dark" ? "text-white" : ""

  const {
    content,
    image,
    is_reversed,
    extra_padding,
    contain_image,
    youTubeLink = "",
    badge_image,
  } = rowBigImage

  const alternateContentWrapperStyles = is_reversed
    ? "lg:ml-auto lg:mr-0"
    : "lg:mr-auto lg:ml-0"
  const alternateContentColumnStyles = is_reversed
    ? "lg:col-start-2 lg:pl-8"
    : "lg:pr-8"

  const alternateImageStyles = is_reversed ? "lg:left-0" : "lg:right-0"

  const paddingStyles = extra_padding
    ? "sm:pt-12 pb-14 px-4 sm:pt-14 sm:px-6"
    : "px-5"

  const [toggler, setToggler] = useState(false)
  const [privacyUnavailable, setPrivacyUnavailable] = useState(false)
  const allowed = useTrackingAllowed()
  useEffect(() => {
    if (!allowed) setToggler(false)
  }, [allowed])

  const { id } = getVideoId(youTubeLink)

  return (
    <div className="relative">
      {/* CONTENT */}
      <div
        className={`relative 
      ${paddingStyles}
      lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2 min-h-[400px]`}
      >
        <div className={`${alternateContentColumnStyles}`}>
          <div
            className={`text-base max-w-prose mx-auto lg:max-w-lg ${alternateContentWrapperStyles} space-y-12`}
          >
            {blockIterator(content)}
          </div>
        </div>
      </div>
      {/* END CONTENT */}

      {/* IMAGE */}
      <div
        className={` ${
          !badge_image && "pt-20"
        } lg:pt-0 lg:absolute  lg:top-0 h-full ${alternateImageStyles} lg:w-1/2 `}
      >
        <div
          className={`w-full object-fit relative lg:absolute lg:h-full 
          aspect-square group transition ease-in-out  transform-gpu 
          ${id && "hover:scale-105"}
          ${badge_image && "h-80 md:h-96"}
          `}
        >
          <Image
            className="rounded-2xl"
            src={image?.filename}
            height="100%"
            width="100%"
            fluid={900}
            focus={image?.focus}
            fit={contain_image ? "contain" : "cover"}
          />
          {/* {console.log("image?.focus}", image?.focus)} */}

          {/* VIDEO LIGHTBOX */}
          {id && (
            <>
              <button
                className=" w-full absolute inset-0 flex justify-center items-center 
                bg-primary-900/40 rounded-2xl
                
                "
                onClick={() => {
                  if (allowed) setToggler(!toggler)
                  else {
                    const openPreferences =
                      window._iub?.cs?.api?.openPreferences
                    if (typeof openPreferences === "function") {
                      setPrivacyUnavailable(false)
                      try {
                        window._iub.cs.api.openPreferences()
                      } catch (_) {
                        setPrivacyUnavailable(true)
                      }
                    } else setPrivacyUnavailable(true)
                  }
                }}
              >
                <span
                  className="text-white relative
                  transition ease-in-out  delay-50 
                  group-hover:-translate-y-0 group-hover:scale-150 duration-200
                  after:bg-white/10x after:w-40 after:h-40 after:rounded-full after:absolute after:inset-0
                  after:animate-pingx
                  drop-shadow-md
                  "
                >
                  <PlayIcon className="w-40 h-40" aria-hidden="true" />
                  <span className="text-lg">
                    {allowed ? "play video" : "Privacy choices for video"}
                  </span>
                </span>
              </button>
            </>
          )}
          {/* VIDEO LIGHTBOX */}
        </div>
      </div>
      {/* END IMAGE */}

      {privacyUnavailable && !allowed && (
        <p role="status" className="relative mt-4 p-4 bg-white text-gray-900">
          Privacy controls could not open. Reload this page to try again, or{" "}
          <a
            className="underline"
            href={`https://www.youtube.com/watch?v=${encodeURIComponent(id)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            watch this video on YouTube
          </a>
          .
        </p>
      )}
      {/* VIDEO LIGHTBOX SOURCE */}
      {id && allowed && (
        <FsLightbox
          toggler={toggler}
          type="youtube"
          sources={[
            <iframe
              id="custom-source"
              title="Marianna’s Fundraisers video"
              data-cmp-ab="1"
              frameBorder="0"
              width="1920px"
              height="1080px"
              allow="autoplay; fullscreen"
              src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
            ></iframe>,
          ]}
        />
      )}
      {/* END VIDEO LIGHTBOX SOURCE */}
    </div>
  )
}

export default Row

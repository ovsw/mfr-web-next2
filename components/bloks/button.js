// a button component

// *********************************
// text: "text"
// link: "link"
// boolean: "target" (checkbox)
// string: "style" (single option)
//    - primary (green bg white text)
//    - accent (red bg white text)
//    - light-primary (green text white bg)
//    - light-accent (red text white bg)
//    - dark (dark bg white text)

// import * as React from "react"
import Link from "next/link"
import Icon from "../Icon"

const Button = ({ blok: button }) => {
  // console.log("button component", button)

  const { anchor, url, linktype, cached_url } = button.link
  const { target, style, text, icon, icon_position } = button

  const styleVariants = {
    primary: "btn-primary",
    accent: "btn-accent",
    "light-primary": "btn-inverted-primary",
    "light-accent": "btn-inverted-accent",
    dark: "btn-dark",
  }

  const iconStyles = {
    left: "pl-6 ",
    right: "pr-6 ",
    none: "",
  }

  // console.log("BUTTON STYLE PROP", text, button, styleVariants[style])

  const btnStyles = `btn 
    ${styleVariants[style] != undefined ? styleVariants[style] : ""} 
    ${iconStyles[icon_position] != undefined ? iconStyles[icon_position] : ""}
  `

  // PREPARE ICONS
  const LeftIcon = (
    <Icon name={icon} height="1.5em"  title="icon" className="mr-3" />
  )
  const RightIcon = (
    <Icon name={icon} height="1.5em"  title="icon" className="ml-3" />
  )

  // console.log("link object", button.link?.anchor)

  // RETURN DIFFERENT TYPES OF BUTTONS
  if (linktype === "email") {
    // Email links: add `mailto:` scheme and map to <a>
    return (
      <a href={`mailto:${url}`} className={btnStyles}>
        {icon_position == "left" && LeftIcon}
        {text}
        {icon_position == "right" && RightIcon}
      </a>
    )
  }
  if (linktype === "url") {
    // External links: map to <a>
    return (
      <a
        href={url}
        target={target ? "_blank" : undefined}
        className={btnStyles}
      >
        {icon_position == "left" && LeftIcon}
        {text}
        {icon_position == "right" && RightIcon}
      </a>
    )
  }
  if (linktype === "story") {
    // link to internal page
    // special case where the link points to the home page, which has a Cached URL of 'home'
    // but no actual SLUG to link to
    const destinationPageUrl = cached_url === "home" ? "/" : cached_url
    return (
      <Link
        href={
          destinationPageUrl != undefined
            ? `/${destinationPageUrl}${anchor ? `#${anchor}` : ""}`
            : "#UNDEFINED-LINK"
        }
        scroll={anchor != undefined ? false : true}
      >
        <a target={target ? "_blank" : undefined} className={btnStyles}>
          {icon_position == "left" && LeftIcon}
          {text}
          {icon_position == "right" && RightIcon}
        </a>
      </Link>
    )
  }

  return (
    <p>
      <strong>ERROR PROCESSING LINK TARGET</strong>
    </p>
  )
}

export default Button

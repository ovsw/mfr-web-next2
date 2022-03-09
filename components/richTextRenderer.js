import * as React from "react"
import { render, MARK_LINK } from "storyblok-rich-text-react-renderer"
import Link from "next/link"
import RowBigImage from "../components/bloks/row-big-image"

const RichTextField = ({ data }) => {
  return (
    <>
      {render(data, {
        markResolvers: {
          [MARK_LINK]: (children, props) => {
            const { href, target, linktype } = props
            if (linktype === "email") {
              // Email links: add `mailto:` scheme and map to <a>
              return <a href={`mailto:${href}`}>{children}</a>
            }
            if (href.match(/^(https?:)?\/\//)) {
              // External links: map to <a>
              return (
                <a href={href} target={target}>
                  {children}
                </a>
              )
            }
            // Internal links: map to <Link>
            return (
              // WAS LINK
              <Link href={href != undefined ? href : "#UNDEFINED LINK"}>
                {children}
              </Link>
            )
          },
        },
        // blokResolvers: {
        //   ["row-big-image"]: ({ blok }) => <RowBigImage blok={blok} />,
        // },
        // defaultBlokResolver: (name, props) => (
        //   <div>
        //     <code>Missing blok resolver for blok type "{name}".</code>
        //     <pre>
        //       <code>{JSON.stringify(props, undefined, 2)}</code>
        //     </pre>
        //   </div>
        // ),
      })}
    </>
  )
}

export default RichTextField

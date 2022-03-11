// this page template has the following fields:
//  body: Rich Text
//  date: String (Date Selector)
//  main_image: Asset (Image)
//  title: text

import readingTime from "reading-time"
import { getPlainText } from "@storyofams/storyblok-toolkit"

import { blogAuthors } from "../utils/blogAuthors"
import { blockIterator } from "../utils/blockIterator"

const Page = ({ blok }) => {
  // console.log("blog post blok", blok)

  const { title, date: postDate, date, body, main_image, author } = blok

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })

  const stats = readingTime(getPlainText(body))
  const minutesToRead = Math.ceil(stats.minutes)

  return (
    <main className="main">
      <section className="max-w-5xl mx-auto max-w space-y-10">
        <div className="prose prose-xl my-10 mb-20 mx-auto">
          <h1 className="text-primary">{title}</h1>

          <div className="mt-4 flex items-center mb-10">
            <div className="flex-shrink-0">
              {/* <a href="#"> */}
              <span className="sr-only">{blogAuthors[author].name}</span>

              <img
                className="h-20 w-20 rounded-full m-0"
                src={blogAuthors[author].avatarImage}
                alt="Amy Mearkle"
              />
              {/* </a> */}
            </div>
            <div className="ml-3 text-[0.8em]">
              <p className=" mb-2 mt-0 font-medium text-gray-900 ">
                {/* <a href="#" className="hover:underline"> */}
                by <strong>{blogAuthors[author].name}</strong>
                {/* </a> */}
              </p>
              <div className="flex space-x-1 text-gray-500">
                <time dateTime={date}>{formattedDate}</time>
                <span aria-hidden="true">&middot;</span>&nbsp;
                {minutesToRead} min read
                {/* <span>{post.readingTime} read</span> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {blockIterator(body)}
    </main>
  )
}

export default Page

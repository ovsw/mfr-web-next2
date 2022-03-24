import * as React from "react"
import { Image } from "@storyofams/storyblok-toolkit"
// import readingTime from "reading-time"

import { blogAuthors } from "../utils/blogAuthors"

function PostListFeatured({ posts }) {
  return (
    <section className="px-4 pb-32">
      <div className="max-w-7xl mx-auto max-w space-y-10">
        <div>
          <h2>
            <span className="eyebrow block">Marianna's</span>
            <span className="block text-6xl font-bold">News & Tips</span>
          </h2>
        </div>

        {/* START SECTION CONTENT */}
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map(post => {
            const { name, content, full_slug, uuid } = post
            const { date, main_image, excerpt, author, reading_time } = content

            const formattedDate = new Date(date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })

            // const stats = readingTime(getPlainText(body))
            // const minutesToRead = Math.ceil(stats.minutes)

            return (
              <div
                key={uuid}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-shrink-0 h-60 w-full object-cover">
                  <Image
                    className=""
                    src={main_image?.filename}
                    height="100%"
                    width="100%"
                    fluid={900}
                    focus={main_image?.focus}
                    fit="cover"
                  />
                  {/* <img
                      className="h-48 w-full object-cover"
                      src={post.imageUrl}
                      alt=""
                    /> */}
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    {/* <p className="text-sm font-medium text-indigo-600">
                      <a href={full_slug} className="hover:underline">
                        Category Name
                      </a>
                    </p> */}
                    <a href={full_slug} className="block mt-2">
                      <p className="text-2xl font-semibold text-stone-800">
                        {name}
                      </p>
                      <p className="mt-3 text-base text-stone-500">{excerpt}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      {/* <a href="#"> */}
                      <span className="sr-only">
                        {blogAuthors[author].name}
                      </span>

                      <img
                        className="h-10 w-10 rounded-full"
                        src={blogAuthors[author].avatarImage}
                        alt="Amy Mearkle"
                      />
                      {/* </a> */}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {/* <a href="#" className="hover:underline"> */}
                        {blogAuthors[author].name}
                        {/* </a> */}
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={date}>{formattedDate}</time>
                        <span aria-hidden="true">&middot;</span>&nbsp;
                        {reading_time} min read
                        {/* <span>{post.readingTime} read</span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* END CONTENT */}
      </div>
    </section>
  )
}

export default PostListFeatured

import { NextSeo } from "next-seo"
import SEO from "../next-seo.config"

import {
  useStoryblokState,
  useStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react"
import Head from "next/head"
import PostListFeatured from "../components/posts-list-featured"

export default function Home({ story: initialStory, recentPosts }) {
  const story = useStoryblokState(initialStory)

  // if (!story.content) {
  //   return <div>Loading...</div>
  // }

  return (
    <>
      {/* <Head>
        <title>News & Events | Marianna's Fundraisers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <NextSeo
        title="News and Events"
        description="Get the latest company news, events and promotions."
        canonical={`${SEO.openGraph.url}/news`}
      />

      {/* {story.content && <StoryblokComponent blok={story.content} />} */}
      <div className="bg-themeFill-offWhite">
        <div className="newsWrapper pt-20">
          <PostListFeatured posts={recentPosts.stories} heading_level="h1" />
        </div>
      </div>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const storyblokApi = useStoryblokApi()
  let { data } = await storyblokApi.get(`cdn/stories/home`, {
    version: "draft",
  })
  let { data: recentPostsData } = await storyblokApi.get(`cdn/stories/`, {
    starts_with: "news",
    per_page: "20",
  })

  return {
    props: {
      // story: data ? data.story : false,
      preview,
      recentPosts: recentPostsData,
    },
    revalidate: 3600, // revalidate every hour
  }
}

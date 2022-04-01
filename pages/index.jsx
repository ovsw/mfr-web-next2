import { NextSeo } from "next-seo"
import SEO from "../next-seo.config"

import {
  useStoryblokState,
  useStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react"
import Head from "next/head"
import PostListFeatured from "../components/posts-list-featured"
import Header from "../components/Header"

export default function Home({ story: initialStory, recentPosts }) {
  const story = useStoryblokState(initialStory)

  // if (!story.content) {
  //   return <div>Loading...</div>
  // }

  return (
    <>
      {/* <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <NextSeo
        title={story.content.seo_title}
        description={story.content.seo_description}
        canonical={`${SEO.openGraph.url}/`}
      />
      {story.content && <StoryblokComponent blok={story.content} />}
      <PostListFeatured posts={recentPosts.stories} />
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
    per_page: "3",
  })

  return {
    props: {
      story: data ? data.story : false,
      preview,
      recentPosts: recentPostsData,
    },
    revalidate: 3600, // revalidate every hour
  }
}

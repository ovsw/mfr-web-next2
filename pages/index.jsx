import {
  useStoryblokState,
  useStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react"

export default function Home({ story: initialStory }) {
  const story = useStoryblokState(initialStory)

  if (!story.content) {
    return <div>Loading...</div>
  }

  return (
    <>
      <p>Home page</p>
      <StoryblokComponent blok={story.content} />
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const storyblokApi = useStoryblokApi()
  let { data } = await storyblokApi.get(`cdn/stories/home`, {
    version: "draft",
  })

  return {
    props: {
      story: data ? data.story : false,
      preview,
    },
    revalidate: 3600, // revalidate every hour
  }
}

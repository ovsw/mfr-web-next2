// import DynamicComponent from "@/components/Dc"
import Head from "next/head"
// import styles from "../styles/Home.module.css"

// import Storyblok, { useStoryblok } from "../lib/storyblok"
import {
  useStoryblokState,
  useStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react"

export default function Page({ story: initialStory, preview }) {
  // const enableBridge = true; // load the storyblok bridge everywhere
  // const enableBridge = preview // enable bridge only in prevew mode
  const story = useStoryblokState(initialStory)

  return (
    <>
      <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <DynamicComponent blok={story.content} /> */}
      <StoryblokComponent blok={story.content} />
    </>
  )
}

export async function getStaticProps({ params, preview = false }) {
  // join the slug array used in Next.js catch-all routes
  let slug = params.slug ? params.slug.join("/") : "home"

  // let sbParams = {
  //   // change to `published` to load the published version
  //   version: "draft", // or published
  //   // resolve_relations: "row-menu-listing.menu_items",
  // }

  // if (preview) {
  //   // set the version to draft in the preview mode
  //   sbParams.version = "draft"
  //   sbParams.cv = Date.now()
  // }

  const storyblokApi = useStoryblokApi()
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: "draft",
    cv: Date.now(),
  })

  return {
    props: {
      story: data ? data.story : null,
      preview,
    },
    // revalidate: 3600, // revalidate every hour
  }
}

export async function getStaticPaths() {
  let sbLinkParams = {
    // change to `published` to load the published version
    version: "draft", // or published
    cv: Date.now(),
  }
  // get all links from Storyblok
  // let { data } = await Storyblok.get("cdn/links/", sbLinkParams)
  const storyblokApi = useStoryblokApi()
  let { data } = await storyblokApi.get("cdn/links/", {
    version: "draft",
    cv: Date.now(),
  })

  let paths = []
  // create a routes for every link
  Object.keys(data.links).forEach(linkKey => {
    // do not create a route for folders or the home (index) page
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return
    }

    // get array for slug because of catch all
    const slug = data.links[linkKey].slug
    let splittedSlug = slug.split("/")

    // cretes all the routes
    paths.push({ params: { slug: splittedSlug } })
  })

  return {
    paths: paths,
    fallback: false,
  }
}

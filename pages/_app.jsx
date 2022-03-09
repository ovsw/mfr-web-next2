import { storyblokInit, apiPlugin } from "@storyblok/react"
import Teaser from "../components/teaser"
import Grid from "../components/grid"
import Page from "../components/page"
import Feature from "../components/feature"

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_KEY,
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    page: Page,
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <p>Hello from App</p>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

import { storyblokInit, apiPlugin } from "@storyblok/react";
import Teaser from "../src/components/teaser";
import Grid from "../src/components/grid";
import Page from "../src/components/page";
import Feature from "../src/components/feature";

storyblokInit({
  accessToken: process.env.STORYBLOK_API_KEY,
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    page: Page,
  },
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

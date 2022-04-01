import * as React from "react"
import { storyblokInit, apiPlugin } from "@storyblok/react"
import { useEffect } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useRouter } from "next/router"

// import Teaser from "../components/teaser"
// import Feature from "../components/feature"

// import Teaser from "../components/bloks/teaser"
import Grid from "../components/bloks/grid"

import Page from "../components/Page"
import BlogPost from "../components/BlogPost"
import MenuItemPage from "../components/MenuItemPage"

import Section from "../components/bloks/section"
import RowSingleColumn from "../components/bloks/row-single-column"
import RowTwoColumns from "../components/bloks/row-two-columns"
import RowThreeColumns from "../components/bloks/row-three-columns"
import Card from "../components/bloks/card"
import Heading from "../components/bloks/heading"
import RichTextBasic from "../components/bloks/rich-text-basic"
import Button from "../components/bloks/button"
import ButtonGroup from "../components/bloks/button-group"
import HeadingGroup from "../components/bloks/heading-group"
import Image from "../components/bloks/image"
import Hero from "../components/bloks/hero"
import HeroProduct from "../components/bloks/hero-product"
import RowTwoColumnsCta from "../components/bloks/row-two-columns-cta"
import RowBigImage from "../components/bloks/row-big-image"
import RowTestimonials from "../components/bloks/row-testimonials"
import RowMenuListing from "../components/bloks/row-menu-listing"
import Hoagie from "../components/bloks/hoagie"
import Pizza from "../components/bloks/pizza"
import RowThreeSteps from "../components/bloks/row-three-steps"
import Step from "../components/bloks/step"
import RowMenuTeaserOneOff from "../components/bloks/row-menu-teaser-one-off"
import NutritionTable from "../components/bloks/nutrition-table"
import FeatureGroup from "../components/bloks/feature-group"
import FaqList from "../components/bloks/faq-list"
import FaqItem from "../components/bloks/faq-item"
import Anchor from "../components/bloks/anchor"
import CustomTable from "../components/bloks/table"
import FormCognito from "../components/bloks/form-cognito"
import PageHeading from "../components/bloks/page-heading"

import { DefaultSeo } from "next-seo"
import SEO from "../next-seo.config"

import "../styles/globals.css"

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_KEY,
  use: [apiPlugin],
  components: {
    page: Page,
    "blog-post": BlogPost,
    "menu-item-page": MenuItemPage,
    // teaser: Teaser,
    grid: Grid,
    section: Section,
    "row-single-column": RowSingleColumn,
    "row-two-columns": RowTwoColumns,
    "row-three-columns": RowThreeColumns,
    card: Card,
    heading: Heading,
    "rich-text-basic": RichTextBasic,
    button: Button,
    "button-group": ButtonGroup,
    "heading-group": HeadingGroup,
    image: Image,
    hero: Hero,
    "row-two-columns-cta": RowTwoColumnsCta,
    "row-big-image": RowBigImage,
    "row-testimonials": RowTestimonials,
    "row-menu-listing": RowMenuListing,
    hoagie: Hoagie,
    pizza: Pizza,
    "row-steps": RowThreeSteps,
    step: Step,
    "row-menu-teaser-one-off": RowMenuTeaserOneOff,
    "nutrition-table": NutritionTable,
    "feature-group": FeatureGroup,
    "faq-list": FaqList,
    "faq-item": FaqItem,
    anchor: Anchor,
    table: CustomTable,
    form_cognito: FormCognito,
    "page-heading": PageHeading,
    "hero-product": HeroProduct,
  },
})

// Determines if we are running on server or in client.
const isServerSideRendered = () => {
  return typeof window === "undefined"
}
/**
 * Accessibility tool - outputs to devtools console on dev only and client-side only.
 * @see https://github.com/dequelabs/axe-core-npm
 */
if (process.env.NODE_ENV !== "production" && !isServerSideRendered()) {
  // we import react-dom and @axe-core/react dynamically
  // so that we'll receive warning in our console about
  // inaccessible code.

  import("react-dom").then(ReactDOM => {
    import("@axe-core/react").then(axe => {
      axe.default(React, ReactDOM, 1000, {})
    })
  })
}

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        document.querySelector(hash).scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        })
      }, 100)
    }
  })

  return (
    <>
      <DefaultSeo {...SEO} />
      <Header />
      <main className="main">
        <Component {...pageProps} key={router.asPath} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp

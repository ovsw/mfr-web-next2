// this function takes a SB story as an argument
// and looks first for a custom OG Image on a field called seo_image
// then failing that, for a section called "hero" with a field called "background_image"
// and returns an object formatted for the ogImage "images" attribute to be used in the
// next-seo's NextSeo component openGraph prop like <NextSeo openGraph={images:[<this function's output>]} />

export default function ogImage(story) {
  // get custom og Image
  if (story.content.seo_image && story.content.seo_image.id != null) {
    return {
      url: `${story.content.seo_image.filename}/m/1200x630`,
      width: 1200,
      height: 630,
      alt: `${story.content.seo_image.alt}`,
    }
  }

  // if we don't have a custom image
  const heroSections = story.content.body.filter(section => {
    return section.component == "hero"
  })

  if (heroSections.length) {
    const heroOgImage = heroSections[0].background_image

    return {
      url: `${heroOgImage.filename}/m/1200x630`,
      width: 1200,
      height: 630,
      alt: `${heroOgImage.alt}`,
    }
  }

  // if we're on a product page and have a product hero
  const productHeroSections = story.content.body.filter(section => {
    return section.component == "hero-product"
  })

  if (productHeroSections.length) {
    const heroOgImage = productHeroSections[0].background_image

    return {
      url: `${heroOgImage.filename}/m/1200x630`,
      width: 1200,
      height: 630,
      alt: `${heroOgImage.alt}`,
    }
  }

  // if we're on a news page and have a main_image
  if (story.content.component == "blog-post") {
    const newsImage = story.content.main_image

    return {
      url: `${newsImage.filename}/m/1200x630`,
      width: 1200,
      height: 630,
      alt: `${newsImage.alt}`,
    }
  }

  return null
}

import {
  useStoryblokState,
  useStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react"

export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" })
  }

  let urlsToRevalidate = []

  const storyblokApi = useStoryblokApi()
  let { data } = await storyblokApi.get(`cdn/stories/${req.body.story_id}`)

  const story = data ? data.story : false

  const mainSlugToRegenerate = story.full_slug === "home" ? "" : story.full_slug

  urlsToRevalidate.push(mainSlugToRegenerate)

  // return res.status(200).json({
  //   message: "Secret Ok",
  //   story_id: req.body.story_id,
  //   page_slug: `/${mainSlugToRegenerate}`,
  //   urls_to_revalidate: urlsToRevalidate,
  // })

  // if (story.content.component == "blog-post") {
  //   urlsToRevalidate.push()
  // }

  try {
    // await res.unstable_revalidate(`/${mainSlugToRegenerate}`)

    await Promise.all(
      urlsToRevalidate.map(
        async url => await res.unstable_revalidate(`/${url}`)
      )
    )

    return res.json({ revalidated: true })
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating")
  }

  // FROOM SB WEBHOOK AUTH EXAMPLE

  // try {
  //   verifySignature(body, signature)
  // } catch (err) {
  //   console.log("Failure: " + err.message)
  // }

  // function verifySignature(body, signature) {
  //   // webhookSecret configured in Storyblok settings
  //   const webhookSecret = process.env.STORYBLOK_WEBHOOK_SECRET // 🙈 secrets shouldn't be in your code
  //   let bodyHmac = crypto
  //     .createHmac("sha1", webhookSecret)
  //     .update(JSON.stringify(body))
  //     .digest("hex")

  //   if (bodyHmac !== signature) {
  //     throw new Error("Signature mismatch!")
  //   }
  // }
}

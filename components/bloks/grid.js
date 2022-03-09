import { StoryblokComponent, storyblokEditable } from "@storyblok/react"

const Grid = ({ blok }) => (
  <div {...storyblokEditable(blok)} key={blok._uid}>
    <h2>{blok.headline}!</h2>
    <p>
      {blok.columns.length > 0 && (
        <div style={{ display: "flex", gap: "2em" }}>
          {blok.columns.map(column => (
            <StoryblokComponent blok={column} key={column._uid} />
          ))}
        </div>
      )}
    </p>
  </div>
)

export default Grid

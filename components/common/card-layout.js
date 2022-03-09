// a card component

// *********************************
// image - the card image
// content - card contents

const CardLayout = ({ image, content }) => {
  // console.log("card component", card)

  return (
    <div className=" my-4">
      {image ? image : <p>missing card image</p>}
      <div className="space-y-6 bg-stone-100 p-6 pt-10">
        {content ? content : "missing card content"}
      </div>
    </div>
  )
}

export default CardLayout

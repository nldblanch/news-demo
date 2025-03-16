import Card from "./Card"
import image1 from "../assets/image-retro-pcs.jpg";
import image2 from "../assets/image-top-laptops.jpg";
import image3 from "../assets/image-gaming-growth.jpg";
const CardStack = () => {
  const content = [
    {
      src: image1,
      h4: "01",
      h5: "Reviving Retro PCs",
      p: "What happens when old PCs are given modern upgrades?",
    },
    {
      src: image2,
      h4: "02",
      h5: "Top 10 Laptops of 2022",
      p: "Our best picks for various needs and budgets.",
    },
    {
      src: image3,
      h4: "03",
      h5: "The Growth of Gaming",
      p: "How the pandemic has sparked fresh opportunities.",
    },
  ]
    return (
    <>
    {content.map((content) => (
        <Card
        key={content.h4}
        src={content.src}
        h4={content.h4}
        h5={content.h5}
        p={content.p}
        />
    ))}
    </>
  )
}

export default CardStack
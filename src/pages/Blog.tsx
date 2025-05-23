import Card, {type CardProps } from "@/components/Card"
import Banner from "./section/Banner"
import HeroSection from "./section/HeroSection"
import SearchBox from "./section/SearchBox"
import { useEffect, useState } from "react"
import cardData from "@/data/cardData.json"


const Blog = () => {
  const [cards, setCards] = useState<CardProps[]>([])

  useEffect(() => {
    setCards(cardData)
  }, [])
  
  return (<>
    <HeroSection title="BLOG" />
    <Banner />
    <section className="container py-16 lg:py-20 max-w-screen-2xl mx-auto">
      <div>
        <SearchBox />
        <div className="py-10 flex flex-col lg:flex-row lg:flex-wrap gap-x-6">
          {cards.map(({id, date, images, tag, title, content, isPopular}) => (
            <Card id={id} date={date} images={images} tag={tag} title={title} content={content} isPopular={isPopular} />
          ))}
        </div>
      </div>
    </section>
  </>)
}
export default Blog;
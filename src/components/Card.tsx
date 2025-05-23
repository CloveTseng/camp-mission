
export type CardProps = {
  id: number,
  date: string,
  images: {
    mobile: string,
    desktop: string
  },
  tag: string[],
  title: string,
  content: string,
  isPopular: boolean
}

const Card = ({ images, date, tag, title, content }:CardProps) => {
return (
  <div className="lg:w-[416px] mb-8 lg:mb-10">
    <picture className="block">
      <source media="(min-width: 640px)" srcSet={images.desktop}/>
      <img src={images.mobile} alt="about-section" />
    </picture>
    <div className="pt-3">
      <time dateTime="2024/10/21" className="font-medium pb-1">{date}</time>
      <div className="flex gap-2">
        <h3 className="text-2xl leading-9 font-medium text-primary">{tag}</h3>
        <a className="badge hidden">最新文章</a>
      </div>
      <h2 className="text-7-bold mb-2">{title}</h2>
      <p className="font-medium mb-4 font-overflow text-gray-500">{content}</p>
      <button className="button-primary hover:bg-primary hover:text-white cursor-pointer">閱讀內文</button>
    </div>
  </div>
)
}
export default Card ;
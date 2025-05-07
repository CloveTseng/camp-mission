import MainSection from "./section/MainSection"

const Blog = () => {
  return (<>
    <MainSection title="BLOG" />

    {/* newArtice */}
    <section className="lg:flex border border-secondary">
      <picture>
        <source media="(min-width: 640px)" srcSet="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/About%20Section.png?raw=true" />
        <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/blog/About%20Section.png?raw=true" alt="about-section" />
      </picture>
      <div>
        <time dateTime="2024/10/21" className="font-medium mb-1">2024/10/21</time>
        <div className="flex gap-2">
          <h3 className="text-2xl font-medium text-primary">前端開發 x 職涯成長</h3>
          <span className="badge">最新文章</span>
        </div>
      </div>
    </section>
  </>)
}
export default Blog
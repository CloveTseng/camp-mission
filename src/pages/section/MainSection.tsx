type MainSectionProps = {
  title: string;
}

const MainSection = ({ title }: MainSectionProps) => {
  return (
    <main className="lg:flex">
      <picture>
        <source media="(min-width: 640px)" srcSet="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/Hero%20Section.png?raw=true" />
        <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/index/Hero%20Section.png?raw=true" alt="hero-alyse" />
      </picture>
      <hgroup className="p-6 bg-[url('https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/Hero%20Section2.png?raw=true')] flex-1 flex items-center">
        <div>
          <h1 className="text-custom-5xl md:text-custom-8xl font-black text-primary">{title}</h1>
          <h2 className="text-7-bold text-primary mt-3">前端工程師 & 職涯諮詢師</h2>
        </div>
      </hgroup>
    </main>)
}
export default MainSection
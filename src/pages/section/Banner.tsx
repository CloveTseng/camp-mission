const Banner = () => {
  return (
    <section className="lg:flex border border-secondary">
      <picture className="w-1/2">
        <source media="(min-width: 640px)" srcSet="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/About%20Section.png?raw=true" />
        <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/blog/About%20Section.png?raw=true" alt="about-section" />
      </picture>
      <div className="py-12 px-3 my-auto">
        <time dateTime="2024/10/21" className="font-medium mb-1">2024/10/21</time>
          <div className="flex gap-2 mb-2">
            <h3 className="text-2xl font-medium text-primary">前端開發 x 職涯成長</h3>
            <a className="badge">最新文章</a>
          </div>
          <h2 className="text-7-bold mb-2">自學前端不用怕：從零開始的三大關鍵</h2>
          <p className="font-medium mb-4 font-overflow lg:w-[636px]">嗨，我是 Alyse，一名前端工程師兼職涯諮詢師。一直以來，我都很喜歡在部落格分享學習與工作心得，也常有讀者問：「我想轉職/自學前端，該從哪裡開始？」其實自學的過程既自由又具挑戰性。我整理了三大關鍵，幫助你在短期內建立紮實基礎，並快速累積實戰經驗。希望能替你的前端之路帶來一些啟發與動力！</p>
        <button className="button-primary hover:bg-primary hover:text-white cursor-pointer">閱讀內文</button>
      </div>
    </section>
  )
}

export default Banner
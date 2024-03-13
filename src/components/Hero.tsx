function Hero() {
  return (
    <section className="baner-hero">
      <img src="/img/o-monster-trio.png" alt="hero-img" className="hero-img" />
      <div className="relative-1">
        <div className="banner">
          <img src="/img/zoro-hero.png" alt="" />
          <img src="/img/luffy-hero.png" alt="" />
          <img src="/img/sanji-hero.png" alt="" />
        </div>
        <p className="rectangle"></p>
        <div className="baner-content">
          <h3 className="header-3">
            THREE comrades with ambitions, ONE goal to reach their dreams.
          </h3>
          <p>
            The <strong className="golden">Golden Age</strong> of piracy has
            begun, a Journey to find the Legendary Treasure,{" "}
            <strong>ONE PIECE</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Hero;

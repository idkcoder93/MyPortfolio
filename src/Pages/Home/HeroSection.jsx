export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Alex</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Full Stack</span>{" "}
              <br />
              Developer
            </h1>
            <p className="hero--section-description">
              I'm an aspiring web developer looking for a co-op to expand my skill set. 
              <br /> Take a look at the website I have built.
            </p>
          </div>
          <button className="btn btn-primary" onClick={() => window.location = 'mailto:afridman0793@conestogac.on.ca'}>Get In Touch</button>
        </div>
        <div className="hero--section--img">
          <img src="./img/hero_img3.png" alt="Hero Section" />
        </div>
      </section>
    );
  }
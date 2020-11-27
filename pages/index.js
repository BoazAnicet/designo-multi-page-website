import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>DESIGNO</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>

      <Header />

      <main id="index">
        <section id="hero">
          <div className="container">
            <div className="hero">
              <div className="text">
                <h2
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="750"
                  data-aos-delay="100"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                >
                  Award-winning custom designs and digital branding solutions
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="750"
                  data-aos-delay="200"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                >
                  With over 10 years in the industry, we are experienced in creating fully
                  responsive websites, app design, and engaging brand experiences. Find out more
                  about our services.
                </p>
                <button
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="750"
                  data-aos-delay="300"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                >
                  LEARN MORE
                </button>
              </div>
              <div
                className="image"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="750"
                data-aos-delay="300"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
              >
                <img src="/assets/home/desktop/image-hero-phone.png" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="links">
              <Link href="/web-design">
                <a
                  className="card web-design"
                  id="span-2-rows"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="750"
                  data-aos-delay="100"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                  data-aos-anchor=".links"
                >
                  <h2>Web Design</h2>
                  <div>
                    <h3>View Projects</h3>
                    <img src="/assets/shared/desktop/icon-right-arrow.svg" alt="right arrow" />
                  </div>
                </a>
              </Link>
              <Link href="/app-design">
                <a
                  className="card app-design"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="750"
                  data-aos-delay="200"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                  data-aos-anchor=".links"
                >
                  <h2>App Design</h2>
                  <div>
                    <h3>View Projects</h3>
                    <img src="/assets/shared/desktop/icon-right-arrow.svg" alt="right arrow" />
                  </div>
                </a>
              </Link>
              <Link href="/graphic-design">
                <a
                  className="card graphic-design"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="750"
                  data-aos-delay="300"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                  data-aos-anchor=".links"
                >
                  <h2>Graphic Design</h2>
                  <div>
                    <h3>View Projects</h3>
                    <img src="/assets/shared/desktop/icon-right-arrow.svg" alt="right arrow" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div id="who-we-are">
              <div
                className="trait"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="750"
                data-aos-delay="100"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                data-aos-anchor="#who-we-are"
              >
                <div className="image">
                  <img src="/assets/home/desktop/illustration-passionate.svg" alt="" />
                </div>
                <div className="text">
                  <h3>Passionate</h3>
                  <p>
                    Each project starts with an in-depth brand research to ensure we only create
                    products that serve a purpose. We merge art, design, and technology into
                    exciting new solutions.
                  </p>
                </div>
              </div>
              <div
                className="trait"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="750"
                data-aos-delay="200"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                data-aos-anchor="#who-we-are"
              >
                <div className="image">
                  <img src="/assets/home/desktop/illustration-resourceful.svg" alt="" />
                </div>
                <div className="text">
                  <h3>Resourceful</h3>
                  <p>
                    Everything that we do has a strategic purpose. We use an agile approach in all
                    of our projects and value customer collaboration. It guarantees superior results
                    that fulfill our clients’ needs.
                  </p>
                </div>
              </div>
              <div
                className="trait"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="750"
                data-aos-delay="300"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                data-aos-anchor="#who-we-are"
              >
                <div className="image">
                  <img src="/assets/home/desktop/illustration-friendly.svg" alt="" />
                </div>
                <div className="text">
                  <h3>Friendly</h3>
                  <p>
                    We are a group of enthusiastic folks who know how to put people first. Our
                    success depends on our customers, and we strive to give them the best experience
                    a company can provide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

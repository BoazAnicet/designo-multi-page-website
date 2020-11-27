import Head from "next/head";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";

const graphics = [
  {
    img: "/assets/graphic-design/desktop/image-change.jpg",
    title: "Tim Brown",
    description: "A book cover designed for Tim Brown’s new release, ‘Change’",
  },
  {
    img: "/assets/graphic-design/desktop/image-boxed-water.jpg",
    title: "Boxed water",
    description: "A simple packaging concept made for Boxed Water",
  },
  {
    img: "/assets/graphic-design/desktop/image-science.jpg",
    title: "Science!",
    description: "A poster made in collaboration with the Federal Art Project",
  },
];

export default function GraphicDesign() {
  function renderGraphics() {
    return graphics.map((site, i) => {
      return (
        <div
          className="design"
          key={i}
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="750"
          data-aos-delay={(i + 1) * 100}
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          data-aos-anchor="#designs"
        >
          <img src={site.img} />
          <div className="text">
            <h3>{site.title}</h3>
            <p>{site.description}</p>
          </div>
        </div>
      );
    });
  }

  return (
    <>
      <Head>
        <title>DESIGNO | Graphic Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main id="graphic-design">
        <section>
          <div className="container" id="graphic-container">
            <div className="page-header" id="graphic-design">
              <h1>Graphic Design</h1>
              <p>
                We deliver eye-catching branding materials that are tailored to meet your business
                objectives.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div id="graphics">{renderGraphics()}</div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="links">
              <Link href="/app-design">
                <a
                  className="card app-design"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="750"
                  data-aos-delay="100"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                  data-aos-anchor=".links"
                >
                  <h2>App Design</h2>
                  <div>
                    <h3>View Projects</h3>
                    <img src="/assets/shared/desktop/icon-right-arrow.svg" alt="" />
                  </div>
                </a>
              </Link>
              <Link href="/web-design">
                <a
                  className="card graphic-design"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="750"
                  data-aos-delay="200"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                  data-aos-anchor=".links"
                >
                  <h2>Web Design</h2>
                  <div>
                    <h3>View Projects</h3>
                    <img src="/assets/shared/desktop/icon-right-arrow.svg" alt="" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

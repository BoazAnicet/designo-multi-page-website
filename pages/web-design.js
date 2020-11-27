import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import Link from "next/link";

const websites = [
  {
    img: "/assets/web-design/desktop/image-express.jpg",
    title: "Express",
    description: "A multi-carrier shipping website for ecommerce businesses",
  },
  {
    img: "/assets/web-design/desktop/image-transfer.jpg",
    title: "Transfer",
    description: "Site for low-cost money transfers and sending money within seconds",
  },
  {
    img: "/assets/web-design/desktop/image-photon.jpg",
    title: "Photon",
    description: "A state-of-the-art music player with high-resolution audio and DSP effects",
  },
  {
    img: "/assets/web-design/desktop/image-builder.jpg",
    title: "Builder",
    description: "Connects users with local contractors based on their location",
  },
  {
    img: "/assets/web-design/desktop/image-blogr.jpg",
    title: "Blogr",
    description: "Blogr is a platform for creating an online blog or publication",
  },
  {
    img: "/assets/web-design/desktop/image-camp.jpg",
    title: "Camp",
    description: "Get expert training in coding, data, design, and digital marketing",
  },
];

export default function WebDesign() {
  function renderDesigns() {
    return websites.map((site, i) => {
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
        <title>DESIGNO | Web Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main id="web-design">
        <section>
          <div className="container" id="web-container">
            <div className="page-header" id="web-design">
              <h1>Web Design</h1>
              <p>
                We build websites that serve as powerful marketing tools and bring memorable brand
                experiences.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div id="designs">{renderDesigns()}</div>
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
              <Link href="graphic-design">
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
                  <h2>Graphic Design</h2>
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

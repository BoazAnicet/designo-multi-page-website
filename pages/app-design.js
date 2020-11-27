import Head from "next/head";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";

const apps = [
  {
    img: "/assets/app-design/desktop/image-airfilter.jpg",
    title: "Airfilter",
    description: "Solving the problem of poor indoor air quality by filtering the air",
  },
  {
    img: "/assets/app-design/desktop/image-eyecam.jpg",
    title: "Eyecam",
    description: "Product that lets you edit your favorite photos and videos at any time",
  },
  {
    img: "/assets/app-design/desktop/image-faceit.jpg",
    title: "Faceit",
    description: "Get to meet your favorite internet superstar with the faceit app",
  },
  {
    img: "/assets/app-design/desktop/image-todo.jpg",
    title: "Todo",
    description: "A todo app that features cloud sync with light and dark mode",
  },
  {
    img: "/assets/app-design/desktop/image-loopstudios.jpg",
    title: "Loopstudios",
    description: "A VR experience app made for Loopstudios",
  },
];

export default function AppDesign() {
  function renderApps() {
    return apps.map((site, i) => {
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
        <title>DESIGNO | App Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main id="app-design">
        <section>
          <div className="container" id="app-container">
            <div className="page-header" id="app-design">
              <h1>App Design</h1>
              <p>
                Our mobile designs bring intuitive digital solutions to your customers right at
                their fingertips.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div id="apps">{renderApps()}</div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="links">
              <Link href="/web-design">
                <a
                  className="card web-design"
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
                    <img src="/assets/shared/desktop/icon-right-arrow.svg" alt="" />
                  </div>
                </a>
              </Link>
              <Link href="/graphic-design">
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

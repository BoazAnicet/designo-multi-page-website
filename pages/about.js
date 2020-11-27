import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";

const locations = [
  {
    img: "/assets/shared/desktop/illustration-canada.svg",
    alt: "Canada",
    title: "CANADA",
  },
  {
    img: "/assets/shared/desktop/illustration-australia.svg",
    alt: "Australia",
    title: "AUSTRALIA",
  },
  {
    img: "/assets/shared/desktop/illustration-united-kingdom.svg",
    alt: "United Kingdom",
    title: "UNITED KINGDOM",
  },
];

export default function About() {
  function renderLoations() {
    return locations.map((location, i) => {
      return (
        <div
          className="location"
          key={i}
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="750"
          data-aos-delay={(i + 1) * 100}
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          data-aos-anchor=".locations"
        >
          <div className="image">
            <img src={location.img} alt={location.alt} />
          </div>
          <h3>{location.title}</h3>
          <button>SEE LOCATION</button>
        </div>
      );
    });
  }

  return (
    <>
      <Head>
        <title>DESIGNO | About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main id="about">
        <section id="hero_section">
          <div className="container">
            <div className="hero">
              <div className="text">
                <h1
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="750"
                  data-aos-delay="100"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                >
                  About Us
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="750"
                  data-aos-delay="200"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                >
                  Founded in 2010, we are a creative agency that produces lasting results for our
                  clients. We’ve partnered with many startups, corporations, and nonprofits alike to
                  craft designs that make real impact. We’re always looking forward to creating
                  brands, products, and digital experiences that connect with our clients'
                  audiences.
                </p>
              </div>

              <img src="/assets/about/tablet/image-about-hero.jpg" alt="" />
            </div>
          </div>
        </section>

        <section id="world-class-talent_section">
          <div className="container">
            <div className="world-class-talent">
              <img
                src="/assets/about/desktop/image-world-class-talent.jpg"
                alt="World-class Talent"
              />
              <div className="text">
                <h1
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="750"
                  data-aos-delay="100"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                >
                  World-class talent
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="750"
                  data-aos-delay="200"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                >
                  We are a crew of strategists, problem-solvers, and technologists. Every design is
                  thoughtfully crafted from concept to launch, ensuring success in its given market.
                  We are constantly updating our skills in a myriad of platforms.
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="750"
                  data-aos-delay="300"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                >
                  Our team is multi-disciplinary and we are not merely interested in form — content
                  and meaning are just as important. We give great importance to craftsmanship,
                  service, and prompt delivery. Clients have always been impressed with our
                  high-quality outcomes that encapsulates their brand’s story and mission.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="locations">{renderLoations()}</div>
          </div>
        </section>

        <section id="real-deal_section">
          <div className="container">
            <div className="real-deal">
              <div className="text">
                <h1
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="750"
                  data-aos-delay="100"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                >
                  The real deal
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="750"
                  data-aos-delay="200"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                >
                  As strategic partners in our clients’ businesses, we are ready to take on any
                  challenge as our own. Solving real problems require empathy and collaboration, and
                  we strive to bring a fresh perspective to every opportunity. We make design and
                  technology more accessible and give you tools to measure success.
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="750"
                  data-aos-delay="300"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                >
                  We are visual storytellers in appealing and captivating ways. By combining
                  business and marketing strategies, we inspire audiences to take action and drive
                  real results.
                </p>
              </div>
              <img src="/assets/about/desktop/image-real-deal.jpg" alt="World-class Talent" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

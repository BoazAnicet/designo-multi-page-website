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

export default function Contact() {
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
        <title>DESIGNO | Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main id="contact">
        <section id="contact_section">
          <div className="container">
            <div className="contact-form">
              <div className="text">
                <h1
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="750"
                  data-aos-delay="100"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                >
                  Contact Us
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="750"
                  data-aos-delay="200"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                >
                  Ready to take it to the next level? Let’s talk about your project or idea and find
                  out how we can help your business grow. If you are looking for unique digital
                  experiences that’s relatable to your users, drop us a line.
                </p>
              </div>
              <form onSubmit={(e) => e.preventDefault()}>
                <div
                  className="input-group"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="750"
                  data-aos-delay="100"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                >
                  <label htmlFor="name">
                    <input id="name" name="name" type="text" placeholder="Name" required />
                    <span className="border" />
                    <span className="error-empty">
                      <em>Can't be empty</em>
                      <img src="/assets/contact/desktop/icon-error.svg" alt="Error!" />
                    </span>
                  </label>
                </div>
                <div
                  className="input-group"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="750"
                  data-aos-delay="200"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                >
                  <label htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      required="required"
                    />
                    <span className="border" />
                    <span className="error-empty">
                      <em>Can't be empty</em>
                      <img src="/assets/contact/desktop/icon-error.svg" alt="Error!" />
                    </span>
                  </label>
                </div>
                <div
                  className="input-group"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="750"
                  data-aos-delay="300"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                >
                  <label htmlFor="phone">
                    <input id="phone" name="phone" type="phone" placeholder="Phone" />
                    <span className="border" />
                  </label>
                </div>
                <div
                  className="input-group"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="750"
                  data-aos-delay="400"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                >
                  <label htmlFor="name">
                    <textarea
                      id="message"
                      name="message"
                      type="message"
                      placeholder="Your Message"
                      rows={5}
                      required
                    />
                    <span className="border" />
                    <span className="error-empty">
                      <em>Can't be empty</em>
                      <img src="/assets/contact/desktop/icon-error.svg" alt="Error!" />
                    </span>
                  </label>
                </div>
                <button
                  type="submit"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="750"
                  data-aos-delay="500"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="locations">{renderLoations()}</div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

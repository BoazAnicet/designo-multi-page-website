import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";

const locations = [
  {
    country: "Canada",
    address: {
      name: "Designo Central Office",
      street: "3886 Wellington Street",
      city: "Toronto, Ontario M9C 3J5",
    },

    contact: {
      phone: "P : +1 253-863-8967",
      email: "M : contact@designo.co",
    },
    img: "/assets/locations/desktop/image-map-canada.png",
  },
  {
    country: "Australia",
    address: {
      name: "Designo AU Office",
      street: "19 Balonne Street",
      city: "New South Wales 2443",
    },

    contact: {
      phone: "P : (02) 6720 9092",
      email: "M : contact@designo.au",
    },
    img: "/assets/locations/desktop/image-map-australia.png",
  },
  {
    country: "United Kingdom",
    address: {
      name: "Designo UK Office",
      street: "13 Colorado Way",
      city: "Rhyd-y-fro SA8 9GA",
    },

    contact: {
      phone: "P : 078 3115 1400",
      email: "M : contact@designo.uk",
    },
    img: "/assets/locations/desktop/image-map-united-kingdom.png",
  },
];

export default function GraphicDesign() {
  function renderLocations() {
    return locations.map((location, i) => {
      return (
        <div className="location" key={i}>
          {(i + 2) % 2 !== 0 ? (
            <div
              className="image"
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <img src={location.img} alt={location.country} />
            </div>
          ) : (
            ""
          )}
          <div className="text">
            <div>
              <h2
                data-aos="fade-right"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="750"
                data-aos-delay="100"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
              >
                {location.country}
              </h2>
              <div className="contact-info">
                <div
                  data-aos="fade-right"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="750"
                  data-aos-delay="200"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                >
                  <h4>{location.address.name}</h4>
                  <p>
                    {location.address.street}
                    <br />
                    {location.address.city}
                  </p>
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="750"
                  data-aos-delay="300"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                >
                  <h4>Contact</h4>
                  <p>
                    {location.contact.phone}
                    <br />
                    {location.contact.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {(i + 2) % 2 === 0 ? (
            <div
              className="image"
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <img src={location.img} alt={location.country} />
            </div>
          ) : (
            ""
          )}
        </div>
      );
    });
  }

  return (
    <>
      <Head>
        <title>DESIGNO | Locations</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main id="locations_section">
        <section>
          <div className="container">
            <div className="locations">{renderLocations()}</div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

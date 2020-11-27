import React, { useState, useEffect } from "react";
import Link from "next/link";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let body = document.getElementsByTagName("body")[0];

    if (menuOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [menuOpen]);

  function handleMenuClick() {
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  }

  return (
    <header className="navbar">
      <div className="container">
        <nav>
          <Link href="/">
            <a className="logo">
              <img src="/assets/shared/desktop/logo-dark.png" alt="DESIGNO" />
            </a>
          </Link>
          <ul className="links">
            <li>
              <Link href="/about">
                <a>OUR COMPANY</a>
              </Link>
            </li>
            <li>
              <Link href="/locations">
                <a>LOCATIONS</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>CONTACT</a>
              </Link>
            </li>
          </ul>
          <div className="menu-icon" onClick={() => handleMenuClick()}>
            {!menuOpen ? (
              <img src="/assets/shared/mobile/icon-hamburger.svg" />
            ) : (
              <img src="/assets/shared/mobile/icon-close.svg" />
            )}
          </div>
        </nav>
      </div>
      {menuOpen ? (
        <div className="menu">
          <ul className="menu-links">
            <li>
              <Link href="/about">
                <a
                  onClick={() => setMenuOpen(false)}
                  data-aos="fade-right"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="750"
                  data-aos-delay="100"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                >
                  <h2>OUR COMPANY</h2>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/locations">
                <a
                  onClick={() => setMenuOpen(false)}
                  data-aos="fade-right"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="750"
                  data-aos-delay="200"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                >
                  <h2>LOCATIONS</h2>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a
                  onClick={() => setMenuOpen(false)}
                  data-aos="fade-right"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="750"
                  data-aos-delay="300"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                >
                  <h2>CONTACT</h2>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </header>
  );
}

export default Header;

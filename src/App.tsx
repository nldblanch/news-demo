import logo from "./assets/logo.svg";
import banner from "./assets/image-web-3-desktop.jpg";
import mobile_banner from "./assets/image-web-3-mobile.jpg";
import nav_button from "./assets/icon-menu.svg";
import nav_close_button from "./assets/icon-menu-close.svg";
import "./App.css";
import "./Mobile.css";
import CardStack from "./components/CardStack";
import { useState } from "react";

function NavLink({ name }: { name: string }) {
  return <li>{name}</li>;
}

function MobileNav() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <button
        className="mobile-nav-button-open"
        type="button"
        onClick={() => setShowNav(true)}
      >
        <img src={nav_button} />
      </button>
      {showNav && (
        <>
          <div className="overlay" />
          <nav className="mobile-nav">
            <button
              className="mobile-nav-button-close"
              type="button"
              onClick={() => setShowNav(false)}
            >
              <img src={nav_close_button} />
            </button>
            <ul>
              {["Home", "New", "Popular", "Trending", "Categories"].map((l) => (
                <NavLink key={l} name={l} />
              ))}
            </ul>
          </nav>
        </>
      )}
    </>
  );
}

function DesktopNav() {
  return (
    <nav className="desktop-nav">
      <ul>
        {["Home", "New", "Popular", "Trending", "Categories"].map((l) => (
          <NavLink key={l} name={l} />
        ))}
      </ul>
    </nav>
  );
}

function Banner() {
  return (
    <>
      <div className="banner">
        <img src={banner} />
      </div>
      <div className="mobile-banner">
        <img src={mobile_banner} />
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <header>
        <img src={logo} />
        <DesktopNav />

        <MobileNav />
      </header>
      <main>
        <Banner />
        <h1>The Bright Future of Web 3.0?</h1>
        <section className="main-article">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button>Read more</button>
        </section>
        <section className="featured-articles">
          <h2>New</h2>
          <hgroup>
            <h3>Hydrogen VS Electric Cars</h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </hgroup>
          <hgroup>
            <h3>The Downsides of AI Artistry</h3>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </hgroup>
          <hgroup>
            <h3>Is VC Funding Drying Up?</h3>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </hgroup>
        </section>
        <CardStack />
      </main>
    </>
  );
}

export default App;

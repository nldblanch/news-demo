import logo from "./assets/logo.svg";

import nav_button from "./assets/icon-menu.svg";
import nav_close_button from "./assets/icon-menu-close.svg";
import "./App.css";
import "./Mobile.css";
import CardStack from "./components/CardStack";
import { useState } from "react";
import Banner from "./components/Banner";
import Featured from "./components/Featured";

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
        <Featured />
        <CardStack />
      </main>
    </>
  );
}

export default App;

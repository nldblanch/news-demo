import banner from "../assets/image-web-3-desktop.jpg";
import mobile_banner from "../assets/image-web-3-mobile.jpg";

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

export default Banner;

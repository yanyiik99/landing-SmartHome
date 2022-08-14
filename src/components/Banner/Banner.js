import NavbarApp from "../Navbar/NavbarApp";
import ContentBanner from "./ContentBanner";
import './Banner.css'

const Banner  = () => {
  return(
    <div className="banner">
      <NavbarApp />
      <ContentBanner />
    </div>
  );
}

export default Banner;
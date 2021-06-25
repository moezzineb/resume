import Head from "next/head";
import SideBar from "./SideBar";
import HeadSlide from "./Head";
import About from "./About";
import Exp from "./Exp";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Testmonials from "./Testmonials";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Moez ZINEB | Full-Stack Developer</title>
        <meta
          name="description"
          content="My name is Moez ZINEB and I'm a Full-stack developer from Tunisia, I've graduated in juin
              2016 but i've built my skills for more than 4 years by worked on
              good projects."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="shortcut icon"
          href="images/favicon.png"
          type="image/x-icon"
        />
        <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="css/bootstrap.css" />
        <link rel="stylesheet" href="css/fontawesome.css" />
        <link rel="stylesheet" href="css/fontastic.css" />
        <link rel="stylesheet" href="css/lity.css" />
        <link rel="stylesheet" href="css/animate.css" />
        <link rel="stylesheet" href="css/owl.carousel.css" />
        <link rel="stylesheet" href="css/sweetalert.css" />
        <link rel="stylesheet" href="css/whatsapp.css" />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/side-menu.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600%7CRaleway:300,400,500,600,700,800"
          rel="stylesheet"
        />
      </Head>
      <div id="loader-wrapper">
        <div className="world">
          <img src="images/loader.svg" alt="" />
        </div>
      </div>
      <SideBar />
      <div className="right-side-area">
        <HeadSlide />
        <About />
        <Exp />
        <Services />
        <Portfolio />
        <Testmonials />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

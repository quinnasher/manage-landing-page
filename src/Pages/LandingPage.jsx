import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import OurService from "../components/OurService.jsx";
import ourServiceData from "../data/ourServiceData.js";
import testimonialData from "../data/testimonialData.js";
import Testimonial from "../components/Testimonial.jsx";

function LandingPage() {
  return (
    <div className={" relative mx-auto mt-4 w-375 md:w-1300"}>
      {/*  Absolute positioning is used to add background images to follow the design. A more
       efficient way might be available, but this is the method I can implement*/}
      {/*<div*/}
      {/*  className={*/}
      {/*    "bg-tablet-pattern md:w-450px absolute -right-8 -top-32 -z-40 h-[400px] w-[340px] bg-cover bg-left bg-no-repeat md:-right-0 md:-top-52 md:h-[450px]"*/}
      {/*  }*/}
      {/*></div>{" "}*/}
      {/*<div*/}
      {/*  className={*/}
      {/*    "bg-tablet-pattern absolute -right-40 top-[30rem] -z-50 h-[400px] w-[340px] bg-cover bg-left bg-no-repeat md:-left-36 md:bottom-52 md:h-[450px] md:w-450"*/}
      {/*  }*/}
      {/*></div>*/}
      <div className={"mx-auto w-340 md:w-1100"}>
        <Header />

        {/*    Services section*/}
        {ourServiceData.map((service, index) => (
          // eslint-disable-next-line react/jsx-key
          <div className={index !== ourServiceData.length - 1 ? "mb-9 " : ""}>
            <OurService service={service} />
          </div>
        ))}
      </div>
      <div>
        <Testimonial testimonial={testimonialData} />
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;

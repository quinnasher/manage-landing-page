import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Value from "../components/Value.jsx";
import values from "../data/values.js";
import testimonials from "../data/testimonials.js";
import Testimonial from "../components/Testimonial.jsx";

function LandingPage() {
  return (
    <div className={" relative mx-auto w-375 overflow-hidden pt-4 md:w-1300"}>
      {/*Absolute positioning is used to add background images to follow the*/}
      {/*design. A more efficient way might be available, but this is the method I*/}
      {/*can implement*/}
      <div
        className={
          "bg-tablet-pattern md:w-450px absolute -right-8 -top-32 -z-40 h-[400px] w-[340px] bg-cover bg-left bg-no-repeat md:-right-0 md:-top-52 md:h-[450px]"
        }
      ></div>{" "}
      <div
        className={
          "bg-tablet-pattern absolute -right-40 top-[30rem] -z-50 h-[400px] w-[340px] bg-cover bg-left bg-no-repeat md:-left-36 md:bottom-52 md:h-[450px] md:w-450"
        }
      ></div>
      <div className={"mx-auto w-340 md:w-1100"}>
        <Header />

        {/*    Services section*/}
        <Value values={values} />
      </div>
      <div>
        <Testimonial testimonial={testimonials} />
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;

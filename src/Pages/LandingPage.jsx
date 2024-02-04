import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Value from "../components/Value.jsx";
import values from "../data/values.js";
import testimonials from "../data/testimonials.js";
import Testimonial from "../components/Testimonial.jsx";
import Unique from "../components/Unique.jsx";
import uniqueProps from "../data/uniqueProps.js";
import visionProps from "../data/visionProps.js";
import Vision from "../components/Vision.jsx";
import chartImg from "../images/illustration-intro.svg";
import Chart from "../components/Chart.jsx";

function LandingPage() {
  return (
    <div className={" relative mx-auto w-375 overflow-hidden pt-4 md:w-full"}>
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
        <div className={"mb-14 md:mb-24"}>
          <Header />
        </div>

        <div className={"mb-14 flex flex-col-reverse md:mb-24 md:flex-row"}>
          <div>
            <Vision vision={visionProps} />
          </div>

          <div>
            <Chart image={chartImg} />
          </div>
        </div>
        <div
          className={
            "mb-14 flex flex-col justify-between gap-12 md:mb-24 md:flex-row md:gap-0"
          }
        >
          <div className={""}>
            <Unique uniqueProps={uniqueProps} />
          </div>
          <div className={""}>
            <Value values={values} />
          </div>
        </div>
      </div>
      <div>
        <div className={"mb-14 md:mb-24"}>
          <Testimonial testimonial={testimonials} />
        </div>
        <div className={""}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

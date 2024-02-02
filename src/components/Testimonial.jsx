import { useEffect, useState } from "react";

function Testimonial(props) {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  function previousTestimonial() {
    setTestimonialIndex((index) => {
      // eslint-disable-next-line react/prop-types
      if (testimonialIndex === 0) return props.testimonial.length - 1;
      else return testimonialIndex - 1;
    });
  }

  function nextTestimonial() {
    setTestimonialIndex((index) => {
      if (testimonialIndex === props.testimonial.length - 1) return 0;
      else return testimonialIndex - 1;
    });
  }

  // Set up an interval to change the testimonial every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 3000);
    // Clear the interval when the component unmounts or the index changes
    return () => clearInterval(interval);
  }, [testimonialIndex]);

  return (
    <div className={"flex flex-col  gap-12 md:flex-row"}>
      {/* eslint-disable-next-line react/prop-types */}
      {props.testimonial.map((testimonial) => (
        <section
          className={
            "md:w-400 relative mx-auto flex w-360 flex-col items-center justify-center bg-VeryLightGray px-6 py-12"
          }
          key={testimonial.id}
        >
          <img
            className={"absolute -top-7 h-14 w-14 rounded-full"}
            src={testimonial.image}
            alt=""
          />
          <h2 className={"mb-6 font-700"}>{testimonial.name}</h2>
          <div>
            <p
              className={
                "text-center leading-normal tracking-normal text-darkGrayishBlue"
              }
            >
              {testimonial.testimony}
            </p>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Testimonial;

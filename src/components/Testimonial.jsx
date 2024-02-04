import { useEffect, useState } from "react";

function Testimonial(props) {
  const testimonial = props.testimonial;
  const isMobile = window.innerWidth <= 400;
  const [indices, setIndices] = useState(() => (isMobile ? [0] : [0, 1, 2]));

  function nextTestimonial() {
    const newIndices = indices.map((index) =>
      index === testimonial.length - 1 ? 0 : index + 1,
    );
    setIndices(newIndices);
  }

  function previousTestimonial() {
    const newIndices = indices.map((index) =>
      index === 0 ? testimonial.length - 1 : index - 1,
    );

    setIndices(newIndices);
  }

  useEffect(() => {
    if (!isMobile) {
      setTimeout(() => {
        nextTestimonial();
      }, 7000);
    }
  }, [indices, isMobile, nextTestimonial]);

  return (
    <div>
      <div
        className={"relative flex w-full  flex-col justify-between md:flex-row"}
      >
        {indices.map((index) => (
          <section
            key={index}
            className={
              "md:w-420 w-350 relative mx-auto mb-6 flex flex-col items-center justify-center bg-VeryLightGray px-6 py-12 md:mx-0 md:mb-20 md:px-10"
            }
          >
            <img
              className={"absolute -top-7 h-14 w-14 rounded-full"}
              src={testimonial[index].image}
              alt=""
            />

            <h3 className={"mb-6 font-700"}>{testimonial[index].name}</h3>
            <p
              className={
                "text-center leading-normal tracking-normal text-darkGrayishBlue"
              }
            >
              {testimonial[index].testimony}
            </p>
          </section>
        ))}
      </div>

      <div className={"flex flex-col "}>
        <div className={"mx-auto flex justify-center gap-2 md:hidden"}>
          {testimonial.map((_, index) => (
            <button
              key={index}
              onClick={() => setIndices([index])}
              className={
                "h-2 w-2 rounded-full border-2 border-brightRed hover:border-0  hover:bg-brightRed"
              }
            ></button>
          ))}
        </div>
        <button className={"btn mx-auto mt-10  md:-mt-10"}>Get Started</button>
      </div>
    </div>
  );
}

export default Testimonial;

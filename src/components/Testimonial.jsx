function Testimonial(props) {
  function previousImage() {}

  function nextImage() {}

  return (
    <div>
      {/* eslint-disable-next-line react/prop-types */}
      {props.testimonial.map((testimonial) => (
        <section
          className={
            "md:w-400 relative mx-auto mb-8 flex w-360 flex-col items-center justify-center bg-VeryLightGray px-6 py-12"
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
            <p className={"text-center leading-relaxed tracking-normal"}>
              {testimonial.testimony}
            </p>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Testimonial;

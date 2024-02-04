function Vision(props) {
  return (
    <div>
      {/* eslint-disable-next-line react/prop-types */}
      {props.vision.map((item, index) => (
        <section
          className={"max-w-xs text-center md:max-w-lg md:text-left"}
          key={index}
        >
          <h1
            className={
              "mb-4 text-4xl  font-700 leading-normal md:mb-6 md:text-left md:text-6xl md:leading-none"
            }
          >
            {item.h1}
          </h1>
          <p
            className={
              "text-lg text-darkGrayishBlue md:max-w-[350px] md:text-left"
            }
          >
            {item.p}
          </p>
        </section>
      ))}
    </div>
  );
}

export default Vision;

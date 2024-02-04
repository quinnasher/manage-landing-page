function Unique(props) {
  const uniqueProps = props.uniqueProps;

  return (
    <div>
      {/* eslint-disable-next-line react/prop-types */}
      {uniqueProps.map((item, index) => (
        <section className={"max-w-lg"} key={index}>
          <h2
            className={
              " text-center text-4xl font-700 leading-normal md:text-left  md:leading-10"
            }
          >
            {item.h2}
          </h2>
          <p
            className={
              "max-w-xs text-center leading-loose  text-darkGrayishBlue md:text-left"
            }
          >
            {item.p}
          </p>
        </section>
      ))}
    </div>
  );
}

export default Unique;

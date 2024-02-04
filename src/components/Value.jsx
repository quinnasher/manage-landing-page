function Value(props) {
  return (
    <div className={"flex flex-col gap-8"}>
      {/* eslint-disable-next-line react/prop-types */}
      {props.values.map((value, index) => (
        // eslint-disable-next-line react/jsx-key
        // <div className={index !== props.values.length - 1 ? "mb-9 " : ""}>
        //     <Value service={service}/>
        // </div>

        <section
          key={index}
          className={"relative ml-auto flex w-360 gap-12 md:mx-0 md:ml-auto"}
        >
          <span className={"btn absolute md:-left-20 md:top-0"}>
            {value.number}
          </span>

          <div className={"flex flex-col gap-3  "}>
            <div className={"rounded-l-3xl bg-veryPaleRed md:bg-transparent"}>
              <h2 className={"ml-18  w-300 py-2  font-700 md:ml-0"}>
                {value.tittle}
              </h2>
            </div>

            <p
              className={
                "mr-2 leading-loose tracking-wide text-darkGrayishBlue md:mr-0"
              }
            >
              {value.content}
            </p>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Value;

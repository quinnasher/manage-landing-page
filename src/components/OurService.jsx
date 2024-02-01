function OurService(props) {
  const { tittle, number, content } = props.service;
  return (
    <section className={"relative ml-auto w-360 md:mx-0 md:ml-auto"}>
      <span className={"btn absolute md:-left-20 md:top-0"}>{number}</span>

      <div className={"flex flex-col gap-3  "}>
        <div className={"rounded-l-3xl bg-veryPaleRed md:bg-transparent"}>
          <h2 className={"ml-18 w-300 py-2  font-700 md:ml-0"}>{tittle}</h2>
        </div>

        <p
          className={
            "mr-2 leading-loose tracking-wide text-darkGrayishBlue md:mr-0"
          }
        >
          {content}
        </p>
      </div>
    </section>
  );
}

export default OurService;

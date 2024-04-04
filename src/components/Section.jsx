const Section = ({ heading, text, image, reverse  }) => {
    const flexClass = reverse ? "lg:flex-row" : "lg:flex-row-reverse";
  return (
    <section className={`flex flex-col ${flexClass} lg:items-center gap-10 lg:gap-16 mb-10 border-2 rounded-xl shadow-lg py-10 px-6 lg:px-16`}>
      <div>
        <img src={image} alt="" />
      </div>
      <article className="text-center lg:text-left">
        <h2 className="text-veryDarkCyan mb-8 text-2xl">{heading}</h2>
        <p className="text-grayishBlue text-md">{text}</p>
      </article>
    </section>
  );
};

export default Section;

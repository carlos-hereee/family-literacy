import Hero from "../atoms/Hero";

const CardHeader = ({ data }) => {
  return (
    <div className="card-header">
      {!data.hero.isEmpty && <Hero data={data.hero} />}
      <h3 className="title">{data.title}</h3>
      <p>{data.description}</p>
    </div>
  );
};

export default CardHeader;

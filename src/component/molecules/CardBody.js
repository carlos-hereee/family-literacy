import Hero from "../atoms/Hero";

const CardBody = ({ data }) => {
  return (
    <div className="card-body">
      {!data.hero.isEmpty && <Hero data={data.hero} />}
      <h3 className="card-body-title">{data.title}</h3>
      {data.description && <p>{data.description}</p>}
    </div>
  );
};

export default CardBody;

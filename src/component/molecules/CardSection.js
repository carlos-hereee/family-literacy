import CardSectionBody from "../atoms/CardSectionBody";
import Hero from "../atoms/Hero";

const CardSection = ({ data }) => {
  return (
    <div className="card-section">
      {!data.hero.isEmpty && <Hero data={data.hero} />}
      <h3 className="card-section-title">{data.title}</h3>
      {data.section.length > 0 &&
        data.section.map((s) => <CardSectionBody data={s} key={s.uid} />)}
    </div>
  );
};

export default CardSection;

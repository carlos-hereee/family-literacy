import Answer from "../molecules/Answer";
import CardHeader from "../molecules/CardHeader";

const Card = ({ data, handleClick }) => {
  return (
    <div className="card">
      <CardHeader data={data} />
      <div className="card-body">
        {data.answers.map((answer) => (
          <Answer data={answer} key={answer.uid} />
        ))}
      </div>
    </div>
  );
};

export default Card;

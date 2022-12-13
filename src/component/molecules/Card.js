// import Photo from "../atoms/Photo";
// import ReadMore from "./ReadMore";

const Card = ({ data, handleClick }) => {
  return (
    <div className="card">
      <div className="wrapper">
        <div className="title">
          <h3>{data.question}</h3>
        </div>
        <div className="description">{data.description}</div>
      </div>
      <div className="card-body">
        {data.answers &&
          data.answers.map((a) => (
            <div key={a.uid}>
              <p>{a.response}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Card;

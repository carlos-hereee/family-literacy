// import Photo from "../atoms/Photo";
// import ReadMore from "./ReadMore";

import HyperLinkText from "../atoms/HyperLinkText";

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
          data.answers.map((a) =>
            a.hyperlink.isEmpty ? (
              <p key={a.uid}>{a.response}</p>
            ) : (
              <HyperLinkText data={a} />
            )
          )}
      </div>
    </div>
  );
};

export default Card;

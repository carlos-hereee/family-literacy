import HyperLinkText from "../atoms/HyperLinkText";

const Card = ({ data, handleClick }) => {
  return (
    <div className="card">
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

import Hero from "../atoms/Hero";
import HyperLinkText from "../atoms/HyperLinkText";

const Answer = ({ data }) => {
  const { hyperlink, response, hero } = data;
  const { word, src } = hyperlink;
  const responseArr = response.split(word);
  return (
    <div className="answers">
      {!hero.isEmpty && <Hero data={hero} />}
      {hyperlink.isEmpty ? (
        <p>{response}</p>
      ) : (
        <HyperLinkText data={{ responseArr, src, word }} />
      )}
    </div>
  );
};

export default Answer;

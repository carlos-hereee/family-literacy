const HyperLinkText = ({ data }) => {
  const { hyperlink, response } = data;
  const { word, src } = hyperlink;
  const responseArr = response.split(word);
  return (
    <p>
      <span>{responseArr[0]}</span>
      <a href={src}> {word}</a>
      <span>{responseArr[1]}</span>
    </p>
  );
};

export default HyperLinkText;

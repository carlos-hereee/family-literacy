import Icons from "../atoms/Icons";

const CheckButton = ({ data, click }) => {
  return (
    <div className="check-button">
      {data.isRecurring ? <Icons name="uncheck" /> : <Icons name="check" />}
      <button onClick={click}>{data.content}</button>
    </div>
  );
};

export default CheckButton;

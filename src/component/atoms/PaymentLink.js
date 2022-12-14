import Icons from "./Icons";

const PaymentLink = ({ data }) => {
  const { name, isEmpty } = data;

  return (
    <a className="payment-link" href={isEmpty ? "/#" : name} data-state={name}>
      <Icons name={name} size="2x" />
      {name}
    </a>
  );
};

export default PaymentLink;

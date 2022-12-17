import Icons from "./Icons";

const PaymentLink = ({ data }) => {
  const { name, isEmpty, src } = data;
  return (
    <a className="payment-link" href={isEmpty ? "/#" : src} data-state={name}>
      <Icons name={name} size="2x" />
      {name}
    </a>
  );
};

export default PaymentLink;

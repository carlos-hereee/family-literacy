import Icons from "../atoms/Icons";

const ContactLink = ({ data }) => {
  return (
    <div className="contact-link">
      <Icons name={data.icon} size="2x" />
      <div>
        <h3 className="title">{data.title}</h3>
        <address>
          {data.icon === "email" ? (
            <a href={`mailto:${data.description}`}>{data.description} </a>
          ) : data.icon === "phone" ? (
            <a href={`tel:${data.description}`}>{data.description} </a>
          ) : data.icon === "business" ? (
            <a href={`https://maps.google.com/?q=${data.address}`}>
              {data.description}
            </a>
          ) : (
            <p>{data.description}</p>
          )}
        </address>
      </div>
    </div>
  );
};

export default ContactLink;

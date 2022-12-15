import Icons from "../atoms/Icons";

const ContactLink = ({ data }) => {
  return (
    <div className="contact-link">
      <Icons name={data.icon} size="2x" />
      <div>
        <h3 className="title">{data.title}</h3>
        {data.icon === "email" && (
          <a href={`mailto:${data.description}`}> {data.description} </a>
        )}
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default ContactLink;

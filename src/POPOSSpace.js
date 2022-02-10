import './POPOSSpace.css';

const POPOSSpace = (props) => {
  const {name, image, address, time} = props
  return (
    <div>
      <h1>{name}</h1>
      <img
        src={`${process.env.PUBLIC_URL}/images/${image}`}
        width={200}
        height={200}
        alt="Hello"
      />
      <div>{address}</div>
      <div className="Time">{time}</div>
    </div>
  );
};

export default POPOSSpace;

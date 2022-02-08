const POPOSSpace = (props) => {
  const {name, image, address} = props
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/images/${image}`}
        width={200}
        height={200}
        alt="Hello"
      />
      <h1>{name}</h1>
      <div>{address}</div>
    </div>
  );
};

export default POPOSSpace;

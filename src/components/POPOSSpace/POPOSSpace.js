import './POPOSSpace.css';
import { Link } from 'react-router-dom'

const POPOSSpace = (props) => {
  const { name, image, address, time, id} = props
  return (
    <div>
      <h1>
        <Link to = {`/details/${id}`}>
          {name}
        </Link>
      </h1>

      <Link to = {`/details/${id}`}>
        <img
          src={`${process.env.PUBLIC_URL}/images/${image}`}
          width={200}
          height={200}
          alt="Hello"
        />
      </Link>
      <div>{address}</div>
      <div className="Time">{time}</div>
    </div>
  );
};

export default POPOSSpace;

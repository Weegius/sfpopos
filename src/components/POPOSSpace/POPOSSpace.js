import './POPOSSpace.css';
import { Link } from "react-router-dom";
import React from "react";

const POPOSSpace = (props) => {
  const { name, image, address, time, id } = props;
  return (
    <div className='POPOSSpace'>
      <h1>
        <Link to={`/details/${id}`} className='POPOSSpace-title'>{name}</Link>
      </h1>

      <Link to={`/details/${id}`}>
        <img
          src={`${process.env.PUBLIC_URL}/images/${image}`}
          width={200}
          height={200}
          alt="Hello"
        />
      </Link>
      <div className='POPOSSpace-info'>
        <div>{address}</div>
        <div className="Time">{time}</div>
      </div>
    </div>
  );
};

export default POPOSSpace;

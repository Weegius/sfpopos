import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
import data from './sfpopos-data.json'



const POPOSList = () => {
  
  const spaces = data.map(( { title, address, images, hours } ) => {
    return (
      <POPOSSpace
      key = {title}
      name = {title}
      address = {address}
      image = {images[0]}
      time = {hours}
      />
    )
  })

  return (
    <div className="POPOSList">
      { spaces }
    </div>
  )
};



export default POPOSList;

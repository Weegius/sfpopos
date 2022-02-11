import React from 'react';
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import './POPOSList.css';
import data from '../../sfpopos-data.json'
import { useState } from 'react'



const POPOSList = () => {

  const spaces = data.map((obj) => {
    const { title, address, images, hours } = obj

    return (
      <POPOSSpace
        key={title}
        name={title}
        address={address}
        image={images[0]}
        time={hours}
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

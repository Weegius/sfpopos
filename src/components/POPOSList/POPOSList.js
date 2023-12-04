import React from "react";
import POPOSSpace from "../POPOSSpace/POPOSSpace";
import "./POPOSList.css";
import data from "../../sfpopos-data.js";
import { useState } from "react";
import sanitize from "sanitize-html";

const POPOSList = () => {
  const sanitizeInput = () => {
    const cleanedinputs = sanitize(query, {
      allowedTags: [],
      allowedAttributes: {},
    });
    return sanitizeInput;
  };

  const [query, setQuery] = useState("");

  const spaces = data
    .filter((obj) => {
      const sanitizedQuery = sanitizeInput(query);

      const inTitle = obj.title
        .toLowerCase()
        .includes(sanitizedQuery.toLowerCase());
      const inAddress = obj.address
        .toLowerCase()
        .includes(sanitizedQuery.toLowerCase());
      return inTitle || inAddress;
    })
    .map((obj) => {
      const { id, title, address, images, hours } = obj;

      return (
        <POPOSSpace
          id={id}
          key={`${title}-${id}`}
          name={title}
          address={address}
          image={images[0]}
          time={hours}
        />
      );
    });

  return (
    <div className="POPOSList">
      <form>
        <input
          value={query}
          placeholder="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {spaces}
    </div>
  );
};

export default POPOSList;

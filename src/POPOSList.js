import { spaces } from "./constants/spaces";
import POPOSSpace from "./POPOSSpace";
import './POPOSList.css'

const POPOSList = () => {
  return (
    <div className="POPOSList">
      
      {spaces.map((space, index) => (
        <POPOSSpace
          key={index}
          name={space.name}
          address={space.address}
          image={space.image}
        />
      ))}
    </div>
  );
};

export default POPOSList;

import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
  const { data } = useOutletContext();
  return (
    <div>
      <h3 className="host-van-price">
        ${data.price}
        <span>/day</span>
      </h3>
    </div>
  );
};

export default HostVanPricing;

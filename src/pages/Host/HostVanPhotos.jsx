import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { data } = useOutletContext();
  return (
    <div>
      <img src={data.imageUrl} className="host-van-detail-image" />
    </div>
  );
};

export default HostVanPhotos;

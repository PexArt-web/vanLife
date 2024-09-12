import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
  const { data } = useOutletContext();
  return (
    <section>
      <h4>Name: {data.name}</h4>
      <h4>Category: {data.type}</h4>
      <h4>Description: {data.description}</h4>
      <h4>Visibility: public</h4>
    </section>
  );
};

export default HostVanInfo;

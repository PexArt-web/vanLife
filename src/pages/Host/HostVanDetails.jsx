import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

const HostVanDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/host/vans/" + id);
        const data = await response.json();
        setData(data.vans[0]);
        console.log(data.vans[0].description, "details");
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={data.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${data.type}`}>{data.type}</i>
            <h3>{data.name}</h3>
            <h4>${data.price}/day</h4>
          </div>
        </div>
        <nav className="host-van-detail-nav">
          <NavLink to={"."}>Details</NavLink>
          <NavLink to={"pricing"}>Pricing</NavLink>
          <NavLink to={"photos"}>Photos</NavLink>
        </nav>
        <Outlet  context={{data}}/>
      </div>
    </section>
  );
};

export default HostVanDetails;

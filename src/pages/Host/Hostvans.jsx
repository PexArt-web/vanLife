import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hostvans = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/host/vans");
        const data = await response.json();
        setVans(data.vans);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(vans);
  const hostVanElements = vans.map((van) => (
    <Link
      key={van.id}
      to={`/host/vans/${van.id}`}
      className="host-van-link-wrapper"
    >
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        {vans.length > 0 ? (
          <section>{hostVanElements}</section>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
};

export default Hostvans;

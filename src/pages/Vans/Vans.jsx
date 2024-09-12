import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    const vanData = async () => {
      try {
        const response = await fetch("/api/vans");
        const data = await response.json();

        setVans(data.vans);

        console.log(vans);
      } catch (error) {
        console.log(error);
      }
    };

    vanData();
  }, []);

  const vanElements = vans.map((van) => (
    <div className="van-title" key={van.id}>
      <Link
        to={"/vans/" + van.id}
        aria-label={`View details for ${van.name}, 
        priced at $${van.price} per day`}
      >
        <img src={van.imageUrl} alt={`Image of ${van.name}`} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <div className="van-list-container">
      <div className="van-list">{vanElements}</div>
    </div>
  );
};

export default Vans;

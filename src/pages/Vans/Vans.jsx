import { useState } from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";

const Vans = () => {
  const [error, setError] = useState(null);
  const loaderElement = useLoaderData() || [];
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  // console.log(typeFilter || " no type filter");
  //

  const filteredVans = typeFilter
    ? loaderElement.filter((vans) => vans.type.toLowerCase() === typeFilter)
    : loaderElement;

  const vanElements = filteredVans.map((van) => (
    <div className="van-title" key={van.id}>
      <Link
        to={van.id}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
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

  const handleFilterChange = (key, value) => {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  };

  if (error) {
    return <h1 aria-live="assertive">Error: {error.message}</h1>;
  }
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      {/* <h1>
          {loaderElement}
        </h1> */}
      <div className="van-list-filter-buttons">
        <button
          className={`van-type simple ${
            typeFilter === "simple" ? "selected" : ""
          }`}
          onClick={() => handleFilterChange("type", "simple")}
        >
          Simple
        </button>
        <button
          className={`van-type luxury ${
            typeFilter === "luxury" ? "selected" : ""
          }`}
          onClick={() => handleFilterChange("type", "luxury")}
        >
          luxuruy
        </button>
        <button
          className={`van-type rugged ${
            typeFilter === "rugged" ? "selected" : ""
          }`}
          onClick={() => handleFilterChange("type", "rugged")}
        >
          rugged
        </button>
        {typeFilter && (
          <button
            className="van-type clear-filters"
            onClick={() => handleFilterChange("type", null)}
          >
            Clear filters
          </button>
        )}
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
};

export default Vans;

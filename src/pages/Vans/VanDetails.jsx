import { Suspense } from "react";
import { Await, Link, useLoaderData, useLocation } from "react-router-dom";

const VanDetails = () => {
  const vanData = useLoaderData();
  const location = useLocation();
  console.log(location);
  const search = location.state?.search || "";
  const type = location.state?.type || "all";
  console.log(search, type, "search and type");

  const renderVanDetails = (van) => {
    return (
      <div className="van-detail">
        <img src={van.imageUrl} />
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
        <h2>{van.name}</h2>
        <p className="van-price">
          <span>${van.price}</span>/day
        </p>
        <p>{van.description}</p>
        <button className="link-button">Rent this van</button>
      </div>
    );
  };

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>{`Back to ${type} vans`}</span>
      </Link>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={vanData.vansDetails}>{renderVanDetails}</Await>
      </Suspense>
    </div>
  );
};

export default VanDetails;

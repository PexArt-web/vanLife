import { Suspense } from "react";
import { Await, Link, useLoaderData } from "react-router-dom";

const Hostvans = () => {
  const loadedVans = useLoaderData();
  
  const renderHostVanElement = (vans) => {
    const hostVanElements = vans.map((van) => (
      <Link key={van.id} to={van.id} className="host-van-link-wrapper">
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
      <div className="host-vans-list">
        {vans && <section>{hostVanElements}</section>}
      </div>
    );
  };
  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <Suspense fallback={<h2>Loading vans ...</h2>}>
        <Await resolve={loadedVans.hostVans}>{renderHostVanElement}</Await>
      </Suspense>
    </section>
  );
};

export default Hostvans;

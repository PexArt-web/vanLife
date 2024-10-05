import { Suspense } from "react";
import { Await, Link, NavLink, Outlet, useLoaderData } from "react-router-dom";

const HostVanDetails = () => {
  const loaderData = useLoaderData();
  console.log(loaderData, "data");
  const renderElement = (data) => {
    return (
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
        <Outlet context={{ data }} />
      </div>
    );
  };
  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <Suspense fallback={<h2>Loading</h2>}>
        <Await resolve={loaderData.hostVansDetails}>{renderElement}</Await>
      </Suspense>
    </section>
  );
};

export default HostVanDetails;

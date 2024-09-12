import { NavLink, Outlet } from "react-router-dom"


const HostLayout = () => {
  return (
    <>
    <nav className="host-nav">
        <NavLink to=".">Dashboard</NavLink>
        <NavLink to="vans">Vans</NavLink>
        <NavLink to="income">Income</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
    </nav>
    <Outlet />
</>
  )
}

export default HostLayout

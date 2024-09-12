import { Outlet } from "react-router-dom"


const Dashboard = () => {
  return (
    <div>
      <h1>This is the dashboard Routes</h1>
      <Outlet/>
    </div>
  )
}

export default Dashboard

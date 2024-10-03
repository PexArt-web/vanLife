import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./server";
import Vans from "./pages/Vans/Vans";
import VanDetails from "./pages/Vans/VanDetails";
import RootLayout from "./LayOuts/RootLayout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./LayOuts/HostLayout";
import Hostvans from "./pages/Host/Hostvans";
import HostVanDetails from "./pages/Host/HostVanDetails";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import NotFound from "./pages/404";
import Login from "./pages/Auth/Login";
import { hostVans, hostVansId, vanDetails, vansLoader } from "./Loaders/vanLoader";
import { requireAuth } from "./utils/utils";
import   LoginLoader  from "./Loaders/LoginLoader";
import  Error  from './components/Error'
import { loginActon } from "./actions/action";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<Error/>}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} loader = {async({request})=> requireAuth(request) } />
        <Route path="login" element={<Login />} loader = {LoginLoader} action={loginActon} />
        <Route path="vans" element={<Vans />} loader={vansLoader} />
        <Route path="vans/:id" element={<VanDetails />} loader = {vanDetails} />
        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} loader = { async({request})=> await requireAuth(request)} 
          />
          <Route path="vans" element={<Hostvans />} loader = {hostVans} />
          <Route path="vans/:id" element={<HostVanDetails />} loader = {hostVansId}>
            <Route index element={<HostVanInfo />} />
            <Route path="pricing" element={<HostVanPricing />} />
            <Route path="photos" element={<HostVanPhotos />} />
          </Route>
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

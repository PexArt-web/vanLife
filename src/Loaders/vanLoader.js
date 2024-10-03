import { defer } from "react-router-dom";
import { getHostVans, getVans } from "../services/Api";
import { requireAuth } from "../utils/utils";
// vans page loader
export const vansLoader = async ({request}) => {
  await requireAuth(request)
  const vans = (getVans())   || []
  return defer({vans})
};

// van details page loader by id
export const vanDetails = async ({ params,request }) => {
  await requireAuth(request)
  const { id } = params;
  return (await getVans(id)) || [];
};

// host van page loader by id 
export const hostVans = async ({request}) =>{
  await requireAuth(request)
  return (await getHostVans()) || [];
}

export const hostVansId = async ({params,request}) =>{
  await requireAuth(request)
  const { id } = params;
  return (await getHostVans(id)) || [];

}
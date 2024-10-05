import { defer } from "react-router-dom";
import { getHostVans, getVans } from "../services/Api";
import { requireAuth } from "../utils/utils";
// vans page loader
export const vansLoader = async ({ request }) => {
  await requireAuth(request);
  const vans = getVans() || [];
  return defer({ vans });
};

// van details page loader by id
export const vanDetails = async ({ params, request }) => {
  await requireAuth(request);
  const { id } = params;
  const vansDetails = getVans(id) || [];
  return defer({ vansDetails });
};

// host van page loader 
export const hostVans = async ({ request }) => {
  await requireAuth(request);
  const hostVans = getHostVans() || [];
  return defer({ hostVans });
};

export const hostVansId = async ({ params, request }) => {
  await requireAuth(request);
  const { id } = params;
  const hostVansDetails = getHostVans(id) || [];
  return defer({ hostVansDetails });
};

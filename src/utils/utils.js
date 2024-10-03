// import { redirect } from "react-router-dom";

export const requireAuth = async (request) => {
  const pathname  = new URL(request.url).pathname
  const isLoggedIn = localStorage.getItem('loggedIn')
  console.log(isLoggedIn, 'log')
  
  console.log('Checking auth...'); // Add debugging log

  if (!isLoggedIn) {
    console.log('User is not logged in, redirecting...');
    window.location.href = `/login?message=You must be logged in.&redirectTo=${pathname}`
  }

  console.log('User is logged in, proceeding...');
  return null; // If logged in, proceed to the protected route
};

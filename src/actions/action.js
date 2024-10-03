import { loginUser } from "../services/Api";

export const loginActon = async ({ request }) => {
  const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host"
  try {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    if (email === "b@b.com" && password === "p123") {
      const data = await loginUser({ email, password });
      let loggedIn = data ? true : false;
      if (loggedIn) {
        localStorage.setItem("loggedIn", true);
        window.location.replace(pathname);

      } else {
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("token");
      }
    }else{
      throw new Error("Couldn't login user")
    }
  } catch (error) {
    // console.error("error getting login data", error.message);
    // throw error("login failed")
    return error
  }
  return null;
};

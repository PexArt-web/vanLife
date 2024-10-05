import { Form, useActionData, useLoaderData, useNavigation } from "react-router-dom";


const Login = () => {
  const message = useLoaderData();
  const error = useActionData() 
  const navigation = useNavigation()

 
  return (
      <>
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h2 className="red">{message}</h2>}
      {error && <h2 className="red">{error.message}</h2>}
      <Form method="post" className="login-form" replace>
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button disabled={navigation.state === "submitting"}>
          {" "}
          {navigation.state === "submitting" ? "Logging in..." : "Log In"}
        </button>
      </Form>
    </div>
      </>
  );
};

export default Login;

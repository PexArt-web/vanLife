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
      {message && <h3>` Your Demo Log in Info :
        Email: b@b.com, password: p123 `</h3>}
      {error && <h4 className="red">{error.message}</h4>}
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

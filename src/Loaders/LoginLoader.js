const LoginLoader = async ({ request }) => {
  return new URL(request.url).searchParams.get("message");
};

export default LoginLoader;

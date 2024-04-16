
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hook/useAuth";
import SocialLogIn from "./SocialLogIn";

const Login = () => {
  const { signInUser} = useAuth();

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

// form submit handler
  const onSubmit = (data) => {
    const { email, password } = data;
    signInUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };



  return (
    <div className="mx-auto max-w-md  lg:w-1/4">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md   focus:dark:border-violet-600"
                {...register("email", { required: true })}
              />
              {/* errors will return when field validation fails  */}
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-gray-600"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md   focus:dark:border-violet-600"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full btn btn-neutral px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
          >
            Login
          </button>
        </form>

        {/* Social Login */}

        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm dark:text-gray-600">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
              <SocialLogIn></SocialLogIn>
        <p className="text-xs text-center sm:px-6 dark:text-gray-600">
          Dont have an account?
          <Link
            to="/register"
            rel="noopener noreferrer"
            href="#"
            className="underline dark:text-gray-800"
          >
            Register now!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

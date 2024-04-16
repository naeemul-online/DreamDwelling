import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hook/useAuth";

const UpdateProfile = () => {
  // use context
  const { createUser, updateUserProfile, user } = useAuth();
  // console.log(createUser)
  console.log(user);

  // navigation system
  const navigate = useNavigate();
  const from =  "/";

  // react form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  // register form submit handler
  const onSubmit = (data) => {
    const { email, password , image, fullName} = data;
   

    createUser(email, password).then(
        updateUserProfile(fullName, image)
        .then(()=> {
            navigate(from)
        })
    );
  };



  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold text-center mb-4">Update Profile</h1>
            <div className="text-center">
            <h2><strong>Name:</strong> {user?.displayName || "name not found"}</h2>
            <h2><strong>Email:</strong> {user?.email || "name not found"}</h2>
            <h2><strong>Profile Photo:</strong></h2>
            <div className="flex justify-center w-full ">
                <img  className="rounded-full" src={user?.photoURL || "name not found"}alt="" />                
            </div>
            </div>
          </div>
          <form
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="input input-bordered"
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input
                  type="text"
                  placeholder="image url"
                  className="input input-bordered"
                  {...register("photo")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control mt-6 p-0">
                <button className="btn btn-neutral">Update and Register</button>
              </div>
              <label className="label">
                Have an account?{" "}
                <Link to="/login" className="label-text-alt link link-hover">
                  Please Login
                </Link>
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;

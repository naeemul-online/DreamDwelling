import { Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hook/useAuth";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";


const UpdateProfile = () => {
  
  // use context
  const { updateUserProfile, user } = useAuth();
  // console.log(createUser)
  // console.log(user);

  // navigation system
  // const navigate = useNavigate();
  // const from =  "/";

  // react form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  // register form submit handler
  const onSubmit = (data) => {
    const { password, email , image, fullName} = data;
   

      updateUserProfile(fullName, image, email, password )
      .then(()=> {
          toast.success('Your information successfully updated')
      });


    
  };



  return (
    <>
      <div className="hero min-h-screen bg-base-200">
      <Helmet>
      <title>Update - Profile</title>
      </Helmet>
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            
            <div className="text-center">
            <h2 className="text-3xl font-bold"><strong className="text-3xl text-red-500">Hi,</strong> {user?.displayName || "Anonymous"}</h2>
            <div className="flex justify-center w-full ">
                <img  className="rounded-full" src={user?.photoURL || "Profile photo not found" }alt="" />                
            </div>
            <h2><strong>Profile</strong></h2>
            <h2><strong>Email:</strong> {user?.email || ""}</h2>
            
            </div>
          </div>
          <h1 className="text-xl font-bold text-center mb-4">Update your profile Profile</h1>
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
                <button className="btn btn-neutral">Save Changes</button>
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

import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../../context/AuthContext";
import toast from "react-hot-toast";

const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signInUser, signInWithGoogle } = use(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then(() => {
        toast.success("Login Successfully");
        navigate(location.state ? location.state : "/");
        form.reset();
      })
      .catch((error) => {
        console.error("Error during login:", error);
        toast.error("Check your email and password");
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Google sign in successful");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.error("Error during Google sign in:", error);
        toast.error("Unable to logged in");
      });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 min-h-[80vh]">
      <div className=" md:block col-span-4 hidden ">
        <div className="md:flex col-span-4 hidden bg-gradient-to-br from-slate-900 via-slate-900 to-black relative overflow-hidden flex-col justify-center p-20 border-b border-slate-800 min-h-[90vh]">
          <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute right-0 bottom-10 translate-x-1/4 opacity-[0.02] select-none pointer-events-none">
            <span className="text-[45rem] font-black text-white italic leading-none">
              T
            </span>
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-8 bg-amber-500" />
              <p className="text-amber-500 font-black uppercase tracking-[0.5em] text-xs">
                Elite Collection
              </p>
            </div>

            <h2 className="text-6xl lg:text-7xl font-black text-white leading-[0.85] uppercase italic tracking-tighter mb-4">
              The keys to <br />
              <span className="text-amber-500">Excellence</span>
            </h2>

            <p className="text-slate-400 text-lg font-medium max-w-md leading-relaxed mb-8">
              Log in to your private portal to manage your fleet, view active
              bookings, and explore the newest additions to our exotic gallery.
            </p>
            <div className="grid grid-cols-2 gap-y-10 gap-x-12">
              {[
                { title: "Priority", desc: "24/7 Concierge" },
                { title: "Secure", desc: "End-to-End Encryption" },
                { title: "Swift", desc: "1-Click Reservation" },
                { title: "Status", desc: "Loyalty Rewards" },
              ].map((item, i) => (
                <div key={i} className="group cursor-default">
                  <h4 className="text-white font-black uppercase italic text-sm tracking-widest group-hover:text-amber-500 transition-colors">
                    {item.title}
                  </h4>
                  <div className="h-[1px] w-4 bg-amber-500/30 my-2 group-hover:w-full transition-all duration-500" />
                  <p className="text-slate-500 text-[11px] font-bold uppercase tracking-tight">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-10 left-20 border-l border-amber-500/50 pl-4">
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
              TravelEase <span className="text-slate-700">|</span> Authorized
              Access Only
            </p>
          </div>
        </div>
      </div>
      <div className=" flex col-span-2 w-full justify-center items-cente pt-12">
        <div className="max-w-md w-full p-8">
          <Link to={"/"}>
            <h2 className="text-4xl text-center font-extrabold text-amber-500 tracking-tight cursor-pointer leading-tight uppercase italic hidden md:block">
              Travel<span className="text-black">Ease</span>
            </h2>
          </Link>
          <h1 className="text-xl font-bold my-6 text-center uppercase">Login</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
            <label className=" validator">
              <input
                type="password"
                name="password"
                placeholder="Password"
                minLength={6}
                className="mb-2 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                required
              />
            </label>
            <p className="validator-hint hidden">
              Must be more than 8 characters, including
              <br />
              At least one number <br />
              At least one lowercase letter <br />
              At least one uppercase letter
            </p>

            <button
              type="submit"
              className="w-full mt-4 bg-amber-500 hover:bg-slate-900 text-white py-3 cursor-pointer rounded-lg font-semibold transition-all duration-300"
            >
              Login
            </button>
          </form>
          <button
            onClick={handleGoogleLogin}
            className=" hover:border-gray-400 hover:bg-gray-100
           w-full mt-3 btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>

          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <Link
              to="/register"
              state={location?.state}
              className="text-amber-600 font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

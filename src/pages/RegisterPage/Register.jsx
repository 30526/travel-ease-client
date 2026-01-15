import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../../context/AuthContext";
import toast from "react-hot-toast";
import useAxios from "../../hooks/useAxios";

const Register = () => {
  const { createUser, signInWithGoogle, updateUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const axios = useAxios();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.PhotoURL.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Password did not match");
      return;
    }
    // const newUser = { name, email, password };

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL });

        axios
          .post("https://travel-ease-server-navy.vercel.app/users", user)
          .then(() => {})
          .catch((err) => {
            console.log(err);
          });
        toast.success("Successfully create an account");
        navigate("/");
        form.reset();
      })
      .catch((error) => {
        console.error(error.message);
        toast.error("Error during registration: " + error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const newUser = result.user;
        axios
          .post("https://travel-ease-server-navy.vercel.app/users", newUser)
          .then(() => {})
          .catch((err) => {
            console.log(err);
          });
        toast.success("Google sign in successful");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.error("Error during Google sign in:", error);
        toast.error("Unable to logged in");
      });
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-6  min-h-[90vh]">
        <div className="hidden md:block col-span-4">
          <div className="md:flex col-span-4 hidden bg-gradient-to-tr from-black via-slate-900 to-slate-900 relative overflow-hidden flex-col justify-center p-20 border-b border-slate-800 h-full">
            {/* 1. Brand Accent: Top-right amber glow to distinguish from Login page */}
            <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

            {/* 2. Bottom Accent: Deep blue/slate pulse */}
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-slate-800/20 rounded-full blur-[100px] pointer-events-none" />

            {/* 3. The Watermark "E" (for Ease/Elite) */}
            <div className="absolute left-0 bottom-10 -translate-x-1/4 opacity-[0.02] select-none pointer-events-none">
              <span className="text-[45rem] font-black text-white italic leading-none">
                E
              </span>
            </div>

            <div className="relative z-10 max-w-2xl">
              {/* 4. Branded Tag */}
              <div className="flex items-center gap-3 mb-8">
                <div className="h-[2px] w-8 bg-amber-500" />
                <p className="text-amber-500 font-black uppercase tracking-[0.5em] text-xs">
                  Membership Enrollment
                </p>
              </div>

              <h2 className="text-6xl lg:text-7xl font-black text-white leading-[0.85] uppercase italic tracking-tighter mb-10">
                Drive the <br />
                <span className="text-amber-500">Unattainable</span>
              </h2>

              <p className="text-slate-400 text-lg font-medium max-w-md leading-relaxed mb-14">
                Create your account to join a global community of luxury
                enthusiasts. Start listing your fleet or booking world-class
                vehicles in seconds.
              </p>

              {/* 5. Membership Perks Grid */}
              <div className="grid grid-cols-2 gap-y-10 gap-x-12">
                {[
                  { title: "Host", desc: "Monetize your luxury fleet" },
                  { title: "Travel", desc: "Access 500+ premium cars" },
                  { title: "Verified", desc: "Trusted member community" },
                  { title: "Rewards", desc: "Earn points on every mile" },
                ].map((item, i) => (
                  <div key={i} className="group cursor-default">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-4 bg-amber-500" />
                      <h4 className="text-white font-black uppercase italic text-sm tracking-widest">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-slate-500 text-[11px] font-bold uppercase tracking-tight mt-2 ml-3">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. Footer Divider Mark */}
            <div className="absolute bottom-10 left-20">
              <div className="flex items-center gap-4">
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
                  TravelEase <span className="text-slate-700">|</span> New
                  Member Portal
                </p>
                <div className="h-[1px] w-20 bg-slate-800" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex col-span-2 w-full justify-center items-center">
          <div className="max-w-md w-full p-8">
            <Link to={"/"}>
              <h2 className="text-4xl text-center font-extrabold text-amber-500 tracking-tight cursor-pointer leading-tight uppercase italic hidden md:block">
                Travel<span className="text-black">Ease</span>
              </h2>
            </Link>
            <h1 className="text-xl font-semibold  my-4 uppercase text-center">
              Create Account
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
              <input
                type="url"
                name="PhotoURL"
                placeholder="Photo URL"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <label className="validator">
                <input
                  type="password"
                  minLength={6}
                  name="password"
                  placeholder="Password"
                  className="mb-4 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
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
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
              <div className="flex gap-3">
                <input type="checkbox" className="checkbox" required />
                <p>Agree to the Terms and Policy</p>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-black cursor-pointer text-white py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Register
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
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-amber-600 font-medium hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

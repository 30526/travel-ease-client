import React, { use } from "react";
import { Link } from "react-router";
import AuthContext from "../../context/AuthContext";

const LoginPage = () => {
  const { signInUser, signInWithGoogle } = use(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => {
        console.error("Error during login:", error);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        alert("Google sign in successful");
      })
      .catch((error) => {
        console.error("Error during Google sign in:", error);
      });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 my-20">
      <div className=" md:block col-span-4 hidden">{/* <IridBG /> */}</div>
      <div className=" flex col-span-2 w-full justify-center items-cente">
        <div className="max-w-md w-full p-8">
          <Link to={"/"}>
            <h2 className="text-3xl cursor-pointer font-bold text-center">
              TravelEase
            </h2>
          </Link>
          <h1 className="text-xl font-semibold my-8 text-center">Login</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <label className=" validator">
              <input
                type="password"
                name="password"
                placeholder="Password"
                minLength={6}
                className="mb-2 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
              className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300"
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
              className="text-purple-600 font-medium hover:underline"
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

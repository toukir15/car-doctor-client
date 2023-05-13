import { Link } from "react-router-dom";
import login1 from "../../../src/assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

export default function SignUp() {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    console.log(event);
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    console.log(email, password);
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
          <img src={login1} alt="" />
        </div>
        <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 w-1/2 ml-32">
          <div className="card-body">
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#FF3811] border-0">SignUp</button>
              </div>
            </form>
            <p>
              New to cars doctor?
              <Link to="/signUp" className="text-[#FF3811]">
                SignUp
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

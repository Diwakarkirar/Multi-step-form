import { useState } from "react";
// import { useHistory } from "react-router-dom";

import { TEInput, TERipple } from "tw-elements-react";
import { isEmail, isStrongPassword } from "validator";
import correct from "./images/correct.png";
import wrong from "./images/wrong.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const navigate = useNavigate();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [email, setEmail] = useState(false);
  const [pass, setPass] = useState(false);
  const [emailEmpty, setEmailEmpty] = useState("");
  const [passEmpty, setPassEmpty] = useState("");
  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "email") {
      setEmailEmpty(value);
      if (isEmail(emailEmpty)) setEmail(true);
      else setEmail(false);
    } else {
      setPassEmpty(value);
      if (isStrongPassword(value)) setPass(true);
      else setPass(false);
    }
  }
  function handleSubmit() {
    if (!email) {
      toast.error("Please Enter Valid Email", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (!pass) {
      toast.error("Please Enter Valid Password", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      // toast.success("Submitted Successfully", {
      //   position: "top-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
      setIsFormSubmitted(true);
      setEmailEmpty("");
      setPassEmpty("");
      navigate("/form");
    }
  }
  return (
    <section className="h-screen">
      <ToastContainer />

      <div className="container h-full px-6 py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* <!-- Left column container with background--> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>

          {/* <!-- Right column container with form --> */}
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            <form>
              {/* <!-- Email input --> */}
              <TEInput
                type="email"
                label="Email address"
                size="lg"
                name="email"
                value={emailEmpty}
                className="mb-6 validation"
                style={{
                  backgroundImage: emailEmpty
                    ? `url(${email ? correct : wrong})`
                    : "none",
                }}
                onChange={handleChange}
                required
              ></TEInput>

              {/* <!--Password input--> */}
              <TEInput
                type="password"
                label="Password"
                name="password"
                value={passEmpty}
                className="mb-6 validation"
                size="lg"
                style={{
                  backgroundImage: passEmpty
                    ? `url(${pass ? correct : wrong})`
                    : "none",
                }}
                onChange={handleChange}
                required
              ></TEInput>

              {/* <!-- Remember me checkbox --> */}

              <div className="mb-6 flex items-center justify-between">
                {/* <!-- Forgot password link --> */}
                <Link
                  to="/forgotPassword"
                  className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                >
                  Forgot password?
                </Link>
              </div>

              {/* <!-- Submit button --> */}

              <TERipple rippleColor="light" className="w-full">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Sign in
                </button>
              </TERipple>

              {/* <!-- Divider --> */}

              {/* <!-- Social login buttons --> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

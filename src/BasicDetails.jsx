import React, { useState } from "react";
import { TEInput, TERipple } from "tw-elements-react";
import "./App.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { isEmail } from "validator";
import correct from "./images/correct.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import wrong from "./images/wrong.png";
export default function BasicDetails({ onNext }) {
  const [email, setEmail] = useState(false);
  // const [number, setNumber] = useState(false);
  const [emailEmpty, setEmailEmpty] = useState("");
  // const [numberEmpty, setNumberEmpty] = useState("");
  function handleChange(e) {
    const value = e.target.value;

    // if (name === "email") {
    setEmailEmpty(value);
    if (isEmail(emailEmpty)) setEmail(true);
    else setEmail(false);
    // } else {
    //   setNumberEmpty(value);
    //   if (isStrongPassword(value)) setNumber(true);
    //   else setNumber(false);
    // }
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
    } else {
      toast.success("Saved Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      onNext();
    }
  }

  return (
    <div className="block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <ToastContainer />
      <form>
        <div className="grid grid-cols-2 gap-4">
          {/* <!--First name input--> */}
          <TEInput
            type="text"
            label="First name"
            className="mb-6"
            required
          ></TEInput>

          {/* <!--Last name input--> */}
          <TEInput
            type="text"
            label="Last name"
            className="mb-6"
            required
          ></TEInput>
        </div>

        {/* <!--Email input--> */}
        <TEInput
          type="email"
          label="Email address"
          value={emailEmpty}
          className="mb-6 validation"
          style={{
            backgroundImage: emailEmpty
              ? `url(${email ? correct : wrong})`
              : "none",
          }}
          name="email"
          onChange={handleChange}
          required
        ></TEInput>

        {/* <!--Password input--> */}

        <PhoneInput
          country={"in"}
          className="validation"
          label="Phone Number"
          // name="number"
          // value={numberEmpty}
          // onChange={handleChange}
          inputProps={{
            required: true,
          }}
          // style={{
          //   backgroundImage: numberEmpty
          //     ? `url(${number ? correct : wrong})`
          //     : "none",
          // }}
        />
        <TERipple rippleColor="light" className="w-full">
          <button
            type="button"
            onClick={handleSubmit}
            className="block w-full rounded mt-5 bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]]"
          >
            Save And Continue
          </button>
        </TERipple>
      </form>
    </div>
  );
}

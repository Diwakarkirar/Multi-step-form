import React, { useState } from "react";
import { TEInput, TERipple } from "tw-elements-react";
import "./App.css";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

export default function Address({ onNext, onPrev }) {
  //   const [phone, setPhone] = useState("");

  //   const handlePhoneChange = (value) => {
  //     setPhone(value);
  //   };
  const handleNext = () => {
    onNext();
  };
  const handleBack = () => {
    onPrev();
  };
  return (
    <div className="block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <form>
        <div className="grid grid-cols-2 gap-4">
          {/* <!--First name input--> */}
          <TEInput
            type="text"
            label="Address line 1"
            className="mb-6"
            required
          ></TEInput>

          {/* <!--Last name input--> */}
          <TEInput
            type="text"
            label="Address line 2"
            className="mb-6"
            required
          ></TEInput>
        </div>

        {/* <!--Email input--> */}
        <TEInput type="text" label="City" className="mb-6" required></TEInput>
        <TEInput type="text" label="State" className="mb-6" required></TEInput>
        <TEInput
          type="text"
          label="Pincode"
          className="mb-6"
          required
        ></TEInput>
        <TEInput
          type="text"
          label="Country"
          className="mb-6"
          required
        ></TEInput>
        {/* <!--Password input--> */}
        <TERipple rippleColor="light" className="w-full">
          <button
            type="button"
            onClick={handleBack}
            className="block w-full rounded mt-5 bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]]"
          >
            Back
          </button>
        </TERipple>
        <TERipple rippleColor="light" className="w-full">
          <button
            type="button"
            onClick={handleNext}
            className="block w-full rounded mt-5 bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]]"
          >
            Save And Continue
          </button>
        </TERipple>
      </form>
    </div>
  );
}

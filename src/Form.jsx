import React, { useState } from "react";
// // import Step1 from './Step1';
// // import Step2 from './Step2';
// // import Step3 from './Step3';
// // import Step4 from './Step4';
// // import Step5 from './Step5';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProgressBar from "./ProgressBar";
import BasicDetails from "./BasicDetails";
import Address from "./Address";
import File from "./File";
import MultipleFile from "./MultipleFile";
function Form() {
  //  const [step,setStep]=useState(1);
  const [currentStep, setCurrentStep] = useState(1);
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phoneNumber: '',
  //   address: '',
  //   file: null,
  //   files: [],
  //   geolocationStatus: false,
  // });

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderFormStep = () => {
    console.log("called");
    if (currentStep === 5) {
      toast.success("Submitted Successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return null;
    }
    switch (currentStep) {
      case 1:
        return <BasicDetails onNext={handleNextStep} />;
      case 2:
        return <Address onPrev={handlePrevStep} onNext={handleNextStep} />;
      case 3:
        return <File onPrev={handlePrevStep} onNext={handleNextStep} />;
      case 4:
        return <MultipleFile onPrev={handlePrevStep} onNext={handleNextStep} />;

      default:
        return null;
    }
  };

  return (
    <div>
      <ProgressBar step={currentStep * 20} />
      <ToastContainer />
      {renderFormStep()}
    </div>
  );
}

export default Form;

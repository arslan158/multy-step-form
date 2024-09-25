// i have like made as leeting app/page.js as form page and there is no home page so
// exit btn will not work

'use client'; 

import { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import './globals.css';

import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';

export default function Form() {
  const totalSteps = 3; // Total number of steps
  const [currentStep, setCurrentStep] = useState(1); // Starting this counter from step 1
  const [optionSelected, setOptionSelected] = useState("");
  const [hasLoggedData, setHasLoggedData] = useState(false);


  // Form fields state here
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [text, setText] = useState('');

  // Error state for validation//for finding type of errror
  const [errors, setErrors] = useState({});

  // Validation for Step 2 field as mentioned in test
  const validateStep2 = () => {
    let validationErrors = {};

    // Check for name field: required and min 4 char...
    if (!name.trim()) {
      validationErrors.name = "Name is required";
    } else if (name.length < 4) {
      validationErrors.name = "Name must be at least 4 characters long";
    }

    // Check for email: required and must be a valid email format
    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      validationErrors.email = "Email is invalid";
    }

    // Check for phone number: required
    if (!phoneNumber.trim()) {
      validationErrors.phoneNumber = "Phone number is required";
    }

    setErrors(validationErrors);

    // Return true if there are no errors
    return Object.keys(validationErrors).length === 0;
  };

  // Move to the next step with validation check
  const nextStep = () => {
    if (currentStep === 2 && !validateStep2()) {
      return; // Prevent moving forward if validation fails
    }
    setCurrentStep((prevStep) => Math.min(prevStep + 1, totalSteps)); // Ensure it doesn't go above total steps
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1)); // Ensure it doesn't go below 1
  };


  // Logic to show or hide the "Next" button based on option selection and step
  const showNextBtn = currentStep === 1 && !optionSelected;

  const progressWidth = (currentStep / totalSteps) * 100; // Calculate progress percentage it is dynamic
  // logging out data as the requirement of test
  if (currentStep === 3 && !hasLoggedData) {
    const logData = [
      { label: "Current Step", value: currentStep },
      { label: "Name", value: name },
      { label: "Email", value: email },
      { label: "Phone Number", value: phoneNumber },
      { label: "Text", value: text },
      { label: "Option Selected", value: optionSelected },
      { label: "Errors", value: errors }
    ];

    console.log("Form Data:", logData);
    
    // Set the flag to true to prevent logging again
    setHasLoggedData(true);
  }
  return (
    <div className='bg-[#f9fafb] pb-20'>
      <div className='flex justify-between items-center py-4 px-10 bg-white '>
        <div className={`flex items-center gap-2.5 hover:cursor-pointer ${currentStep === 1 && 'hidden'}`} onClick={prevStep}>
          <FaArrowLeft className='w-5 h-5' />
          <p className='font-semibold text-sm'>Go Back</p>
        </div>
        <div className='flex items-center gap-2.5'>
          <p className='font-semibold text-sm'>Exit</p>
          <IoMdClose className='w-5 h-5' />
        </div>
      </div>

      <div className="w-full bg-gray-200 h-2.5 my-7">
        <div className="bg-[#019F44] h-2.5" style={{ width: `${progressWidth}%` }}></div> {/* Dynamic progress bar */}
      </div>

      <div>
        {currentStep === 1 && <FirstStep setOptionSelected={setOptionSelected} optionSelected={optionSelected} />}
        {currentStep === 2 && (
          <SecondStep 
            name={name} setName={setName}
            email={email} setEmail={setEmail}
            phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}
            text={text} setText={setText}
            errors={errors} // Passing down errors to show them in child
          />
        )}
        {currentStep === 3 && <ThirdStep />}
      </div>

      <div className={`md:w-[480px] w-4/5 mx-auto flex mt-10 ${currentStep === 1 ? 'justify-end':'justify-center'}`}>
        {/* Show or hide the Next button based on optionSelected */}
        <button 
          className={`bg-green-600 py-2.5 px-10 text-white text-balance font-medium rounded-md ${showNextBtn ? 'hidden' : ''} ${currentStep === totalSteps ? 'hidden' : ''}`} 
          onClick={nextStep}
        >
          {currentStep === 1 && 'Next'}{currentStep === 2 && 'Send Request'}
        </button>

        <button 
          className={`bg-green-600 py-2.5 px-10 text-white text-balance font-medium ${currentStep === totalSteps ? 'flex' : 'hidden'}`} 
        >
          <Link href='/'>Return Home</Link>
        </button>
      </div>
    </div>
  );
}


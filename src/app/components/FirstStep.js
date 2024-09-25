import { useState } from "react";

export default function FirstStep({setOptionSelected, optionSelected}) {
  const options = [
    "< $1,000/mo",
    "$1,000 - $2,000",
    "$2,000 - $3,000",
    "$3,000 - $4,000",
    "$4,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 +",
  ];
//   const [optionSelected, setOptionSelected] = useState("");

  return (
    <div className="w-[480px] text-center mx-auto">
      <h2 className="text-[28px] font-semibold mb-10">Step # 1</h2>
      <h3 className="text-[28px] font-semibold leading-tight mb-10">
        What is your monthly digital marketing budget?
      </h3>
      <div className="flex flex-col gap-y-2 ">
        {options.map((option, index) => {
          return (
            <div
              key={index}
              className={`bg-white border border-[#E5E7EB] text-center py-5 cursor-pointer ${
                optionSelected === option ? "selected" : ""
              }`}
              onClick={() => {
                setOptionSelected(option);
              }}
            >
              <p className="text-xl font-medium text-[#6B7280]">{option}</p>
            </div>
          );
          
        })}
       
      </div>
    </div>
  );
}

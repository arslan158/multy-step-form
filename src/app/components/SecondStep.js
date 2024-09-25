
// export default function SecondStep({ name, setName, email, setEmail, phoneNumber, setPhoneNumber, text, setText }) {
//     return (
//       <div className="w-[520px] mx-auto mt-10">
//         <div className="text-center"> 
//           <h2 className="text-[28px] font-semibold mb-5">Step #2</h2>
//           <h3 className="text-[28px] font-semibold leading-tight mb-5">Details</h3>
//           <p className="text-[#6B7280]">We’re thrilled at the opportunity to help you grow your business online. Please let us know the best way to reach you.</p>
//         </div>
//         <form>
//           <div className="flex flex-wrap gap-x-4 gap-y-3">
//             <div className="flex-grow basis-full">
//               <label htmlFor="name" className="font-semibold text-xs mb-2">Name</label>
//               <input 
//                 id="name" 
//                 type="text" 
//                 value={name} 
//                 onChange={(e) => setName(e.target.value)} 
//                 className="w-full bg-white border border-[#E5E7EB] rounded-[3px] py-3 px-5"
//               />
//             </div>
//             <div className="flex-grow basis-[45%]">
//               <label htmlFor="email" className="font-semibold text-xs mb-2">Email</label>
//               <input 
//                 id="email" 
//                 type="email" 
//                 value={email} 
//                 onChange={(e) => setEmail(e.target.value)} 
//                 className="w-full bg-white border border-[#E5E7EB] rounded-[3px] py-3 px-5"
//               />
//             </div>
//             <div className="flex-grow basis-[45%]">
//               <label htmlFor="phone-number" className="font-semibold text-xs mb-2">Phone Number</label>
//               <input 
//                 id="phone-number" 
//                 type="number" 
//                 value={phoneNumber} 
//                 onChange={(e) => setPhoneNumber(e.target.value)} 
//                 className="w-full bg-white border border-[#E5E7EB] rounded-[3px] py-3 px-5"
//               />
//             </div>
//             <div className="flex-grow basis-full">
//               <label htmlFor="text-area" className="font-semibold text-xs mb-2">Anything else you’d like to share?</label>
//               <textarea 
//                 id="text-area" 
//                 value={text} 
//                 onChange={(e) => setText(e.target.value)} 
//                 className="w-full bg-white border border-[#E5E7EB] rounded-[3px] py-3 px-5 resize-none"
//               />
//             </div>
//           </div>
//         </form>
//       </div>
//     );
//   }
  
export default function SecondStep({ name, setName, email, setEmail, phoneNumber, setPhoneNumber, text, setText, errors }) {
    return (
      <div className="w-[520px] mx-auto mt-10">
        <div className="text-center"> 
          <h2 className="text-[28px] font-semibold mb-5">Step #2</h2>
          <h3 className="text-[28px] font-semibold leading-tight mb-5">Details</h3>
          <p className="text-[#6B7280]">We’re thrilled at the opportunity to help you grow your business online. Please let us know the best way to reach you.</p>
        </div>
        <form>
          <div className="flex flex-wrap gap-x-4 gap-y-3">
            <div className="flex-grow basis-full">
              <label htmlFor="name" className="font-semibold text-xs mb-2">Name</label>
              <input 
                id="name" 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className={`w-full bg-white border ${errors.name ? 'border-red-500' : 'border-[#E5E7EB]'} rounded-[3px] py-3 px-5`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div className="flex-grow basis-[45%]">
              <label htmlFor="email" className="font-semibold text-xs mb-2">Email</label>
              <input 
                id="email" 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className={`w-full bg-white border ${errors.email ? 'border-red-500' : 'border-[#E5E7EB]'} rounded-[3px] py-3 px-5`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div className="flex-grow basis-[45%]">
              <label htmlFor="phone-number" className="font-semibold text-xs mb-2">Phone Number</label>
              <input 
                id="phone-number" 
                type="number" 
                value={phoneNumber} 
                onChange={(e) => setPhoneNumber(e.target.value)} 
                className={`w-full bg-white border ${errors.phoneNumber ? 'border-red-500' : 'border-[#E5E7EB]'} rounded-[3px] py-3 px-5`}
              />
              {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
            </div>
            <div className="flex-grow basis-full">
              <label htmlFor="text-area" className="font-semibold text-xs mb-2">Anything else you’d like to share?</label>
              <textarea 
                id="text-area" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                className="w-full bg-white border border-[#E5E7EB] rounded-[3px] py-3 px-5 resize-none"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }

import React from "react";

//This container is gonna wrap our login, register and update profile form for reusbaility

function FormContainer({ children }) {
  return (
    <>
      <div className="border-2">
        <div className="flex justify-center items-center">
          <div className="w-[500px] border-2 p-10 my-10 bg-slate-50 space-y-4">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default FormContainer;

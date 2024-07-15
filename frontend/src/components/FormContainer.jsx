import React from "react";

function FormContainer({ children }) {
  return (
    <>
      <div className="card bg-red-200">{children}</div>
    </>
  );
}

export default FormContainer;

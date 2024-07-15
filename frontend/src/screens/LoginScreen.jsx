import React from "react";
import FormContainer from "../components/FormContainer";

function LoginScreen() {
  const text = "hello";
  return (
    <>
      <FormContainer>
        {" "}
        <div>${text}</div>
      </FormContainer>
    </>
  );
}

export default LoginScreen;

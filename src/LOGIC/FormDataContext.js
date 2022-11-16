import React, { useState, useContext, createContext } from "react";

export const FormDataContext = createContext();

export function useFormDataContext() {
  return useContext(FormDataContext);
}

export function FormDataProvider({ children }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const formText = (e) => {
    const { name, value } = e.target;
    setFormData((i) => ({
      ...i,
      [name]: value,
    }));
  };

  const registerUser = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:1337/api/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    console.log(data);
  };

  return (
    <FormDataContext.Provider value={{ formData, formText, registerUser }}>
      {children}
    </FormDataContext.Provider>
  );
}

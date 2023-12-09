import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const FormStateContext = ({ children }) => {
  const [formDetails, setFormDetails] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    alternateNumber: '',
    city: '',
    address: '',
    zip: '',
    email: '',
    addressError: false,
    cityError: false, // New field for city validation
    mobileError: false, // New field for city validation
    nameError: false, // New field for city validation
    emailError: false,

  });



  const handleBlur = () => {
    if (formDetails.address.trim() === '') {
      setFormDetails((prevState) => ({ ...prevState, addressError: true }));
    }else {
      setFormDetails((prevState) => ({ ...prevState, addressError: false }));
    }
  }

  const handleBlurCity = () => {
    if (formDetails.city.trim() === '') {
      setFormDetails((prevDetails) => ({
        ...prevDetails,
        cityError: true,
      }));
    }else {
      setFormDetails((prevDetails) => ({
        ...prevDetails,
        cityError: false,
      }));
    }
  };



  const handleBlurEmail = () => {
    if (formDetails.email.trim() === '') {
      setFormDetails((prevDetails) => ({
        ...prevDetails,
        emailError: true,
      }));
    }else {
      setFormDetails((prevDetails) => ({
        ...prevDetails,
        emailError: false,
      }));
    }
  };



  const handleBlurMobile = () => {
    if (formDetails.mobileNumber.trim() === '') {
      setFormDetails((prevDetails) => ({
        ...prevDetails,
        mobileError: true,
      }));
    }else {
      setFormDetails((prevDetails) => ({
        ...prevDetails,
        mobileError: false,
      }));
    }
  };

  const handleBlurName = () => {
    if (formDetails.fullName.trim() === '') {
      setFormDetails((prevDetails) => ({
        ...prevDetails,
        nameError: true,
      }));
    } else {
      setFormDetails((prevDetails) => ({
        ...prevDetails,
        nameError: false,
      }));

    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    handleBlurMobile()
    setFormDetails((prevState) => ({ ...prevState, [name]: value }));
  };


  const handleChangeMobile = (newMobileNumber) => {
    if (newMobileNumber === undefined) {
      newMobileNumber = ''; // Set to an empty string if undefined
    }
    setFormDetails((prevState) => ({ ...prevState, mobileNumber: newMobileNumber }));
  };


  const handleChangeAlternativeMobile = (newAltMobileNumber) => {
    if (newAltMobileNumber === undefined) {
      newAltMobileNumber = ''; // Set to an empty string if undefined
    }
    setFormDetails((prevState) => ({ ...prevState, alternateNumber: newAltMobileNumber }));
  };



  return (
    <FormContext.Provider value={{ handleChangeMobile, formDetails, setFormDetails, handleChange, handleBlur, handleBlurCity, handleBlurMobile, handleBlurName, handleBlurEmail, handleChangeAlternativeMobile  }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormStateContext = () => useContext(FormContext);

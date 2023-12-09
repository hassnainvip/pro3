import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { toast } from "react-hot-toast";

const ContactForm = () => {
  const initialValues = {
    name: "",
    mobile: "",
    email: "",
    orderNo: "",
    complaint: ""
  };

  const handleSubmit = () => {
    // Handle form submission here
    toast.success('Successfully sent!')

  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Please fill out this field.";
    }

    // if (!values.mobile) {
    //   errors.mobile = "Please fill out this field.";
    // } else if (!/^\d{4}-\d{7}$/.test(values.mobile)) {
    //   errors.mobile = "Please enter a valid mobile number (03xx-xxxxxxx).";
    // }

    if (!values.email) {
      errors.email = "Please fill out this field.";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!values.orderNo) {
      errors.orderNo = "Please fill out this field.";
    }

    if (!values.complaint) {
      errors.complaint = "Please fill out this field.";
    }

    return errors;
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validateForm}>
      {() => (
        <form onSubmit={handleSubmit} className="complaint-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field placeHolder='Name' type="text" id="name" name="name" className="form-control" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <Field  placeHolder='03xx-xxxxxx' type="text" id="mobile" name="mobile" className="form-control
            " />
            <ErrorMessage name="mobile" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field  placeHolder='Enter Your Email'  type="text" id="email" name="email" className="form-control" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="orderNo">Order No.</label>
            <Field placeHolder='Enter Order Number' type="text" id="orderNo" name="orderNo" className="form-control" />
            <ErrorMessage name="orderNo" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="complaint">Complaint</label>
            <Field   placeHolder='Enter Details' as="textarea" id="complaint" name="complaint" className="form-control" />
            <ErrorMessage name="complaint" component="div" className="error" />
          </div>

          <button style={{ letterSpacing: '2.8px' }} type="submit" className="w-full bg-[#5781F4]  p-[15px] text-white">SEND</button>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;

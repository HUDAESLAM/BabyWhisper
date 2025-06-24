import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Swal from "sweetalert2";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { useNavigate } from "react-router-dom";
// import Navbar from "../Navbar/Navbar.jsx";

export default function BabywhisperForm() {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef();
  const profileImageRef = useRef(null);

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    baby_name: "",
    birth_date: "",
    gender: "",
    medical_conditions: "",
  };

  const validationSchema = Yup.object({
    parentName: Yup.string()
      .required("Please enter your full name")
      .min(3, "Your name must be at least 3 characters long")
      .matches(/^[^0-9]*$/, "Your name must not contain numbers"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Please enter your email address"),
    password: Yup.string()
      .required("Please enter your password")
      .min(8, "The password must be at least 8 characters long")
      .matches(/[a-z]/, "Include at least 1 lowercase letter")
      .matches(/[A-Z]/, "Include at least 1 uppercase letter")
      .matches(/[0-9]/, "Include at least one number")
      .matches(/[@$!%?&]/, "Include at least 1 special character (@#$%^&)"),
    confirmPassword: Yup.string()
      .required("Re-type your password")
      .oneOf([Yup.ref("password")], "The password you entered does not match"),
    babyName: Yup.string()
      .required("Please enter your full baby name")
      .min(3, "Your baby name must be at least 3 characters long")
      .matches(/^[^0-9]*$/, "Your baby name must not contain numbers"),
    birthDate: Yup.string()
      .required("Please enter your baby’s birth date")
      .matches(/^[^a-zA-Z]*$/, "The birth date must not contain any letters"),
    gender: Yup.string().required("Please select gender"),
    medical: Yup.string(),
  });

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      profileImageRef.current = file;
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="my-5">
      {/* <Navbar className="mb-5" /> */}
      <div className="container py-5">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              const formData = new FormData();
              formData.append("name", values.parentName);
              formData.append("email", values.email);
              formData.append("password", values.password);
              formData.append("confirmPassword", values.confirmPassword);
              formData.append("baby_name", values.babyName);
              formData.append("birth_date", values.birthDate);
              formData.append("gender", values.gender);
              formData.append(
                "medical_conditions",
                values.medical_conditions || ""
              );

              if (profileImageRef.current) {
                formData.append("profile_picture", profileImageRef.current);
              }

              for (let pair of formData.entries()) {
                console.log(pair[0], pair[1]);
              }

              const response = await axios.post(
                "http://localhost:8000/api/auth/register",
                formData,
                {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                }
              );

              localStorage.setItem("userInfo", JSON.stringify(response.data));
              Swal.fire({
                title: "Successfully SignUp!",
                text: "We received your data!",
                icon: "success",
              }).then(() => {
                navigate("/login");
              });

              resetForm();
              setPreview(null);
              profileImageRef.current = null;
            } catch (error) {
              console.error(error.response?.data || error.message);
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting, touched, errors }) => (
            <Form className="w-100 mx-auto" style={{ maxWidth: "600px" }}>
              <div className="text-center mb-4">
                <div
                  className="rounded-circle bg-secondary bg-opacity-25 d-inline-flex justify-content-center align-items-center position-relative"
                  style={{ width: "120px", height: "120px", cursor: "pointer" }}
                  onClick={() => fileInputRef.current.click()}
                >
                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview"
                      className="rounded-circle"
                      style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <MdOutlinePhotoCamera size={32} className="text-primary" />
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="d-none"
                  />
                </div>
              </div>

              {[
                {
                  name: "parentName",
                  type: "text",
                  placeholder: "Parent Name",
                },
                { name: "email", type: "email", placeholder: "Email" },
                { name: "password", type: "password", placeholder: "Password" },
                {
                  name: "confirmPassword",
                  type: "password",
                  placeholder: "Confirm Password",
                },
                { name: "babyName", type: "text", placeholder: "Baby Name" },
                { name: "birthDate", type: "date" },
              ].map((field) => (
                <div className="mb-3" key={field.name}>
                  <Field
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder || ""}
                    className={`form-control ${
                      touched[field.name] && errors[field.name]
                        ? "is-invalid"
                        : touched[field.name]
                        ? "is-valid"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name={field.name}
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
              ))}

              <div className="mb-3">
                <Field
                  as="select"
                  name="gender"
                  className={`form-control ${
                    touched.gender && errors.gender
                      ? "is-invalid"
                      : touched.gender
                      ? "is-valid"
                      : ""
                  }`}
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Field>
                <ErrorMessage
                  name="gender"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="mb-3">
                <Field
                  as="textarea"
                  name="medical"
                  placeholder="Medical Conditions (Optional)"
                  className={`form-control ${
                    touched.medical && errors.medical
                      ? "is-invalid"
                      : touched.medical
                      ? "is-valid"
                      : ""
                  }`}
                />
                <ErrorMessage
                  name="medical"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary px-5"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Register"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

import { useFormik } from "formik";
import { useState } from "react";
import { FaEye, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GoEyeClosed } from "react-icons/go";
import { Link } from "react-router";
import * as Yup from "yup";
import axios from "axios";
import { LoginImg } from "../../assets";
import Swal from "sweetalert2";
import "./Login.css";


export default function Login() {
  const [showPass, setShowPass] = useState(true);
  const [remember, setRemember] = useState(false);
  function handleShowPass() {
    setShowPass((show) => !show);
  }
  function handleRemember() {
    setRemember((r) => !r);
  }
  const loginSchema = Yup.object({
    email: Yup.string()
      .email("Enter a valid Email!")
      .required("This field is required!"),
    password: Yup.string()
      .min(3, "3 min")
      .max(12, "12 max")
      .required("This field is required!"),
  });

  const formik = useFormik({
  initialValues: {
    email: "",
    password: "",
  },
  validationSchema: loginSchema,
  onSubmit: async ({ email, password }, { resetForm }) => {
    const userCred = {
      email,
      password,
      remember,
    };

    try {
      const response = await axios.post("http://localhost:8000/api/auth/register", userCred, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("✅ Server response:", response.data);

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Login data sent successfully 🎉",
      });

      resetForm();
      setRemember(false);
    } catch (error) {
      console.error("❌ Error sending login data:", error);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong. Please try again!",
      });
    }
  },
});


  return (
    <div className="d-flex justify-content-between h-100 pt-5">
      <div className="align-self-center align-items-center w-50">
        <div>
          <div className="d-flex flex-column gap-4">
            <h1 className="text-center font-main text-blue">Welcome Back!</h1>
            <div className="d-flex flex-column align-items-center gap-3">
              <button className="w-50 font-third p-2 rounded-pill d-flex align-items-center justify-content-center gap-2">
                <FcGoogle size={24} />
                <span className="text-light-blue">Sign in with Google</span>
              </button>
              <button className="w-50 p-2 font-third rounded-pill d-flex align-items-center justify-content-center gap-2">
                <FaFacebook size={24} className="text-primary" />
                <span className="text-light-blue">Sign in with Facebook</span>
              </button>
            </div>
            <div className="text-center fw-bold text-blue font-main tracking-1 fs-4">
              OR
            </div>
          </div>
        </div>
        <form onSubmit={formik.handleSubmit} className="px-5">
          <div className="container">
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label fw-bold text-blue font-second"
              >
                Email
              </label>
              <input type="email"
                name="email"
                className="form-control"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="e.g. john@example.com"
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-danger mt-1">{formik.errors.email}</div>
              )}
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label fw-bold text-blue font-second"
              >
                Password
              </label>
              <div className="position-relative">
                <input
                  type={showPass ? "text" : "password"}
                  className="form-control"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your password"
                />
                <span onClick={handleShowPass} className="eye-button">
                  {showPass ? <FaEye /> : <GoEyeClosed />}
                </span>
              </div>
              {formik.touched.password && formik.errors.password && (
                <div className="text-danger mt-1">{formik.errors.password}</div>
              )}
            </div>
            <div className="mb-3 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-1">
                <input
                  className="form-checkbox"
                  type="checkbox"
                  id="exampleCheck1"
                  defaultValue={remember}
                  onChange={handleRemember}
                />
                <label
                  className="form-check-label cursor-pointer"
                  htmlFor="exampleCheck1"
                >
                  Remember me
                </label>
              </div>
              <div>
                <Link className="text-blue" to="/forget-password">
                  Forgot your password?
                </Link>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <button type="submit" className="rounded-pill form-btn ">
                Submit
              </button>
            </div>
            <div className="text-end mt-3">
              <Link className="text-blue" to="/sign-up">
                Don't have an account? sign up
              </Link>
            </div>
          </div>
        </form>
      </div>
      <div className="align-self-end w-50 position-relative">
        <div className="d-flex justify-content-end">
          <img className="img-fluid" src={LoginImg} alt="" />
          <div className="position-absolute text-white start-0 bottom-0 ps-5">
            <h2>Join BabyWhisper</h2>
            <p className="fs-5">
              And make motherhood easier. Trust{" "}
              <span className="fw-bold">BabyWhisper</span> to decode your baby's
              cries and guide you with expert insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
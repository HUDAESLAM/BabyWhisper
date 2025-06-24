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
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showPass, setShowPass] = useState(true);
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

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
      .min(3, "Minimum 3 characters")
      .max(30, "Maximum 30 characters")
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
        const response = await axios.post(
          "http://localhost:8000/api/auth/login",
          userCred,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("✅ Server response:", response.data);

        const expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 90);
        localStorage.setItem("token_expiry", expireDate.toISOString());

        localStorage.setItem("token", response.data.token);
        console.log("✅ Token:", response.data.token);
        console.log("✅ User ID:", response.data.user.user_id);

        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Login successful 🎉",
        });

        if (response.data && response.data.user) {
          localStorage.setItem("userId", response.data.user.user_id); 
          console.log("✅ userId saved:", response.data.user.user_id);
          localStorage.setItem("user", JSON.stringify(response.data.user));
        } else {
          console.warn("⚠️ No user data in response");
        }

        resetForm();
        setRemember(false);

        navigate("/profile"); 
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
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center vh-100 pt-4 pt-md-5 px-3 px-md-5">
      <div className="w-100 w-md-50 order-1 order-md-2 text-center mb-md-0 position-relative mb-2">
        <img className="img-fluid end-0 w-100" src={LoginImg} alt="Login" />

        <div className="position-absolute bottom-0 start-0 p-4 text-start w-100">
          <h2 className="text-white fs-5 fs-md-3 fw-bold">Join BabyWhisper</h2>
          <p className="fs-6 fs-md-5 text-light m-0">
            And make motherhood easier. Trust{" "}
            <span className="fw-bold main">BabyWhisper</span> to decode your
            baby's cries and guide you with expert insights.
          </p>
        </div>
      </div>

      {/* الفورم */}
      <div className="w-100 w-md-50 order-1 order-md-1">
        <div className="d-flex flex-column gap-4">
          <h1 className="text-center font-main text-blue header fs-4 fs-md-2">
            Welcome Back!
          </h1>
          <div className="d-flex flex-column align-items-center gap-3">
            <button className="w-100 w-md-50 font-third p-2 rounded-pill d-flex align-items-center justify-content-center gap-2">
              <FcGoogle size={24} />
              <span className="text-light-blue fs-6">Sign in with Google</span>
            </button>
            <button className="w-100 w-md-50 p-2 font-third rounded-pill d-flex align-items-center justify-content-center gap-2">
              <FaFacebook size={24} className="text-primary" />
              <span className="text-light-blue fs-6">
                Sign in with Facebook
              </span>
            </button>
          </div>
          <div className="text-center fw-bold text-blue font-main tracking-1 fs-6">
            OR
          </div>
        </div>

        <form onSubmit={formik.handleSubmit} className="mt-4">
          <div className="container">
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label fw-bold text-blue font-second fs-6"
              >
                Email
              </label>
              <input
                type="email"
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
                className="form-label fw-bold text-blue font-second fs-6"
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

            <div className="mb-3 d-flex align-items-center justify-content-between flex-wrap">
              <div className="d-flex align-items-center gap-1">
                <input
                  className="form-checkbox"
                  type="checkbox"
                  id="exampleCheck1"
                  defaultValue={remember}
                  onChange={handleRemember}
                />
                <label
                  className="form-check-label cursor-pointer fs-6"
                  htmlFor="exampleCheck1"
                >
                  Remember me
                </label>
              </div>
              <div>
                <Link className="text-blue fs-6" to="/forget-password">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <button type="submit" className="rounded-pill form-btn fs-6">
                Submit
              </button>
            </div>

            <div className="text-end mt-3">
              <Link className="text-blue fs-6" to="/sign-up">
                Don't have an account? sign up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

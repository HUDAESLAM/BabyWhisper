import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom"; 
import "react-toastify/dist/ReactToastify.css";
import Cloudbg from "../../assets/Cloudbg.jpg";
import "./ForgetPassword.css";

export default function ForgetPassword() {
  const navigate = useNavigate(); 

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter a valid email")
        .required("Required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const res = await axios.post(
          "http://localhost:8000/api/auth/forgetPassword",
          { email: values.email }
        );
        toast.success(res.data.message || "Check your email for reset link");
        localStorage.setItem("resetEmail", values.email);
        resetForm();

        setTimeout(() => {
          navigate("/reset-password");
        }, 1500); 
      } catch (error) {
        console.error(error);
        if (error.response?.status === 404) {
          toast.error("Email not found");
        } else {
          toast.error("Try again.");
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
    
    <div className="bg-cloud d-flex justify-content-center align-items-center min-vh-100 pt-4 pt-md-5 text-center flex-column">
      <ToastContainer position="top-center" />
      <div className="header px-3 px-md-0">
        <h1 className="fs-3 text-light-blue">Forget Password</h1>
        <h2 className="fs-5 fs-md-4 mt-3 text-light-blue">
          Please enter your email to reset the password
        </h2>
      </div>

      <form
        onSubmit={formik.handleSubmit}
        className="row g-3 justify-content-center align-items-center flex-column mt-3 w-100 px-3 px-md-0"
      >
        <div className="col-12 col-md-6 col-lg-4">
          <input
            type="email"
            id="email"
            name="email"
            className="form-control w-100"
            placeholder="Enter Your Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-danger text-start mt-1">{formik.errors.email}</div>
          )}
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="d-grid">
            <button
              type="submit"
              className="btn bg-blue text-light w-100 py-2"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? "Sending..." : "Reset password"}
            </button>
          </div>
        </div>
      </form>
    </div>
    </>
  );
}
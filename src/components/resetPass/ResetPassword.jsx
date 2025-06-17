import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useSearchParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const res = await axios.post(
          `http://localhost:8000/api/auth/resetPassword?token=${token}`,
          {
            password: values.password,
          }
        );
        toast.success(res.data.message || "Password reset successfully");
        resetForm();
      } catch (error) {
        console.error(error);
        toast.error(
          error.response?.data?.message || "Reset failed, please try again."
        );
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="container py-5 d-flex justify-content-center align-items-center flex-column vh-100">
      <ToastContainer position="top-center" />
      <h1 className="mb-4">Reset Password</h1>
      <form
        onSubmit={formik.handleSubmit}
        className="w-100"
        style={{ maxWidth: "400px" }}
      >
        <div className="mb-3">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="New Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-danger">{formik.errors.password}</div>
          )}
        </div>

        <div className="mb-3">
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            placeholder="Confirm Password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.confirmPassword &&
            formik.errors.confirmPassword && (
              <div className="text-danger">{formik.errors.confirmPassword}</div>
            )}
        </div>

        <button
          type="submit"
          className="btn bg-blue text-light w-100"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
}

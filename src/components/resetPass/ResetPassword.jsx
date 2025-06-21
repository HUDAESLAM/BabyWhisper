import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Cloudbg from "../../assets/Cloudbg.jpg";
import "./ResetPassword.css"


export default function ResetPassword() {
  const [step, setStep] = useState("verify");
  const [verifiedCode, setVerifiedCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();

  // -------- STEP 1: VERIFY RESET CODE --------
  const verifyFormik = useFormik({
    initialValues: { resetCode: "" },
    validationSchema: Yup.object({
      resetCode: Yup.string()
        .required("Reset code is required")
        .length(6, "Code must be 6 characters"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await axios.post(
          `http://localhost:8000/api/auth/VerifyResetCode?token=${token}`,
          { resetCode: values.resetCode }
        );
        toast.success("Code verified successfully!");
        setVerifiedCode(values.resetCode);
        setStep("password");
      } catch (error) {
        toast.error(error?.response?.data?.message || "Invalid reset code");
      } finally {
        setSubmitting(false);
      }
    },
  });

  // -------- STEP 2: RESET PASSWORD --------
  const passwordFormik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword")], "Passwords must match")
        .required("Please confirm your password"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await axios.post(
          `http://localhost:8000/api/auth/resetPassword?token=${token}`,
          {
            newPassword: values.newPassword,
            resetCode: verifiedCode,
          }
        );
        toast.success("Password reset successfully!");
        navigate("/login");
      } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to reset password");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="background">
    <div className="container">
      <div className="vh-100 row d-flex flex-column align-items-center justify-content-center">
        <div className="col-md-6">
          {step === "verify" ? (
            <form onSubmit={verifyFormik.handleSubmit} className=" p-4 rounded shadow">
              <h1 className="mb-3 text-center">Verify Reset Code</h1>
              <div className="mb-3">
                <label htmlFor="resetCode" className="form-label text-light-blue">Reset Code</label>
                <input
                  type="text"
                  className={`form-control ${verifyFormik.touched.resetCode && verifyFormik.errors.resetCode ? "is-invalid" : ""
                    }`}
                  id="resetCode"
                  {...verifyFormik.getFieldProps("resetCode")}
                />
                {verifyFormik.touched.resetCode && verifyFormik.errors.resetCode && (
                  <div className="invalid-feedback">{verifyFormik.errors.resetCode}</div>
                )}
              </div>
              <button type="submit" className="btn bg-blue text-white w-100" disabled={verifyFormik.isSubmitting}>
                Verify Code
              </button>
            </form>
          ) : (
            <form onSubmit={passwordFormik.handleSubmit} className="border p-4 rounded shadow">
              <h1 className="mb-3 text-center">Reset Password</h1>

              {/* Password */}
              <div className="mb-3 position-relative">
                <label htmlFor="newPassword" className="form-label text-light-blue">New Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className={`form-control ${passwordFormik.touched.newPassword && passwordFormik.errors.newPassword ? "is-invalid" : ""
                    }`}
                  id="newPassword"
                  {...passwordFormik.getFieldProps("newPassword")}
                />
                {passwordFormik.touched.newPassword && passwordFormik.errors.newPassword && (
                  <div className="invalid-feedback">{passwordFormik.errors.newPassword}</div>
                )}
                <span
                  className="position-absolute d-flex top-50 end-0 translate-middle-y px-3"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ cursor: "pointer" }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {/* Confirm Password */}
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label text-light-blue">Confirm Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className={`form-control ${passwordFormik.touched.confirmPassword && passwordFormik.errors.confirmPassword ? "is-invalid" : ""
                    }`}
                  id="confirmPassword"
                  {...passwordFormik.getFieldProps("confirmPassword")}
                />
                {passwordFormik.touched.confirmPassword && passwordFormik.errors.confirmPassword && (
                  <div className="invalid-feedback">{passwordFormik.errors.confirmPassword}</div>
                )}
              </div>

              <button type="submit" className="btn bg-blue text-light w-100" disabled={passwordFormik.isSubmitting}>
                Reset Password
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}

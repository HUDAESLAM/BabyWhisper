import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [profilePicture, setProfilePicture] = useState(null);
  const [preview, setPreview] = useState("");
  const [babies, setBabies] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/user/getUserById/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data);
        setFormData({
          name: res.data.name || "",
          email: res.data.email || "",
        });
        setBabies(res.data.babies || []);
        setPreview(res.data.profile_picture || "");
      })
      .catch((err) => {
        console.error(err);
        Swal.fire("Error", "Failed to load user data", "error");
      });
  }, [userId, token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleBabyChange = (index, field, value) => {
    const updatedBabies = [...babies];
    updatedBabies[index][field] = value;
    setBabies(updatedBabies);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

      if (babies.length === 0) {
      Swal.fire("Error", "Please enter baby information", "error");
      setLoading(false);
      return;
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("babies", JSON.stringify(babies));
    if (profilePicture) {
      data.append("profile_picture", profilePicture);
    }

    try {
      const res = await axios.put(
        `http://localhost:8000/api/user/updateUserById/${userId}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(" Updated user data:", res.data);

      Swal.fire("Success", "Your profile has been updated", "success").then(() =>
        navigate("/profile", { state: { refresh: true } }))
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to update profile", "error");
    } finally {
      setLoading(false);
    }
  };

  if (!user) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Edit Your Profile</h2>
      <form onSubmit={handleSubmit} className="shadow-sm p-4 rounded bg-light">
        {preview && (
          <div className="mb-3 text-center">
            <img
              src={preview}
              alt="Preview"
              className="rounded-circle"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
          </div>
        )}

        <div className="mb-3">
          <label className="form-label fw-bold">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Profile Picture</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        <hr className="my-4" />
        <h4>Baby Information</h4>
        {babies.slice(0,1).map((baby, index) => (
          <div key={index} className="mb-4 border rounded p-3">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Baby Name"
              value={baby.baby_name}
              onChange={(e) =>
                handleBabyChange(index, "baby_name", e.target.value)
              }
            />
            {/* <input
              type="number"
              className="form-control mb-2"
              placeholder="Age in months"
              value={baby.age_in_months}
              onChange={(e) =>
                handleBabyChange(index, "age_in_months", e.target.value)
              }
            /> */}
            <select
              className="form-select mb-2"
              value={baby.gender}
              onChange={(e) =>
                handleBabyChange(index, "gender", e.target.value)
              }
            >
              <option value="">Select Gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
            <input
              type="date"
              className="form-control mb-2"
              value={baby.birth_date}
              onChange={(e) =>
                handleBabyChange(index, "birth_date", e.target.value)
              }
            />
            <textarea
              className="form-control mb-2"
              placeholder="Medical Conditions"
              value={baby.medical_conditions}
              onChange={(e) =>
                handleBabyChange(index, "medical_conditions", e.target.value)
              }
            />
          </div>
        ))}

        <div className="d-flex justify-content-end gap-3 mt-4">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/profile")}
            disabled={loading}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}

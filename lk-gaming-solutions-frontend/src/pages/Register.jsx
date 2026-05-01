import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseTitleName from "../utils/UseTitleName";

const Register = () => {
  UseTitleName("Register");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangePW = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.username) {
      newErrors.username = "Username is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    }

    if (
      formData.password &&
      formData.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    // If no errors then submit
    if (Object.keys(newErrors).length === 0) {
      navigate("/login");
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Orbitron:wght@700;900&display=swap');

        body {
          background: #0a0e1a;
          color: #fff;
        }

        .gaming-bg {
          background: linear-gradient(135deg, #0a0e1a 0%, #1a1f2e 50%, #0f1419 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .page-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 36px;
          background: linear-gradient(135deg, #BD9B52, #D4AF6A);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 3px;
          text-align: center;
          margin-bottom: 25px;
        }

        .register-card {
          background: linear-gradient(135deg, #1e2329 0%, #2a313d 100%);
          border: 2px solid #353d4a;
          border-radius: 12px;
          padding: 35px;
          width: 100%;
          max-width: 450px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        }

        .form-control {
          border: 2px solid #353d4a;
          padding: 12px;
          border-radius: 8px;
          transition: 0.3s;
        }

        .form-control:focus {
          border-color: #BD9B52;
          box-shadow: 0 0 10px rgba(189,155,82,0.3);
        }

        .btn-gaming {
          width: 100%;
          background: linear-gradient(135deg, #BD9B52, #D4AF6A);
          border: none;
          color: #000;
          font-weight: bold;
          padding: 12px;
          border-radius: 8px;
          letter-spacing: 2px;
          transition: 0.3s;
        }

        .btn-gaming:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(189,155,82,0.5);
        }

        .extra-links {
          text-align: center;
          margin-top: 15px;
          font-size: 14px;
        }

        .extra-links a {
          color: #BD9B52;
          text-decoration: none;
        }

        .extra-links a:hover {
          text-decoration: underline;
        }
      `}</style>

      <section className="gaming-bg">
        <div className="register-card">
          <h1 className="page-title">
            <i className="bi bi-person-add"></i> REGISTER
          </h1>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="form-control"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && (
              <p style={{ color: "red", fontSize: "13px" }}>
                <i class="bi bi-exclamation-circle"></i> {errors.username}
              </p>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control mt-3"
              value={formData.email}
              onChange={handleChange}
            />

            {errors.email && (
              <p style={{ color: "red", fontSize: "13px" }}>
                <i class="bi bi-exclamation-circle"></i> {errors.email}
              </p>
            )}

            <div className="position-relative">
              <input
                type={showPassword.password ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="form-control mt-3"
                value={formData.password}
                onChange={handleChange}
              />
              <span
                onClick={() => handleChangePW("password")}
                className="position-absolute top-50 end-0 translate-middle-y me-3 text-black"
                style={{ cursor: "pointer", userSelect: "none" }}
              >
                {showPassword.password ? (
                  <i className="bi bi-eye-fill"></i>
                ) : (
                  <i className="bi bi-eye-slash-fill"></i>
                )}
              </span>
            </div>

            {errors.password && (
              <p style={{ color: "red", fontSize: "13px" }}>
                <i class="bi bi-exclamation-circle"></i> {errors.password}
              </p>
            )}

            <div className="position-relative">
              <input
                type={showPassword.confirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                className="form-control mt-3"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <span
                onClick={() => handleChangePW("confirmPassword")}
                className="position-absolute top-50 end-0 translate-middle-y me-3 text-black"
                style={{ cursor: "pointer", userSelect: "none" }}
              >
                {showPassword.confirmPassword ? (
                  <i className="bi bi-eye-fill"></i>
                ) : (
                  <i className="bi bi-eye-slash-fill"></i>
                )}
              </span>
            </div>

            {errors.confirmPassword && (
              <p style={{ color: "red", fontSize: "13px" }}>
                <i class="bi bi-exclamation-circle"></i>{" "}
                {errors.confirmPassword}
              </p>
            )}

            <button type="submit" className="btn-gaming mt-3">
              CREATE ACCOUNT
            </button>
          </form>

          <div className="extra-links">
            <p>
              Already have an account?
              <a href="/login"> Login</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;

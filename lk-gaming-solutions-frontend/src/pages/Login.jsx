import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseTitleName from "../utils/UseTitleName";

const Login = () => {
  UseTitleName("Login");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    // If no errors then submit
    if (Object.keys(newErrors).length === 0) {
      navigate("/");
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
          margin-bottom: 30px;
        }

        .login-card {
          background: linear-gradient(135deg, #1e2329 0%, #2a313d 100%);
          border: 2px solid #353d4a;
          border-radius: 12px;
          padding: 40px;
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
          margin: 0 5px;
        }

        .extra-links a:hover {
          text-decoration: underline;
        }
      `}</style>

      <section className="gaming-bg">
        <div className="login-card">
          <h1 className="page-title">
            <i className="bi bi-person-circle"></i> LOGIN
          </h1>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="form-control"
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
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                className="form-control mt-3"
                value={formData.password}
                onChange={handleChange}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="position-absolute top-50 end-0 translate-middle-y me-3 text-black"
                style={{ cursor: "pointer", userSelect: "none" }}
              >
                {showPassword ? (
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

            <button type="submit" className="btn-gaming mt-3">
              LOGIN
            </button>
          </form>

          <div className="extra-links">
            <p>
              Don't have an account?
              <a href="/register"> Register</a>
            </p>
            <p>
              <a href="/forgot-password">Forgot Password?</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

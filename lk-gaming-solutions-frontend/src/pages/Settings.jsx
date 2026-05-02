import React, { useState } from "react";
import UseTitleName from "../utils/UseTitleName";

const Settings = () => {
  UseTitleName("Settings");

  const [form, setForm] = useState({
    username: "Lahiru",
    email: "lahiru@example.com",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    paypal: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    // Profile validation
    if (!form.username) newErrors.username = "Username is required";
    if (!form.email) newErrors.email = "Email is required";

    // Password validation
    if (form.newPassword !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Card validation
    if (form.cardNumber && form.cardNumber.length < 12) {
      newErrors.cardNumber = "Invalid card number";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      return
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@500;600&display=swap');

        body {
          background: #0a0e1a;
          color: #fff;
        }

        .gaming-bg {
          min-height: 100vh;
          padding: 50px 20px;
          background: linear-gradient(135deg, #0a0e1a, #1a1f2e);
        }

        .settings-card {
          max-width: 1000px;
          margin: auto;
          background: linear-gradient(135deg, #1e2329, #2a313d);
          border: 2px solid #353d4a;
          border-radius: 14px;
          padding: 30px;
        }

        .title {
          text-align: center;
          font-family: 'Orbitron';
          font-size: 32px;
          color: #BD9B52;
          margin-bottom: 25px;
        }

        .form-control {
          width: 100%;
          padding: 12px;
          margin-bottom: 10px;
          border-radius: 8px;
          border: 2px solid #353d4a;
          color: #000000;
        }

        .form-control:focus {
          border-color: #BD9B52;
          box-shadow: 0 0 10px rgba(189,155,82,0.3);
        }

        .section-title {
          margin-top: 20px;
          margin-bottom: 10px;
          color: #BD9B52;
          font-weight: bold;
        }

        .payment-box {
          background: #0f1419;
          border: 2px solid #BD9B52;
          border-radius: 10px;
          padding: 15px;
          transition: 0.3s;
        }

        .payment-title {
          margin-bottom: 10px;
          font-weight: bold;
        }

        .btn-gaming {
          width: 100%;
          margin-top: 20px;
          padding: 12px;
          border: none;
          border-radius: 8px;
          font-weight: bold;
          background: linear-gradient(135deg, #BD9B52, #D4AF6A);
          color: #000;
          transition: 0.3s;
        }

        .btn-gaming:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(189,155,82,0.5);
        }

        .error {
          color: #ff4d4f;
          font-size: 13px;
          margin-bottom: 10px;
        }
      `}</style>

      <section className="gaming-bg">
        <div className="settings-card">
          <h1 className="title">⚙ SETTINGS</h1>

          <form onSubmit={handleSubmit}>
            {/* PROFILE */}
            <h5 className="section-title">👤 Profile Info</h5>

            <input
              type="text"
              name="username"
              placeholder="Username"
              className="form-control"
              value={form.username}
              onChange={handleChange}
            />
            {errors.username && <p className="error"><i class="bi bi-exclamation-circle"></i> {errors.username}</p>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error"><i class="bi bi-exclamation-circle"></i> {errors.email}</p>}

            {/* PASSWORD */}
            <h5 className="section-title">🔒 Change Password</h5>

            <input
              type="password"
              name="currentPassword"
              placeholder="Current Password"
              className="form-control"
              value={form.currentPassword}
              onChange={handleChange}
            />

            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              className="form-control"
              value={form.newPassword}
              onChange={handleChange}
            />
            {errors.newPassword && (
              <p className="error"><i class="bi bi-exclamation-circle"></i> {errors.newPassword}</p>
            )}

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="form-control"
              value={form.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="error"><i class="bi bi-exclamation-circle"></i> {errors.confirmPassword}</p>
            )}

            {/* PAYMENT */}
            <h5 className="section-title">💳 Payment Methods</h5>

            <div>
              {/* CARD */}
              <div className="payment-box">
                <h6 className="payment-title">💳 Card Details</h6>

                <input
                  type="text"
                  name="cardName"
                  placeholder="Card Holder Name"
                  className="form-control"
                  value={form.cardName}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  className="form-control"
                  value={form.cardNumber}
                  onChange={handleChange}
                />
                {errors.cardNumber && (
                  <p className="error"><i class="bi bi-exclamation-circle"></i> {errors.cardNumber}</p>
                )}

                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  className="form-control"
                  value={form.expiry}
                  onChange={handleChange}
                />
              </div>

              {/* PAYPAL */}
              <div className="payment-box mt-3">
                <h6 className="payment-title"><i className="bi bi-paypal"></i> PayPal</h6>

                <input
                  type="email"
                  name="paypal"
                  placeholder="PayPal Email"
                  className="form-control"
                  value={form.paypal}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button type="submit" className="btn-gaming">
              SAVE CHANGES
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Settings;
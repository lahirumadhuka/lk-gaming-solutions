import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UseTitleName from '../utils/UseTitleName';

const Cart = () => {
  UseTitleName("Cart")
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Cyberpunk 2077",
      price: 59.99,
      oldPrice: 59.99,
      discount: 50,
      platform: "Steam",
      seller: "CyberKeys_Pro",
      rating: 4.5,
      region: "Global",
      genre: "RPG",
      quantity: 1
    },
    {
      id: 2,
      title: "Baldur's Gate 3",
      price: 44.99,
      oldPrice: 69.99,
      discount: 36,
      platform: "Steam",
      seller: "RPGMaster",
      rating: 4.9,
      region: "Global",
      genre: "RPG",
      quantity: 1
    },
    {
      id: 3,
      title: "Elden Ring",
      price: 39.99,
      oldPrice: 59.99,
      discount: 33,
      platform: "Steam",
      seller: "SoulsVault",
      rating: 4.8,
      region: "Global",
      genre: "Action",
      quantity: 2
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((sum, item) => sum + ((item.oldPrice - item.price) * item.quantity), 0);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Orbitron:wght@700;900&family=Teko:wght@600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: #0a0e1a;
          color: #fff;
          overflow-x: hidden;
        }

        .gaming-bg {
          background: linear-gradient(135deg, #0a0e1a 0%, #1a1f2e 50%, #0f1419 100%);
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        }

        .gaming-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 200%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #BD9B52, transparent);
          animation: scan 4s linear infinite;
        }

        @keyframes scan {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }

        .btn-gaming {
          background: linear-gradient(135deg, #BD9B52 0%, #D4AF6A 100%);
          border: none;
          color: #000;
          font-weight: 700;
          font-family: 'Orbitron', sans-serif;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 12px 32px;
          font-size: 14px;
          border-radius: 8px;
          transition: all 0.3s ease;
          box-shadow: 0 8px 30px rgba(189, 155, 82, 0.4);
        }

        .btn-gaming:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(189, 155, 82, 0.6);
          color: #000;
        }

        /* Page Title */
        .page-title {
          font-family: 'Orbitron', sans-serif;
          font-weight: 900;
          font-size: 48px;
          background: linear-gradient(135deg, #BD9B52 0%, #D4AF6A 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 3px;
        }

        /* Cart Item Card */
        .cart-item {
          background: linear-gradient(135deg, #1e2329 0%, #2a313d 100%);
          border: 2px solid #353d4a;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 16px;
          transition: all 0.3s ease;
          position: relative;
        }

        .cart-item:hover {
          border-color: #BD9B52;
          box-shadow: 0 8px 30px rgba(189, 155, 82, 0.2);
        }

        .cart-item-img {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #2a313d 0%, #1e2329 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .discount-badge {
          background: linear-gradient(135deg, #ff0080 0%, #ff8c00 100%);
          color: white;
          font-family: 'Orbitron', sans-serif;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 12px;
          letter-spacing: 1px;
        }

        .platform-badge {
          display: inline-block;
          background: rgba(185, 11, 6, 0.2);
          border: 1px solid rgba(185, 11, 6, 0.4);
          color: #B90B06;
          font-size: 11px;
          padding: 4px 10px;
          border-radius: 6px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .platform-badge.steam {
          background: rgba(23, 26, 33, 0.5);
          border-color: rgba(102, 192, 244, 0.4);
          color: #66c0f4;
        }

        .platform-badge.epic {
          background: rgba(18, 18, 18, 0.5);
          border-color: rgba(255, 255, 255, 0.4);
          color: #fff;
        }

        .platform-badge.gog {
          background: rgba(134, 26, 168, 0.2);
          border-color: rgba(134, 26, 168, 0.4);
          color: #b666d2;
        }

        .platform-badge.rockstar {
          display: inline-block;
          background: rgba(189, 155, 82, 0.2);
          border: 1px solid rgba(189, 155, 82, 0.4);
          color: #BD9B52;
          font-size: 11px;
          padding: 4px 10px;
          border-radius: 6px;
          font-weight: 700;
          letter-spacing: 1px;
        }
        
        .platform-badge.ps4,
        .platform-badge.ps5 {
          background: rgba(0, 89, 180, 0.2);
          border-color: rgba(0, 89, 180, 0.4);
          color: #0059B4;
        }
        
        .platform-badge.xbox {
          background: rgba(16, 124, 16, 0.2);
          border-color: rgba(16, 124, 16, 0.4);
          color: #107c10;
        }

        .genre-badge {
          display: inline-block;
          background: rgba(189, 155, 82, 0.15);
          border: 1px solid rgba(189, 155, 82, 0.3);
          color: #BD9B52;
          font-size: 10px;
          padding: 3px 8px;
          border-radius: 4px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .seller-info {
          font-size: 12px;
          color: #8b95a5;
          font-weight: 600;
        }

        .verified-seller {
          color: #00ff88;
        }

        .price-display {
          font-family: 'Orbitron', sans-serif;
          font-weight: 700;
          font-size: 24px;
          color: #BD9B52;
        }

        .old-price {
          text-decoration: line-through;
          color: #5a6270;
          font-size: 14px;
        }

        .rating-stars {
          color: #ffd700;
          font-size: 12px;
        }

        /* Quantity Control */
        .quantity-control {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #1e2329;
          border: 2px solid #353d4a;
          border-radius: 8px;
          padding: 4px;
        }

        .quantity-btn {
          background: transparent;
          border: none;
          color: #BD9B52;
          font-size: 18px;
          font-weight: 700;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 6px;
        }

        .quantity-btn:hover {
          background: rgba(189, 155, 82, 0.2);
        }

        .quantity-display {
          color: #fff;
          font-weight: 700;
          min-width: 30px;
          text-align: center;
          font-family: 'Orbitron', sans-serif;
        }

        /* Remove Button */
        .remove-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          background: transparent;
          border: 2px solid #353d4a;
          color: #ff4444;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .remove-btn:hover {
          background: rgba(255, 68, 68, 0.1);
          border-color: #ff4444;
          transform: scale(1.1);
        }

        /* Summary Card */
        .summary-card {
          background: linear-gradient(135deg, #1e2329 0%, #2a313d 100%);
          border: 2px solid #353d4a;
          border-radius: 12px;
          padding: 24px;
          position: sticky;
          top: 100px;
        }

        .summary-title {
          font-family: 'Orbitron', sans-serif;
          font-weight: 700;
          font-size: 24px;
          color: #BD9B52;
          margin-bottom: 24px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 16px;
          color: #8b95a5;
          font-weight: 600;
          font-size: 16px;
        }

        .summary-row.total {
          border-top: 2px solid #353d4a;
          padding-top: 16px;
          margin-top: 16px;
          font-size: 20px;
          color: #fff;
        }

        .summary-row.total .amount {
          font-family: 'Orbitron', sans-serif;
          font-weight: 900;
          font-size: 32px;
          color: #BD9B52;
        }

        .summary-row.savings {
          color: #00ff88;
        }

        .summary-row.promo {
          color: #ff8c00;
        }

        /* Empty Cart */
        .empty-cart {
          text-align: center;
          padding: 80px 20px;
        }

        .empty-cart-icon {
          font-size: 120px;
          color: #353d4a;
          margin-bottom: 24px;
        }

        .empty-cart-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 32px;
          color: #8b95a5;
          margin-bottom: 16px;
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 32px;
          }
          .cart-item-img {
            width: 80px;
            height: 80px;
          }
        }
      `}</style>

      {/* Main Content */}
      <section className="gaming-bg py-5 px-3 px-lg-0">
        <div className="container">
          {/* Page Title */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="page-title">
              <i className="bi bi-cart3 me-3"></i>SHOPPING CART
            </h1>
            <div
              style={{ color: "#8b95a5", fontSize: "18px", fontWeight: 600 }}
            >
              {cartItems.length} {cartItems.length === 1 ? "Item" : "Items"}
            </div>
          </div>

          {cartItems.length === 0 ? (
            /* Empty Cart */
            <div className="empty-cart">
              <div className="empty-cart-icon">
                <i className="bi bi-cart-x"></i>
              </div>
              <h2 className="empty-cart-title">Your Cart is Empty</h2>
              <p
                style={{
                  color: "#8b95a5",
                  fontSize: "18px",
                  marginBottom: "32px",
                }}
              >
                Start adding some games to your cart!
              </p>
              <button
                className="btn btn-gaming"
                onClick={() => navigate("/browse-games")}
              >
                <i className="bi bi-search me-2"></i>Browse Games
              </button>
            </div>
          ) : (
            <div className="row">
              {/* Cart Items */}
              <div className="col-lg-8 mb-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <button
                      className="remove-btn"
                      onClick={() => removeItem(item.id)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>

                    <div className="row align-items-center mt-md-5">
                      <div className="col-md-2 mb-3 mb-md-0">
                        <div className="cart-item-img">
                          <i
                            className="bi bi-controller"
                            style={{ fontSize: "48px", color: "#353d4a" }}
                          ></i>
                        </div>
                      </div>

                      <div className="col-md-6 mb-3 mb-md-0">
                        <h4
                          style={{
                            color: "#fff",
                            fontWeight: 700,
                            marginBottom: "8px",
                          }}
                        >
                          {item.title}
                        </h4>
                        <div className="mb-2 d-flex gap-2 align-items-center flex-wrap">
                          <span className={`platform-badge ${item.platform.toLowerCase().replace(/\//g, " ")}`}>
                            {item.platform}
                          </span>
                          <span className="genre-badge">{item.genre}</span>
                          <span className="discount-badge">
                            -{item.discount}%
                          </span>
                        </div>
                        <div className="seller-info mb-2">
                          <i className="bi bi-person-check verified-seller me-1"></i>
                          Sold by:{" "}
                          <span style={{ color: "#BD9B52" }}>
                            {item.seller}
                          </span>
                        </div>
                        <div className="rating-stars">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className={`bi bi-star${i < Math.floor(item.rating) ? "-fill" : ""}`}
                            ></i>
                          ))}
                          <span
                            style={{
                              color: "#8b95a5",
                              fontSize: "12px",
                              marginLeft: "8px",
                            }}
                          >
                            ({item.rating})
                          </span>
                        </div>
                        <div
                          style={{
                            color: "#8b95a5",
                            fontSize: "12px",
                            marginTop: "8px",
                          }}
                        >
                          {item.region}
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="text-md-end">
                          <div className="price-display mb-2">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                          {item.price !== item.oldPrice && (
                            <div className="old-price mb-3">
                              ${(item.oldPrice * item.quantity).toFixed(2)}
                            </div>
                          )}

                          <div className="quantity-control d-inline-flex mb-3">
                            <button
                              className="quantity-btn"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                            >
                              <i className="bi bi-dash"></i>
                            </button>
                            <span className="quantity-display">
                              {item.quantity}
                            </span>
                            <button
                              className="quantity-btn"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                            >
                              <i className="bi bi-plus"></i>
                            </button>
                          </div>

                          <div style={{ color: "#8b95a5", fontSize: "13px" }}>
                            ${item.price} each
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="col-lg-4">
                <div className="summary-card">
                  <h3 className="summary-title">Order Summary</h3>

                  <div className="summary-row">
                    <span>
                      Subtotal (
                      {cartItems.reduce((sum, item) => sum + item.quantity, 0)}{" "}
                      items)
                    </span>
                    <span className="amount">${total.toFixed(2)}</span>
                  </div>

                  {savings > 0 && (
                    <div className="summary-row savings">
                      <span>Your Savings</span>
                      <span className="amount">-${savings.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="summary-row total">
                    <span>Total</span>
                    <span className="amount">${total.toFixed(2)}</span>
                  </div>

                  {/* Checkout Button */}
                  <button
                    className="btn btn-gaming w-100 mt-4"
                    style={{ padding: "16px" }}
                  >
                    <i className="bi bi-lock-fill me-2"></i>Proceed to Checkout
                  </button>

                  {/* Trust Badges */}
                  <div
                    className="mt-4 pt-4"
                    style={{ borderTop: "2px solid #353d4a" }}
                  >
                    <div className="d-flex justify-content-around text-center">
                      <div>
                        <i
                          className="bi bi-shield-check"
                          style={{
                            fontSize: "24px",
                            color: "#00ff88",
                            marginBottom: "8px",
                          }}
                        ></i>
                        <div
                          style={{
                            fontSize: "11px",
                            color: "#8b95a5",
                            fontWeight: 600,
                          }}
                        >
                          Secure
                          <br />
                          Payment
                        </div>
                      </div>
                      <div>
                        <i
                          className="bi bi-lightning-charge-fill"
                          style={{
                            fontSize: "24px",
                            color: "#BD9B52",
                            marginBottom: "8px",
                          }}
                        ></i>
                        <div
                          style={{
                            fontSize: "11px",
                            color: "#8b95a5",
                            fontWeight: 600,
                          }}
                        >
                          Instant
                          <br />
                          Delivery
                        </div>
                      </div>
                      <div>
                        <i
                          className="bi bi-headset"
                          style={{
                            fontSize: "24px",
                            color: "#BD9B52",
                            marginBottom: "8px",
                          }}
                        ></i>
                        <div
                          style={{
                            fontSize: "11px",
                            color: "#8b95a5",
                            fontWeight: 600,
                          }}
                        >
                          24/7
                          <br />
                          Support
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Cart;
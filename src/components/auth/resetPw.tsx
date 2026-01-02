import React, { useState } from "react";
import Eyebrow from "@assets/images/eyebrow.png";

function ResetPw() {
  const [formData, setFormData] = useState({ password: "", confirmPassword: "" });
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [error, setError] = useState("");
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    if (error) setError("");
  };

  // 表單送出
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password.length < 6) {
        setError("密碼長度至少需要 6 個字元");
        return;
    }
    if (formData.password !== formData.confirmPassword) {
        setError("兩次輸入的密碼不一致");
        return;
    }

    console.log("密碼重設成功:", formData.password);
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="auth-header">
        <h1>重設帳戶密碼</h1>
        {error && <p className="form-status text-danger">{error}</p>}
      </div>

      <div className="auth-body">
        <div className="form-group">
          <label htmlFor="new_password" className="form-label">
            輸入新密碼
          </label>
          <div className="form-control-group position-relative">
            <input
              id="password"
              className={`form-control ${error ? "is-invalid" : ""}`}
              type={showPassword1 ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
            />
            <button 
                type="button" 
                className="eyeBtn" 
                onClick={() => setShowPassword1(!showPassword1)}
                >
                    {showPassword1 ? (
                        <i className="bi bi-eye-fill"></i>
                    ) : (
                        <img src={Eyebrow.src} alt="" />
                    )}
                </button>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="confirm_password" className="form-label">
            確認新密碼
          </label>
          <div className="form-control-group position-relative">
            <input
              id="confirmPassword"
              className={`form-control ${error ? "is-invalid" : ""}`}
              type={showPassword2 ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <button 
              type="button" 
              className="eyeBtn" 
              onClick={() => setShowPassword2(!showPassword2)}
            >
                {showPassword2 ? (
                    <i className="bi bi-eye-fill"></i>
                ) : (
                    <img src={Eyebrow.src} alt="" />
                )}
            </button>
          </div>
        </div>


        <div className="form-group">
            <div className="form-group">
            <div className="btns">
                <button type="button" className="btn btn-cancel">
                取消
                </button>
                <button type="submit" className="btn btn-primary">
                    變更密碼
                </button>
            </div>
            </div>
        </div>
      </div>
    </form>
  );
}

export default ResetPw;

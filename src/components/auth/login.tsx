import React, { useState } from "react";
import Eyebrow from "@assets/images/eyebrow.png";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  // 驗證規則
  const validate = () => {
    const newErrors = {};

    if (!username.trim()) {
      newErrors.username = "請輸入使用者名稱";
    }

    if (!password.trim()) {
      newErrors.password = "請輸入密碼";
    }

    return newErrors;
  };

  // 表單送出
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    // 有錯誤就不送出
    if (Object.keys(validationErrors).length > 0) return;

    console.log({ username, password });
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="auth-header">
        <h1>登入</h1>
      </div>

      <div className="auth-body">
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            使用者名稱
          </label>
          <div className="form-control-group">
            <input
              id="username"
              className="form-control"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {errors.username && (
            <div className="form-error">{errors.username}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="userpw" className="form-label">
            密碼
          </label>
          <div className="form-control-group position-relative">
            <input
              id="userpw"
              className="form-control"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button 
              type="button" 
              className="eyeBtn" 
              onClick={() => setShowPassword(!showPassword)}
            >
                {showPassword ? (
                    <i className="bi bi-eye-fill"></i>
                ) : (
                    <img src={Eyebrow.src} alt="" />
                )}
            </button>
          </div>
          {errors.password && (
            <div className="form-error">{errors.password}</div>
          )}
          <a href="/forget_password" className="auth-link">
            忘記密碼
          </a>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            登入
          </button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;

import React, { useState } from "react";

function ForgetPw() {
  const [answers, setAnswers] = useState({ q1: "", q2: "" });
  // status 可以是: 'idle' (初始), 'success' (成功), 'error' (失敗)
  const [status, setStatus] = useState("idle");

  // 處理輸入更動
  const handleChange = (e) => {
    const { id, value } = e.target;
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  // 表單送出
  const handleSubmit = (e) => {
    e.preventDefault();

    if (answers.q1.trim() && answers.q2.trim()) {
      // 發送 API 請求
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  // 重設表單
  const handleReset = () => {
    setAnswers({ q1: "", q2: "" });
    setStatus("idle");
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="auth-header">
        <h1>忘記密碼</h1>
        {status === "success" && <p className="form-status text-primary">回答正確</p>}
        {status === "error" && <p className="form-status text-danger">回答錯誤</p>}
      </div>

      <div className="auth-body">
        <div className="form-group">
          <label htmlFor="q1" className="form-label">你小時候的寵物名字？</label>
          <div className="form-control-group">
            <input
              id="q1"
              className="form-control"
              type="text"
              value={answers.q1}
              onChange={handleChange}
              placeholder="請輸入答案"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="q2" className="form-label">你最喜歡的食物是什麼？</label>
          <div className="form-control-group">
            <input
              id="q2"
              className="form-control"
              type="text"
              value={answers.q2}
              onChange={handleChange}
              placeholder="請輸入答案"
            />
          </div>
        </div>

        <div className="form-group">
          <div className="btns">
            <button type="button" className="btn btn-cancel" onClick={handleReset}>
              重設
            </button>
            <button type="submit" className="btn btn-primary" disabled={status === "success"}>
              {status === "success" ? "已驗證" : "送出"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ForgetPw;
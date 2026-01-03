import React, { useState } from "react";
import DefaultAvater from "@assets/images/person-circle.svg";
import Account from "@assets/images/account.png";

function Header() {
  return (
    <header>
        <nav className="navbar">
            <div className="nav-left">
                <button type="button" className="setting-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="25" viewBox="0 0 32 25" fill="none">
                        <circle cx="10.8333" cy="4.16667" r="4.16667" fill="white"/>
                        <circle cx="10.8333" cy="20.8333" r="4.16667" fill="white"/>
                        <circle cx="22.5" cy="12.5" r="4.16667" fill="white"/>
                        <rect x="16.6667" y="3.33334" width="15" height="1.66667" rx="0.833333" fill="white"/>
                        <rect x="16.6667" y="20" width="15" height="1.66667" rx="0.833333" fill="white"/>
                        <rect x="28.3333" y="11.6667" width="3.33333" height="1.66667" rx="0.833333" fill="white"/>
                        <rect y="3.33334" width="5" height="1.66667" rx="0.833333" fill="white"/>
                        <rect y="20" width="5" height="1.66667" rx="0.833333" fill="white"/>
                        <rect y="11.6667" width="16.6667" height="1.66667" rx="0.833333" fill="white"/>
                    </svg>
                </button>
            </div>
            <div className="nav-info">
                <ul>
                    <li>機器人4G訊號：<span>SIM 弱</span></li>
                    <li>操控台4G訊號：<span>SIM 弱</span></li>
                    <li>系統衛星時間：<span>2025年08月08日 11時43分17秒</span></li>
                </ul>
            </div>
            <div className="nav-right">
                <User />
            </div>
        </nav>
    </header>
  );
}

function User() {
    const [open, setOpen] = useState(false);
    return (
        <div className="dropdown">
            <button
              type="button" 
              className="user-btn"
              onClick={() => setOpen(!open)}
            >
                管理者/使用者 名稱
                <div className="avatar">
                    <img src={DefaultAvater.src} alt='' />
                </div>
            </button>
            <div className={`dropdown-menu ${open ? "show" : ""}`}>
                <div className="user-control">
                    <div className="account-item">
                        <div className="avatar">
                            <img src={DefaultAvater.src} alt='' />
                        </div>
                        <span>Yoi</span>
                    </div>
                    <hr />
                    <button className="account-item">
                        <div className="avatar">
                            <img src={Account.src} alt='' />
                        </div>
                        <span>管理使用者中心</span>
                    </button>
                </div>
                <button 
                    className="logout-btn" 
                >
                    <div className="icon">
                        <i className="bi bi-box-arrow-in-right"></i>
                    </div>
                    <span>登出</span>
                </button>
            </div>
        </div>
    )
}

export default Header;

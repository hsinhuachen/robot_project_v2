import React, { useState } from "react";

import SectionHeader from "@components/SectionHeader.tsx";
import Bg from "@assets/images/bg.jpg"

function Account({ showModal, onClose }) {
  const [users, setUsers] = useState([
    { id: 1, name: "Yoi", role: 1, status: 1 },
    { id: 2, name: "Kevin", role: 0, status: 0 },
    { id: 3, name: "Alex", role: 1, status: 1 }
  ]);

  // 刪除使用者
  const handleDelete = (name, id) => {
    if(confirm("確定刪除使用者" + name + "？")){
        setUsers(users.filter(user => user.id !== id));
    }
  };

  // 新增使用者
  const handleAdd = () => {
    const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
    const newUser = { id: newId, name: `User${newId}`, role: 1, status: 1 };
    setUsers([...users, newUser]);
  };

  // 更新使用者狀態
  const handleStatusChange = (id, newStatus) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, status: Number(newStatus) } : user
    ));
  };

  // 更新使用者權限
  const handleRoleChange = (id, newStatus) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, role: Number(newStatus) } : user
    ));
  };

  // 更新密碼
  const resetPw = () => {
    window.location.href = "/reset_password";
  }

  // 儲存
  const handleSave = () => {
    onClose();
  };

  if (!showModal) return null;

  return showModal && (
    <div 
      className="account-modal" 
      style={{ backgroundImage: `url(${Bg.src})` }}
    >
        <div className="account-panel">
            <div className="modal-body">
                <SectionHeader title={"管理使用者中心"} />
                <div className="modal-content">
                    <table className="table w-100">
                        <thead>
                            <tr>
                                <th scope="col">使用者名稱</th>
                                <th scope="col">密碼設置</th>
                                <th scope="col">安全問題</th>
                                <th scope="col">權限調整</th>
                                <th scope="col" className="text-center">帳號狀態</th>
                                <th scope="col" width="10%">新增/刪除</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>
                                        <button 
                                          type="button"
                                          className="account-btn text-start"
                                          onClick={() => resetPw()}
                                        >
                                            ******
                                        </button>
                                    </td>
                                    <td>******</td>
                                    <td>
                                        <select
                                            className="account-select"
                                            value={user.role}
                                            onChange={(e) => handleRoleChange(user.id, e.target.value)}
                                        >
                                            <option value={1}>管理者</option>
                                            <option value={0}>一般使用者</option>
                                        </select>
                                    </td>
                                    <td className="text-center">
                                        <select
                                            className="account-select"
                                            value={user.status}
                                            onChange={(e) => handleStatusChange(user.id, e.target.value)}
                                        >
                                            <option value={1}>啟用</option>
                                            <option value={0}>停用</option>
                                        </select>
                                    </td>
                                    <td>
                                        <button 
                                          type="button"
                                          className="account-btn"
                                          onClick={() => handleDelete(user.name, user.id)}
                                        >
                                            -
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button 
                                      type="button" 
                                      onClick={handleAdd}
                                      className="account-btn"
                                    >
                                        +
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="modal-footer">
                    <div className="btns">
                        <button 
                          type="button" 
                          className="btn btn-primary"
                          onClick={() => handleSave()}
                        >
                            儲存
                        </button>
                        <button 
                          type="button" 
                          className="btn btn-primary"
                          onClick={onClose}
                        >
                            關閉
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <button
          type="button"
          className="close-btn"
          onClick={onClose}
        >
            &times;
        </button>
    </div>
  );
}

export default Account;

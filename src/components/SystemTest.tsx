import React, { useState } from "react";
import SectionHeader from "@components/SectionHeader.tsx";

function SystemTest({onClose}) {
  const [result, setResult] = useState(true)
  const [list, setList] = useState([
    { id: 1, name: "NVR Server測試", status: 1 },
    { id: 2, name: "熱影像模組測試", status: 1 },
    { id: 3, name: "單點測溫模組測試", status: 1 },
    { id: 4, name: "可見光模組測試", status: 1 },
    { id: 5, name: "PT變速雲台測試", status: 1 },
    { id: 6, name: "環景攝影機模組測試", status: 1 },
    { id: 7, name: "氣體偵測測試", status: 1 },
    { id: 8, name: "氣體收集[1]測試", status: 1 },
    { id: 9, name: "氣體收集[2]測試", status: 1 },
    { id: 10, name: "通訊設備測試", status: 1 },
    { id: 11, name: "GPS衛星天線測試", status: 1 }
  ]);

  const startTest = () => {
    // 隨機更新
    const randomIndex = Math.floor(Math.random() * list.length);

    const newList = list.map((item, index) =>
      index === randomIndex ? { ...item, status: 0 } : item
    );

    setList(newList);
    setResult(false);
  };

  return (
    <div className="modal-body">
      <SectionHeader title={"系統自測"} />
      <div className="modal-content mt-0">
        <div className="system-wrap">
          <div className="system-list">
            {list.map((item) => (
              <div key={`${item.id}`} className={`system-item ${item.status == 0 ? "text-danger" : ""}`}>
                {item.name}
              </div>
            ))}
          </div>
          <div className="system-status">
            <div className="system-label">系統自測結果</div>
            <div className={`badge ${result ? "bg-primary" : "bg-danger"}`}>{result ? "成功" : "失敗" }</div>
          </div>
          <div className="system-footer">
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={() => startTest()}
            >
              開始自測
            </button>
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={() => onClose()}
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default SystemTest;

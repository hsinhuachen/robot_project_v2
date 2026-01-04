import React, { useState, useEffect, useRef } from "react";

function Select({ list, value, onChange, onCreate }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const wrapRef = useRef(null);
  const inputRef = useRef(null);

  const currentItem = list.find(i => i.id === value);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCreate = () => {
    if (!input.trim()) return;

    const newId = onCreate?.(input.trim());
    if (newId) onChange(newId);

    setInput("");
    setOpen(false);
  };

  return (
    <div className="select-wrap" ref={wrapRef}>
        <button 
          type="button" 
          className="select-title"
          onClick={() => setOpen(!open)}
        >
            <span>{currentItem?.title || "請選擇"}</span>
            <div className="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
                    <path d="M1.76777 1.76782L8.76777 8.76782L15.7678 1.76782" stroke="white" strokeWidth="5"/>
                </svg>
            </div>
        </button>
        <div  className={`select-dropdown ${open ? "show" : ""}`}>
            {list.map((item, index) => (
                <button 
                  type="button" 
                  className="select-option" 
                  key={`select-${index}`}
                  onClick={() => {
                    onChange(item.id);
                    setOpen(false);
                  }}
                >
                    <span>{item.title}</span>
                </button>
            ))}
            <div className="select-option">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  className="table-input"
                  placeholder="新增輸入..."
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleCreate()}
                />
            </div>
        </div>
    </div>
  );
}

export default Select;

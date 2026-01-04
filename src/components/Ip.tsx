import React, { useState } from "react";
import SectionHeader from "@components/SectionHeader.tsx";
import Select from "@components/Select.tsx";

function Ip({onClose}) {
  const [list, setList] = useState([
    { id: 1, enabled: false, name: "設備一", brand: 0, model: 0, protocol: 1, ip: "192.168.0.1", port: "80" },
    { id: 2, enabled: false, name: "設備二", brand: 1, model: 3, protocol: 1, ip: "192.168.0.1", port: "80" },
    { id: 3, enabled: false, name: "設備三", brand: 3, model: 1, protocol: 2, ip: "192.168.0.1", port: "80" },
    { id: 4, enabled: false, name: "設備四", brand: 1, model: 2, protocol: 1, ip: "192.168.0.1", port: "80" },
    { id: 5, enabled: false, name: "設備五", brand: 2, model: 1, protocol: 3, ip: "192.168.0.1", port: "80" },
    { id: 6, enabled: false, name: "設備六", brand: 1, model: 3, protocol: 2, ip: "192.168.0.1", port: "80" },
    { id: 7, enabled: false, name: "設備七", brand: 1, model: 3, protocol: 2, ip: "192.168.0.1", port: "80" },
  ]);

  const [brand, setBrand] = useState([
    {id: 1, title: "NVR-Server"},
    {id: 2, title: "藍芽路由器"},
    {id: 3, title: "藍芽控制器"}
  ])

  const [model, setModel] = useState([
    {id: 1, title: "SE5904D-4P"},
    {id: 2, title: "IO5202-8-4-0-0"},
    {id: 3, title: "MAX BR1 MINI"}
  ])

  const [protocol, setProtocol] = useState([
    {id: 1, title: "Virtual Serial Port"},
    {id: 2, title: "Mod bus TCP"},
    {id: 3, title: "HTTP API"}
  ])

  const updateItem = (id, key, value) => {
    setList(prev =>
      prev.map(item =>
        item.id === id ? { ...item, [key]: value } : item
      )
    );
  };

  const createProtocol = (title) => {
    const newId = Date.now();
    setProtocol(prev => [...prev, { id: newId, title }]);
    return newId;
  };

  const createModel = (title) => {
    const newId = Date.now();
    setModel(prev => [...prev, { id: newId, title }]);
    return newId;
  };

  const createBrand = (title) => {
    const newId = Date.now();
    setBrand(prev => [...prev, { id: newId, title }]);
    return newId;
  };

  // 新增
  const handleAdd = () => {
    setList(prev => [
      ...prev,
      {
        id: Date.now(),
        enabled: false,
        name: "",
        brand: 0,
        model: 0,
        protocol: 0,
        ip: "",
        port: ""
      }
    ]);
  };

  // 刪除
  const handleDelete = () => {
    setList(prev => prev.filter(item => !item.enabled));
  };

  // 儲存
  const handleSave = () => {
    onClose()
  };

  return (
    <div className="modal-body">
      <SectionHeader title={"設定IP設置"} />
      <div className="modal-content mt-0">
        <div className="table-responsive">
          <table className="table">
            <thead>
                <tr>
                    <th scope="col">啟用</th>
                    <th scope="col">編號</th>
                    <th scope="col">設備名稱</th>
                    <th scope="col">廠牌</th>
                    <th scope="col">型號</th>
                    <th scope="col">通訊協定</th>
                    <th scope="col">設備IP</th>
                    <th scope="col">通訊埠號</th>
                </tr>
            </thead>
            <tbody>
              {list.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <label htmlFor={`check-${item.id}`} className="table-check">
                        <input 
                          id={`check-${item.id}`} 
                          type="checkbox" 
                          checked={item.enabled}
                          onChange={(e) => updateItem(item.id, "enabled", e.target.checked)}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <rect x="9" y="0.707107" width="11.7279" height="11.7279" transform="rotate(45 9 0.707107)" stroke="white"/>
                          <rect x="9" y="0.707107" width="11.7279" height="11.7279" transform="rotate(45 9 0.707107)" stroke="white"/>
                        </svg>
                      </label>
                    </td>
                    <td>{item.id}</td>
                    <td>
                      <input 
                        type="text" 
                        value={item.name} 
                        className="table-input" 
                        arial-label="設備名稱"
                        placeholder="輸入..."
                        onChange={(e) => updateItem(item.id, "name", e.target.value)}
                      />
                    </td>
                    <td>
                      <Select 
                        list={brand} 
                        value={item.brand}
                        onChange={(val) => updateItem(item.id, "brand", val)}
                        onCreate={createBrand}
                        />
                    </td>
                    <td>
                      <Select 
                        list={model} 
                        value={item.model} 
                        onChange={(val) => updateItem(item.id, "model", val)}
                        onCreate={createModel}
                      />
                    </td>
                    <td>
                      <Select 
                        list={protocol} 
                        value={item.protocol}
                        onChange={(val) => updateItem(item.id, "protocol", val)}
                        onCreate={createProtocol}
                        />
                    </td>
                    <td>
                      <input 
                        type="text" 
                        value={item.ip} 
                        arial-label="ip"
                        className="table-input" 
                        placeholder="輸入..."
                        onChange={(e) => updateItem(item.id, "ip", e.target.value)}
                      />
                    </td>
                    <td>
                      <input 
                        type="text" 
                        value={item.port} 
                        arial-label="通訊埠號"
                        className="table-input" 
                        placeholder="輸入..."
                        onChange={(e) => updateItem(item.id, "port", e.target.value)}
                      />
                    </td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="modal-footer">
            <div className="btns col-9">
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={handleAdd}
                >
                  新增
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={handleDelete}
                >
                  刪除
                </button>
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
                  onClick={() => onClose()}
                >
                    關閉
                </button>
            </div>
        </div>
    </div>
  );
}


export default Ip;

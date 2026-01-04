import React, { useState } from "react";
import SectionHeader from "@components/SectionHeader.tsx";
import Select from "@components/Select.tsx";

function Io({onClose}) {
  const [list, setList] = useState([
    { id: 1, enabled: false, name: "模組一", model: 0, equipment: 1, protocol: 1, port: 1, rate: 1, equipmentID: 1, category: 1, gangway: 1, open: false}
  ]);

  const [model, setModel] = useState([
    {id: 1, title: "N/A"},
  ])

  const [equipment, setEquipment] = useState([
    {id: 1, title: "GPAIO-A"},
    {id: 2, title: "GPAIO-B"},
    {id: 3, title: "GPAIO-C"}
  ])

  const [protocol, setProtocol] = useState([
    {id: 1, title: "HTTP API"},
    {id: 2, title: "YC API"},
    {id: 3, title: "Modbus TCP"}
  ])

  const [port, setPort] = useState([
    {id: 1, title: "COM-1"},
    {id: 2, title: "COM-2"},
    {id: 3, title: "COM-3"}
  ])

  const [rate, setRate] = useState([
    {id: 1, title: "1200 bps"},
    {id: 2, title: "2400 bps"},
    {id: 3, title: "4800 bps"}
  ])
  
  const [equipmentID, setEquipmentID] = useState([
    {id: 1, title: "00"},
    {id: 2, title: "01"},
    {id: 3, title: "02"}
  ])

  const [category, setCategory] = useState([
    {id: 1, title: "N/A"},
    {id: 2, title: "DIO"},
    {id: 3, title: "DO"}
  ])

  const [gangway, setGangway] = useState([
    {id: 1, title: "00"},
    {id: 2, title: "01"},
    {id: 3, title: "02"}
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

  const createEquipment = (title) => {
    const newId = Date.now();
    setEquipment(prev => [...prev, { id: newId, title }]);
    return newId;
  };

  const createEquipmentID = (title) => {
    const newId = Date.now();
    setEquipmentID(prev => [...prev, { id: newId, title }]);
    return newId;
  };

  const createPort = (title) => {
    const newId = Date.now();
    setPort(prev => [...prev, { id: newId, title }]);
    return newId;
  };

  const createRate = (title) => {
    const newId = Date.now();
    setRate(prev => [...prev, { id: newId, title }]);
    return newId;
  };

  const createCategory = (title) => {
    const newId = Date.now();
    setCategory(prev => [...prev, { id: newId, title }]);
    return newId;
  };

  const createGangway = (title) => {
    const newId = Date.now();
    setGangway(prev => [...prev, { id: newId, title }]);
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
        model: 0,
        equipment: 0,
        protocol: 0,
        port: 0,
        rate: 0,
        equipmentID: 0,
        category: 0,
        gangway: 0,
        open: false
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
      <SectionHeader title={"I/O設置"} />
      <div className="modal-content mt-0">
        <div className="table-responsive">
          <table className="table">
            <thead>
                <tr>
                  <th scope="col">啟用</th>
                  <th scope="col">編號</th>
                  <th scope="col">模組名稱</th>
                  <th scope="col">設備型號</th>
                  <th scope="col">通訊設備</th>
                  <th scope="col">通訊協定</th>
                  <th scope="col">通訊端口</th>
                  <th scope="col">Baud Rate</th>
                  <th scope="col">設備ID</th>
                  <th scope="col">I/O類型</th>
                  <th scope="col">I/O通道</th>
                  <th scope="col">手動控制</th>
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
                        arial-label="模組名稱"
                        placeholder="輸入..."
                        onChange={(e) => updateItem(item.id, "name", e.target.value)}
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
                        list={equipment} 
                        value={item.equipment} 
                        onChange={(val) => updateItem(item.id, "equipment", val)}
                        onCreate={createEquipment}
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
                      <Select 
                        list={port} 
                        value={item.port}
                        onChange={(val) => updateItem(item.id, "port", val)}
                        onCreate={createPort}
                      />
                    </td>
                    <td>
                      <Select 
                        list={rate} 
                        value={item.rate}
                        onChange={(val) => updateItem(item.id, "rate", val)}
                        onCreate={createRate}
                      />
                    </td>
                    <td>
                      <Select 
                        list={equipmentID} 
                        value={item.equipmentID}
                        onChange={(val) => updateItem(item.id, "equipmentID", val)}
                        onCreate={createEquipmentID}
                      />
                    </td>
                    <td>
                      <Select 
                        list={category} 
                        value={item.category}
                        onChange={(val) => updateItem(item.id, "category", val)}
                        onCreate={createCategory}
                      />
                    </td>
                    <td>
                      <Select 
                        list={gangway} 
                        value={item.gangway}
                        onChange={(val) => updateItem(item.id, "gangway", val)}
                        onCreate={createGangway}
                      />
                    </td>
                    <td>
                      <div className="switch-item">
                        <input 
                         type="checkbox" 
                         id={`switch-${item.id}`} 
                         checked={item.open ? true : false}
                         onChange={(e) => updateItem(item.id, "open", e.target.checked)}
                        />
                        <label htmlFor={`switch-${item.id}`}>Toggle</label>
                      </div>
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


export default Io;

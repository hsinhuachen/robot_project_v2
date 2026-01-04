import React, { useState } from "react";
import SectionHeader from "@components/SectionHeader.tsx";
import IpComponent from "@components/Ip.tsx";
import IoComponent from "@components/Io.tsx";
import SystemTest from "@components/SystemTest.tsx";
import Bg from "@assets/images/bg.jpg"
import Export from "@assets/images/export.png"
import Import from "@assets/images/import.png"

function Setting({ showModal, onClose }) {
  const [showDetail, setShowDetail] = useState(0)
  const [systemSetting, setSystemSetting] = useState(
        { 
            lightNVRID: "", 
            thermalNVRID: "", 
            enable: {
                gas: true,
                carPC: true,
                ptz: true,
                ptzReset: false,
                thermal: true,
                visible: true,
                singlePoint: true,
                charge: false
            },
            values: [
                {
                    name: "單點測溫模組",
                    meta_key: "single-point",
                    value: {
                        warning: 0,
                        alarm: 0
                    }
                },
                {
                    name: "TVOC(ppm)",
                    meta_key: "tvoc",
                    value: {
                        warning: 0,
                        alarm: 0
                    }
                },
                {
                    name: "SO₂(ppm)",
                    meta_key: "so2",
                    value: {
                        warning: 0,
                        alarm: 0
                    }
                },
                {
                    name: "CL₂(ppm)",
                    meta_key: "cl2",
                    value: {
                        warning: 0,
                        alarm: 0
                    }
                },
                {
                    name: "HCN(ppm)",
                    meta_key: "hcn",
                    value: {
                        warning: 0,
                        alarm: 0
                    }
                },
                {
                    name: "HF(ppm)",
                    meta_key: "hf",
                    value: {
                        warning: 0,
                        alarm: 0
                    }
                },
                {
                    name: "EO(ppm)",
                    meta_key: "eo",
                    value: {
                        warning: 0,
                        alarm: 0
                    }
                },
                {
                    name: "H₂S(ppm)",
                    meta_key: "h2s",
                    value: {
                        warning: 0,
                        alarm: 0
                    }
                },
                {
                    name: "CO(ppm)",
                    meta_key: "co",
                    value: {
                        warning: 0,
                        alarm: 0
                    }
                },
                {
                    name: "O₂(%)",
                    meta_key: "o2",
                    value: {
                        warning_min: 0,
                        warning_max: 0,
                        alarm_min: 0,
                        alarm_max: 0,
                    }
                },
                {
                    name: "LEL CH₄(%)",
                    meta_key: "lel_ch4",
                    value: {
                        warning: 0,
                        alarm: 0
                    }
                }
            ]
        }
  );

  // 更新數值
  const handleValueChange = (index, field, val) => {
    setSystemSetting(s => {
      const values = [...s.values];
      values[index] = {
        ...values[index],
        value: {
          ...values[index].value,
          [field]: val
        }
      };
      return { ...s, values };
    });
  };

  const modalClose = () => {
    setShowDetail(0)
  };

  // 儲存
  const handleSave = () => {
  };

  if (!showModal) return null;

  return showModal && (
    <div 
      className="panel-modal" 
      style={{ backgroundImage: `url(${Bg.src})` }}
    >
      <div className="setting-panel">
        {showDetail === 1 ? (
          <IpComponent onClose={modalClose} />
        ) : showDetail === 2 ? (
          <IoComponent onClose={modalClose} />
        ) : showDetail === 3 ? (
          <SystemTest onClose={modalClose} />
        ) : (
          <div className="modal-body">
            <SectionHeader title={"系統設定"} />
            <div className="modal-content">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="system-group">
                            <label 
                              htmlFor="lightNVRID" 
                              className="system-label size-lg"
                            >
                                可見光NVR-ID
                            </label>
                            <input
                              id="lightNVRID"
                              className="system-control"
                              type="text"
                              value={systemSetting.lightNVRID}
                              onChange={(e) =>
                                setSystemSetting(s => ({ ...s, lightNVRID: e.target.value }))
                              }
                            />
                        </div>
                        <div className="system-group">
                            <label htmlFor="thermalNVRID" className="system-label size-lg">
                                ThermalNVR-ID
                            </label>
                            <input
                              id="thermalNVRID"
                              className="system-control"
                              type="text"
                              value={systemSetting.thermalNVRID}
                              onChange={(e) =>
                                setSystemSetting(s => ({ ...s, thermalNVRID: e.target.value }))
                              }
                            />
                        </div>
                        <div className="system-radios">
                            <div className="system-radio-group">
                                <label 
                                    htmlFor="enable-gas" 
                                    className="radio-group"
                                >
                                    <input
                                        id="enable-gas"
                                        type="checkbox"
                                        checked={systemSetting.enable.gas}
                                        onChange={(e) =>
                                            setSystemSetting(s => ({
                                                ...s,
                                                enable: { ...s.enable, gas: e.target.checked }
                                            }))
                                        }
                                    />
                                    <span className="checkbox-btn">{ systemSetting.enable.gas ? "啟動" : "關閉"}氣體偵測模組</span>
                                </label>
                                <label 
                                    htmlFor="enable-carPC" 
                                    className="radio-group"
                                >
                                    <input
                                        id="enable-carPC"
                                        type="checkbox"
                                        checked={systemSetting.enable.carPC}
                                        onChange={(e) =>
                                            setSystemSetting(s => ({
                                            ...s,
                                            enable: { ...s.enable, carPC: e.target.checked }
                                            }))
                                        }
                                    />
                                    <span className="checkbox-btn">強制{ systemSetting.enable.carPC ? "啟動" : "關閉"}車載電腦</span>
                                </label>
                            </div>
                        </div>
                        <div className="system-radios">
                            <div className="system-radio-group">
                                <label 
                                    htmlFor="enable-ptz" 
                                    className="radio-group"
                                >
                                    <input
                                        id="enable-ptz"
                                        type="checkbox"
                                        checked={systemSetting.enable.ptz}
                                        onChange={(e) =>
                                            setSystemSetting(s => ({
                                                ...s,
                                                enable: { ...s.enable, ptz: e.target.checked }
                                            }))
                                        }
                                    />
                                    <span className="checkbox-btn">{ systemSetting.enable.ptz ? "啟動" : "關閉"}PT雲台</span>
                                </label>
                                <button type="button" className="checkbox-btn active">
                                    PT雲台重新校正
                                </button>
                            </div>
                        </div>
                        <div className="system-radios">
                            <div className="system-radio-group">
                                <label 
                                    htmlFor="enable-thermal" 
                                    className="radio-group"
                                >
                                    <input
                                        id="enable-thermal"
                                        type="checkbox"
                                        checked={systemSetting.enable.thermal}
                                        onChange={(e) =>
                                            setSystemSetting(s => ({
                                                ...s,
                                                enable: { ...s.enable, thermal: e.target.checked }
                                            }))
                                        }
                                    />
                                    <span className="checkbox-btn">{systemSetting.enable.thermal ? "開" : "關"}熱影像模組電源</span>
                                </label>
                                <label 
                                    htmlFor="enable-visible" 
                                    className="radio-group"
                                >
                                    <input
                                        id="enable-visible"
                                        type="checkbox"
                                        checked={systemSetting.enable.visible}
                                        onChange={(e) =>
                                            setSystemSetting(s => ({
                                                ...s,
                                                enable: { ...s.enable, visible: e.target.checked }
                                            }))
                                        }
                                    />
                                    <span className="checkbox-btn">{systemSetting.enable.visible ? "開" : "關"}可見光模組電源</span>
                                </label>
                                <label 
                                    htmlFor="enable-singlePoint" 
                                    className="radio-group"
                                >
                                    <input
                                        id="enable-singlePoint"
                                        type="checkbox"
                                        checked={systemSetting.enable.singlePoint}
                                        onChange={(e) =>
                                            setSystemSetting(s => ({
                                                ...s,
                                                enable: { ...s.enable, singlePoint: e.target.checked }
                                            }))
                                        }
                                    />
                                    <span className="checkbox-btn">{systemSetting.enable.singlePoint ? "開" : "關"}單點測溫模組</span>
                                </label>
                            </div>
                        </div>
                        <div className="system-radios">
                            <div className="system-radio-group">
                                <label 
                                    htmlFor="enable-charge" 
                                    className="radio-group"
                                >
                                    <input
                                        id="enable-charge"
                                        type="checkbox"
                                        checked={systemSetting.enable.charge}
                                        onChange={(e) =>
                                            setSystemSetting(s => ({
                                                ...s,
                                                enable: { ...s.enable, charge: e.target.checked }
                                            }))
                                        }
                                    />
                                    <span className="checkbox-btn">充電完成</span>
                                </label>
                                <button 
                                  type="button" 
                                  className="checkbox-btn active"
                                  onClick={() => setShowDetail(3)}
                                >
                                    系統自測
                                </button>
                                <div className="system-action">
                                    <p className="h3">參數設置</p>
                                    <div className="d-flex">
                                        <button type="button" className="system-action-btn">
                                            <img src={Import.src} alt="" />
                                        </button>
                                        <button type="button" className="system-action-btn">
                                            <img src={Export.src} alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="setting-list">
                          {systemSetting["values"].map((setting, index) => (
                            <div className="setting-item" key={`setting-${index}`}>
                                <div className="system-label size-lg label-title">
                                    {setting.name}
                                </div>
                                <div className="system-value">
                                    {Object.keys(setting.value).length > 2 ? (
                                        <>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="system-group">
                                                        <label htmlFor={`${setting.meta_key}-warning-min`} className="system-label size-md">
                                                            &lt; 預警閥值
                                                        </label>
                                                        <input
                                                          id={`${setting.meta_key}-warning-min`}
                                                          className="system-control"
                                                          type="text"
                                                          value={setting.value.warning_min}
                                                          onChange={(e) =>
                                                            handleValueChange(index, "warning_min", Number(e.target.value))
                                                          }
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor={`${setting.meta_key}-alarm-min`} className="system-label size-md">
                                                        &lt; 警報閥值
                                                    </label>
                                                    <input
                                                        id={`${setting.meta_key}-alarm-max`}
                                                        className="system-control"
                                                        type="text"
                                                        value={setting.value.alarm_max}
                                                        onChange={(e) =>
                                                            handleValueChange(index, "alarm_max", Number(e.target.value))
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="system-group">
                                                        <label htmlFor={`${setting.meta_key}-warning-max`} className="system-label size-md">
                                                           &gt; 預警閥值
                                                        </label>
                                                        <input
                                                          id={`${setting.meta_key}-warning-max`}
                                                          className="system-control"
                                                          type="text"
                                                          value={setting.value.warning_max}
                                                          onChange={(e) =>
                                                            handleValueChange(index, "warning_max", Number(e.target.value))
                                                          }
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor={`${setting.meta_key}-alarm-max`} className="system-label size-md">
                                                       &gt; 警報閥值
                                                    </label>
                                                    <input
                                                        id={`${setting.meta_key}-alarm-max`}
                                                        className="system-control"
                                                        type="text"
                                                        value={setting.value.alarm_max}
                                                        onChange={(e) =>
                                                          handleValueChange(index, "alarm_max", Number(e.target.value))
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="system-group">
                                                    <label htmlFor={`${setting.meta_key}-warning`} className="system-label size-md">
                                                        預警閥值
                                                    </label>
                                                    <input
                                                      id={`${setting.meta_key}-warning`}
                                                      className="system-control"
                                                      type="text"
                                                      value={setting.value.warning}
                                                      onChange={(e) =>
                                                        handleValueChange(index, "warning", Number(e.target.value))
                                                      }
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor={`${setting.meta_key}-alarm`} className="system-label size-md">
                                                    警報閥值
                                                </label>
                                                <input
                                                  id={`${setting.meta_key}-alarm`}
                                                  className="system-control"
                                                  type="text"
                                                  value={setting.value.alarm}
                                                  onChange={(e) =>
                                                    handleValueChange(index, "alarm", Number(e.target.value))
                                                  }
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                          ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <div className="btns col-9">
                    <button 
                      type="button" 
                      className="btn btn-primary"
                      onClick={() => setShowDetail(1)}
                    >
                        設備IP設置
                    </button>
                    <button 
                      type="button" 
                      className="btn btn-primary"
                      onClick={() => setShowDetail(2)}
                    >
                        I/O設置
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
                      onClick={() => {
                        setShowDetail(0)
                        onClose()
                      }}
                    >
                        關閉
                    </button>
                </div>
            </div>
          </div>
        )}
      </div>
      <button
        type="button"
        className="close-btn"
        onClick={() => {
            setShowDetail(0)
            onClose()
        }}
      >
          &times;
      </button>
    </div>
  );
}


export default Setting;

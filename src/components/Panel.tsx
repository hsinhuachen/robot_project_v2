import React, { useState } from "react";
import Header from "@components/Header.tsx";
import AccountComponent from "@components/Account.tsx";
import SettingComponent from "@components/Setting.tsx";

function Panel() {
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [showSettingModal, setShowSettingModal] = useState(false);

  return (
    <div id="container">
      <Header 
        onOpenAccount={() => setShowAccountModal(true)} 
        onOpenSetting={() => setShowSettingModal(true)} 
      />
      <AccountComponent 
        showModal={showAccountModal} 
        onClose={() => setShowAccountModal(false)} 
      />
      <SettingComponent 
        showModal={showSettingModal} 
        onClose={() => setShowSettingModal(false)} 
       />
    </div>
  );
}


export default Panel;

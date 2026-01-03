import React, { useState } from "react";
import Header from "@components/Header.tsx";
import Account from "@components/Account.tsx";

function Panel() {
  const [showAccountModal, setShowAccountModal] = useState(false);

  return (
    <div id="container">
      <Header onOpenAccount={() => setShowAccountModal(true)} />
      <Account 
        showModal={showAccountModal} 
        onClose={() => setShowAccountModal(false)} 
      />
    </div>
  );
}


export default Panel;

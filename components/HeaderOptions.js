import React from "react";
import HeaderOption from "./HeaderOption";

const HeaderOptions = () => {
  return <div> 
      {/* Left Section */}
      <div>
        <div className="flex space-x-6">
            <HeaderOption />
        </div>
      </div>
      {/* Right Section */}
      <div className="flex space-x-2">
          <p className="link">Settings</p>
          <p className="link">Tools</p>
      </div>
  </div>;
};

export default HeaderOptions;

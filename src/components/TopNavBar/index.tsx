import { NavBar, Space } from "antd-mobile";
import { MoreOutline } from "antd-mobile-icons";
import React from "react";

const TopNavBar = (props: any) => {
  const showDrawer = () => {
    props.setDrawerVisible(true);
  };

  return (
    <NavBar
      left={
        <a href="#" style={{ color: "#fff", fontSize: 18 }}>
          4Cut
        </a>
      }
      right={
        <div style={{ fontSize: 40 }}>
          <Space style={{ "--gap": "16px" }}>
            <MoreOutline color="#fff" onClick={showDrawer} style={{ cursor: "pointer" }} />
          </Space>
        </div>
      }
      backArrow={false}
      style={{ width: "100%" }}
    />
  );
};
export default TopNavBar;

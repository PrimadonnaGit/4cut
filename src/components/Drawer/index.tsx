import { Button, Divider, Space } from "antd-mobile";
import { Rate } from "antd";
import { CustomDrawer } from "./styles";
import React from "react";

const Drawer = (props: any) => {
  const closeDrawer = () => {
    props.setDrawerVisible(false);
  };

  return (
    <CustomDrawer title="" width={300} onClose={closeDrawer} visible={props.drawerVisible}>
      <Space direction="vertical" style={{ marginTop: 10 }}>
        <img
          src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
          width={184}
          height={40}
          alt="kakao_login"
          style={{ cursor: "pointer" }}
        />
        <Button color="success" style={{ width: 184 }}>
          Email Login
        </Button>
      </Space>
      <Divider />
      <Space direction="vertical">
        <div>Please Leave 5 Star Feedback</div>
        <Rate defaultValue={5} allowClear={true} />
      </Space>
      <Divider />
      <Space direction="vertical">
        <h5>Contact</h5>
        <a href="#">contact.4cut@gmail.com</a>
      </Space>
    </CustomDrawer>
  );
};

export default Drawer;

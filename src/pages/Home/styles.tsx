import styled from "@emotion/styled";
import { Drawer } from "antd";

export const Container = styled.div`
  max-width: 450px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #f7f7f7;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
`;

export const UploadContainer = styled.div`
  display: flex;
  margin: 10;
`;

export const BottomContainer = styled.div`
  position: absolute;
  top: 75vh;
  width: 100%;
  display: flex;
  justify-contents: center;
  flex-direction: column;
  align-items: center;
`;

export const AdContainer = styled.div`
  width: 100%;
  height: 50;
`;

export const CustomDrawer = styled(Drawer)``;

import React, { FC, useState } from "react";
import { Button, Divider, NavBar, Space } from "antd-mobile";
import { AdContainer, BottomContainer, Container, CustomDrawer, UploadContainer } from "./styles";
import { MoreOutline } from "antd-mobile-icons";
import ImageUploadComponent from "@components/ImageUploadComponent";
import { useHistory } from "react-router-dom";
import PageLoader from "@components/PageLoader";
import { ImageUploadItem } from "antd-mobile/es/components/image-uploader";
import { Rate } from "antd";

const Home: FC = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fileList, setFileList] = useState<ImageUploadItem[]>([]);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const generateCut = () => {
    // if (fileList.length < 4) {
    //   Toast.show({
    //     content: "Please Select Four Images",
    //     duration: 1000,
    //     position: "center",
    //   });
    //   return null;
    // }

    // 페이지 이동
    setIsLoading(true);
    setTimeout(() => {
      history.push("/result/uniq");
    }, 2000);
  };

  if (isLoading) {
    return <PageLoader />;
  }
  return (
    <>
      <Container>
        <NavBar
          left={
            <a href="#" style={{ color: "#000" }}>
              4Cut
            </a>
          }
          right={
            <div style={{ fontSize: 40 }}>
              <Space style={{ "--gap": "16px" }}>
                <MoreOutline onClick={showDrawer} style={{ cursor: "pointer" }} />
              </Space>
            </div>
          }
          backArrow={false}
          style={{ width: "100%", boxShadow: "0 3px 2px #f0f1f2" }}
        />

        <UploadContainer>
          <ImageUploadComponent fileList={fileList} setFileList={setFileList} />
        </UploadContainer>
        <BottomContainer>
          <AdContainer>AD</AdContainer>
          <Button
            shape="rounded"
            color="primary"
            block
            size="large"
            onClick={generateCut}
            style={{ width: "80%", marginTop: 10 }}
          >
            Make 4Cut
          </Button>
        </BottomContainer>
      </Container>

      <CustomDrawer title="" width={300} onClose={closeDrawer} visible={drawerVisible}>
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
    </>
  );
};

export default Home;

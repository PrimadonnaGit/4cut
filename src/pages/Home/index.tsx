import React, { FC, useState } from "react";
import { Button } from "antd-mobile";
import { BottomContainer, Container } from "./styles";
import ImageUploadComponent from "@components/ImageUploadComponent";
import { useHistory } from "react-router-dom";
import PageLoader from "@components/PageLoader";
import { ImageUploadItem } from "antd-mobile/es/components/image-uploader";
import { demoSrc } from "@utils/utils";
import TopNavBar from "@components/TopNavBar";
import Drawer from "@components/Drawer";

const Home: FC = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fileList, setFileList] = useState<ImageUploadItem[]>([{ url: demoSrc }, { url: demoSrc }, { url: demoSrc }]);
  const [drawerVisible, setDrawerVisible] = useState(false);

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
        <TopNavBar setDrawerVisible={setDrawerVisible} />

        <ImageUploadComponent fileList={fileList} setFileList={setFileList} />
        <BottomContainer>
          <Button style={{ width: "49.2", height: "49.2", borderRadius: 50 }}>{"<"}</Button>

          <Button shape="rounded" size="large" onClick={generateCut} style={{ width: "70%" }}>
            Make 4Cut
          </Button>
        </BottomContainer>
        {/*<AdContainer>AD</AdContainer>*/}
      </Container>

      <Drawer drawerVisible={drawerVisible} setDrawerVisible={setDrawerVisible} />
    </>
  );
};

export default Home;

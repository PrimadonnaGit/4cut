import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { BottomContainer, Container, UploadContainer } from "./styles";
import { Button } from "antd-mobile";
import TopNavBar from "@components/TopNavBar";
import Drawer from "@components/Drawer";

interface ResultParam {
  uniqueId: string;
}

const baseWidth = 700;
const baseHeight = 2200;
const ratio = 1;
const canvasWidth = baseWidth * ratio;
const canvasHeight = baseHeight * ratio;

const Result = () => {
  const params = useParams<ResultParam>();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const location: any = useLocation();

  useEffect(() => {
    if (canvasRef) {
      const canvas: HTMLCanvasElement | null = canvasRef.current;
      const context = canvas?.getContext("2d");

      const img = new Image();

      // template
      img.onload = () => {
        context?.drawImage(img, 0, 0, canvasWidth, canvasHeight);
      };
      img.src = "/src/assets/images/frame/frame1.png";

      // console.log(location.state.fileList);
      // images
      // const img1 = new Image();
      //
      // img1.onload = () => {
      //   context?.drawImage(img1, 0, 0, img1.width, img1.width, 28, 28, 173, 173);
      // };
      // // img1.src = "/src/assets/images/cats/0.jpg";
      // img1.src = "/src/assets/images/cats/1.jpg";
      // const img2 = new Image();
      //
      // img2.onload = () => {
      //   context?.drawImage(img2, 0, 0, img2.width, img2.width, 28 + 192, 28, 173, 173);
      // };
      // img2.src = "/src/assets/images/cats/1.jpg";
      // const img3 = new Image();
      //
      // img3.onload = () => {
      //   context?.drawImage(img3, 0, 0, img3.width, img3.width, 28, 28 + 192, 173, 173);
      // };
      // img3.src = "/src/assets/images/cats/2.jpg";
      // const img4 = new Image();
      //
      // img4.onload = () => {
      //   context?.drawImage(img4, 0, 0, img4.width, img4.width, 28 + 192, 28 + 192, 173, 173);
      // };
      // img4.src = "/src/assets/images/cats/3.jpg";
    }
  }, [canvasRef]);

  return (
    <>
      <Container>
        <TopNavBar setDrawerVisible={setDrawerVisible} />
        <UploadContainer>
          <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} className="canvas" />
        </UploadContainer>
        <BottomContainer>
          <Button shape="rounded" block size="large" style={{ width: "80%", marginTop: 10 }}>
            Share 4Cut
          </Button>
        </BottomContainer>
      </Container>
      <Drawer drawerVisible={drawerVisible} setDrawerVisible={setDrawerVisible} />
    </>
  );
};

export default Result;

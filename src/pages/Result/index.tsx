import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { BottomContainer, Container, UploadContainer } from "@pages/Home/styles";
import { Button, NavBar, Space } from "antd-mobile";
import { MoreOutline } from "antd-mobile-icons";

interface ResultParam {
  uniqueId: string;
}

const baseWidth = 105;
const baseHeight = 110;
const ratio = 4;

const canvasWidth = baseWidth * ratio;
const canvasHeight = baseHeight * ratio;

const Result = () => {
  const params = useParams<ResultParam>();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  console.log(params.uniqueId);

  useEffect(() => {
    if (canvasRef) {
      const canvas: HTMLCanvasElement | null = canvasRef.current;
      const context = canvas?.getContext("2d");

      const img = new Image();

      // template
      img.onload = () => {
        context?.drawImage(img, 0, 0, canvasWidth, canvasHeight);
      };
      img.src = "/src/assets/images/frame/frame0.jpeg";

      // images
      const img1 = new Image();

      img1.onload = () => {
        context?.drawImage(img1, 0, 0, img1.width, img1.width, 28, 28, 173, 173);
      };
      img1.src = "/src/assets/images/cats/0.jpg";
      const img2 = new Image();

      img2.onload = () => {
        context?.drawImage(img2, 0, 0, img2.width, img2.width, 28 + 192, 28, 173, 173);
      };
      img2.src = "/src/assets/images/cats/1.jpg";
      const img3 = new Image();

      img3.onload = () => {
        context?.drawImage(img3, 0, 0, img3.width, img3.width, 28, 28 + 192, 173, 173);
      };
      img3.src = "/src/assets/images/cats/2.jpg";
      const img4 = new Image();

      img4.onload = () => {
        context?.drawImage(img4, 0, 0, img4.width, img4.width, 28 + 192, 28 + 192, 173, 173);
      };
      img4.src = "/src/assets/images/cats/3.jpg";
    }
  }, [canvasRef]);

  return (
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
              <MoreOutline style={{ cursor: "pointer" }} />
            </Space>
          </div>
        }
        backArrow={false}
        style={{ width: "100%", boxShadow: "0 3px 2px #f0f1f2" }}
      />
      <UploadContainer>
        <canvas
          ref={canvasRef}
          width={canvasWidth}
          height={canvasHeight}
          className="canvas"
          style={{ marginTop: 80 }}
        />
      </UploadContainer>
      <BottomContainer>
        {/*<AdContainer>AD</AdContainer>*/}
        <Button shape="rounded" color="primary" block size="large" style={{ width: "80%", marginTop: 10 }}>
          Share 4Cut
        </Button>
      </BottomContainer>
    </Container>
  );
};

export default Result;

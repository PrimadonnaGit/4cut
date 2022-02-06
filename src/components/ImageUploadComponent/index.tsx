import { mockUpload } from "@utils/utils";
import React from "react";
import { Toast } from "antd-mobile";
import { AddOutline } from "antd-mobile-icons";
import { CustomImageUploader } from "@components/ImageUploadComponent/styles";
import { ImageUploadItem } from "antd-mobile/es/components/image-uploader";

interface ParamProps {
  // children: ReactNode;
  fileList: ImageUploadItem[];
  setFileList: any;
}

const ImageUploadComponent = ({ fileList, setFileList }: ParamProps) => {
  const maxCount = 4;
  const cellSize = "41vw";

  return (
    <CustomImageUploader
      value={fileList}
      onChange={setFileList}
      upload={mockUpload}
      multiple
      deletable={false}
      maxCount={maxCount}
      showUpload={fileList.length < maxCount}
      onCountExceed={(exceed) => {
        Toast.show({ content: `최대 업로드 개수를 ${exceed}개 초과하였습니다.`, duration: 1000 });
      }}
      style={{
        "--cell-size": cellSize,
      }}
    >
      <div
        style={{
          width: cellSize,
          height: cellSize,
          maxWidth: 400,
          maxHeight: 400,
          backgroundColor: "#f1f1f1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#999999",
          flexDirection: "column",
        }}
      >
        <AddOutline style={{ fontSize: 60 }} />
        <p>사진 선택하기</p>
      </div>
    </CustomImageUploader>
  );
};

export default ImageUploadComponent;

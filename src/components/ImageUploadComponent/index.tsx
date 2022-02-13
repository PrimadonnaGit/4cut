import { mockUpload } from "@utils/utils";
import React from "react";
import { Toast } from "antd-mobile";
import { CustomImageUploader, Uploader } from "@components/ImageUploadComponent/styles";
import { ImageUploadItem } from "antd-mobile/es/components/image-uploader";
import PlusIcon from "@components/PlusIcon";

interface ParamProps {
  fileList: ImageUploadItem[];
  setFileList: any;
}

const ImageUploadComponent = ({ fileList, setFileList }: ParamProps) => {
  const maxCount = 4;

  return (
    <CustomImageUploader
      value={fileList}
      onChange={setFileList}
      upload={mockUpload}
      multiple
      preview
      deletable={false}
      maxCount={maxCount}
      showUpload={fileList.length < maxCount}
      onCountExceed={(exceed) => {
        Toast.show({ content: `최대 업로드 개수를 ${exceed}개 초과하였습니다.`, duration: 1000 });
      }}
    >
      <Uploader>
        <PlusIcon width={75} height={75} fill="#fff" />
      </Uploader>
    </CustomImageUploader>
  );
};

export default ImageUploadComponent;

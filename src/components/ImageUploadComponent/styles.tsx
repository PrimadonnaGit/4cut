import styled from "@emotion/styled";
import { ImageUploader } from "antd-mobile";

export const CustomImageUploader = styled(ImageUploader)`
  display: flex;
  width: 100%;
  overflow-x: auto;
  touch-action: pan-x;

  justify-content: ${(props) => (props.value?.length ? "start" : "center")};

  && > .adm-space-horizontal.adm-space-wrap {
    flex-wrap: nowrap;
    flex-direction: row-reverse;
    touch-action: pan-x;

    & > .adm-space-item {
      margin: 10;

      & > .adm-image-uploader-cell {
        width: 250;
        height: 333;
        border-radius: 0;

        & > .adm-image-uploader-cell-image {
          width: 250;
          height: 333;
        }
      }
    }
  }
`;

export const Uploader = styled.div`
  width: 250;
  height: 333;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

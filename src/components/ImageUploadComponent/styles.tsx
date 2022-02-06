import styled from "@emotion/styled";
import { ImageUploader } from "antd-mobile";

export const CustomImageUploader = styled(ImageUploader)`
  && > .adm-space-horizontal.adm-space-wrap {
    justify-content: center;
    align-items: center;

    & > .adm-space-item {
      margin: 5;
    }
  }
`;

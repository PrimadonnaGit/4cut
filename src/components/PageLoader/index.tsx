import { Loader, LoadIcon } from "@components/PageLoader/styles";
import React from "react";

const PageLoader = () => {
  return (
    <Loader>
      <div className="page-loading-warp">
        <div className="ant-spin ant-spin-lg ant-spin-spinning">
          <span className="ant-spin-dot ant-spin-dot-spin">
            <i className="ant-spin-dot-item" />
            <i className="ant-spin-dot-item" />
            <i className="ant-spin-dot-item" />
            <i className="ant-spin-dot-item" />
          </span>
        </div>
      </div>
      <LoadIcon>니컷내컷</LoadIcon>
    </Loader>
  );
};

export default PageLoader;

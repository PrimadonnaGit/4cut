import { AntSpin, AntSpinDot, AntSpinDotItem, Loader, LoadIcon, PageLoadingWrap } from "@components/PageLoader/styles";
import React from "react";

const PageLoader = () => {
  return (
    <Loader>
      <PageLoadingWrap>
        <AntSpin>
          <AntSpinDot>
            <AntSpinDotItem />
            <AntSpinDotItem />
            <AntSpinDotItem />
            <AntSpinDotItem />
          </AntSpinDot>
        </AntSpin>
      </PageLoadingWrap>
      <LoadIcon>니컷내컷</LoadIcon>
    </Loader>
  );
};

export default PageLoader;

import styled from "@emotion/styled";

export const Loader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 420px;
  background: #000;
  color: #fff;
`;

export const LoadIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24;
  margin-top: 20;
`;

export const AntSpinDot = styled.span`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  font-size: 20px;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-animation: antrotate 1.2s infinite linear;
  animation: antRotate 1.2s infinite linear;

  &:nth-of-type(1) {
    top: 0;
    left: 0;
  }

  &:nth-of-type(2) {
    top: 0;
    right: 0;
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }

  &:nth-of-type(3) {
    right: 0;
    bottom: 0;
    -webkit-animation-delay: 0.8s;
    animation-delay: 0.8s;
  }

  &:nth-of-type(4) {
    bottom: 0;
    left: 0;
    -webkit-animation-delay: 1.2s;
    animation-delay: 1.2s;
  }
`;

export const AntSpin = styled.div`
  position: absolute;
  display: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  color: #fff;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  text-align: center;
  list-style: none;
  opacity: 0;
  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  transition: -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86),
    -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  -webkit-font-feature-settings: "tnum";
  font-feature-settings: "tnum";
  width: 32px;
  height: 32px;
  font-size: 32px;
  position: static;
  display: inline-block;
  opacity: 1;
`;

export const PageLoadingWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 98px;
`;

export const AntSpinDotItem = styled.i`
  position: absolute;
  display: block;
  width: 9px;
  height: 9px;
  background-color: #fff;
  border-radius: 100%;
  -webkit-transform: scale(0.75);
  -ms-transform: scale(0.75);
  transform: scale(0.75);
  -webkit-transform-origin: 50% 50%;
  -ms-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  opacity: 1;
  -webkit-animation: antspinmove 1s infinite linear alternate;
  animation: antSpinMove 1s infinite linear alternate;
`;

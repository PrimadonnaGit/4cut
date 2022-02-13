import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  max-width: 450px;
  height: 100vh;
  margin: 0 auto;
  background-color: #000;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20;
`;

export const UploadContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;

  & ::-webkit-scrollbar {
    display: none;
  }
`;

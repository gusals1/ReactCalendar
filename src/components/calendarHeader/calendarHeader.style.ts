import styled from "@emotion/styled";
import { Button } from "antd";

export const HeaderWrap = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 40px;
`;

export const TitleCalendar = styled.h2`
  font-size: 32px;
  text-align: center;
`;

export const NavigateBtn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px 0;
  gap: 5px;
`;

export const AddBtn = styled(Button)`
  position: absolute;
  top: 70%;
  right: 35px;
`;

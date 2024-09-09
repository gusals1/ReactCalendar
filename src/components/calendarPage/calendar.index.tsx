import { Calendar } from "antd";
import * as S from "./calendar.style";
import CalendarHeader from "../calendarHeader/calendarHeader.index";
import { cellRender } from "./renderFunc";

export default function CalendarApp() {
  return (
    <S.Wrapper>
      <Calendar
        cellRender={cellRender}
        headerRender={({ value, onChange }) => (
          <CalendarHeader value={value} onChange={onChange} />
        )}
      />
    </S.Wrapper>
  );
}

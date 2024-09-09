import { Button, DatePicker } from "antd";
import * as S from "./calendarHeader.style";
import { Dayjs } from "dayjs";
import { useToggle } from "@/src/common/hooks/custom/useToggle";
import DateModal from "../commons/dateModal/dateModal";

interface ICalendarHeaderProps {
  value: Dayjs;
  onChange: (date: Dayjs) => void;
}

export default function CalendarHeader({
  value,
  onChange,
}: ICalendarHeaderProps) {
  /* 날짜 변경 함수 */
  const PrevMonth = () => onChange(value.clone().subtract(1, "month"));
  const NextMonth = () => onChange(value.clone().add(1, "month"));
  const AlterMonth = (day: Dayjs) => onChange(day);

  const [isModalOpen, modalToggle] = useToggle();

  return (
    <S.HeaderWrap>
      <S.TitleCalendar>
        {`${value.format("YYYY")}년 ${value.format("M")}월 달력`}
      </S.TitleCalendar>
      <S.NavigateBtn>
        <Button type="primary" onClick={PrevMonth}>
          이전
        </Button>

        <DatePicker picker="month" value={value} onChange={AlterMonth} />

        <Button type="primary" onClick={NextMonth}>
          다음
        </Button>
      </S.NavigateBtn>
      <S.AddBtn type="primary" onClick={modalToggle}>
        일정 추가
      </S.AddBtn>
      <DateModal isModalOpen={isModalOpen} modalToggle={modalToggle} />
    </S.HeaderWrap>
  );
}

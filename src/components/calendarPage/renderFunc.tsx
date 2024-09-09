import { Dayjs } from "dayjs";
import { Badge, CalendarProps } from "antd";
import GetListData from "@/src/common/utils/getListdate";
import * as S from "./calendar.style";

export const dateCellRender = (value: Dayjs) => {
  const [returnData] = GetListData(value);

  const onClickModal = () => console.log(returnData);

  return (
    <>
      <S.EventChecker>
        {returnData.map((event) => (
          <S.EventList key={event} onClick={onClickModal}>
            <Badge status={"success"} text={event} />
          </S.EventList>
        ))}
      </S.EventChecker>
    </>
  );
};

/** Calendar 컴포넌트의 셀을 커스텀 하는데 사용되는 함수 */
export const cellRender: CalendarProps<Dayjs>["cellRender"] = (
  current,
  info
) => {
  // current => 현재 셀을 나타내는 DayJs 객체
  // info => 셀의 유형과 노드 정보를 담은 객체 (Year -> Month / Month -> date 반환)

  // 컴포넌트를 명시안하면 달력이 중첩되서 그려져서 이상한 모양이 나옴
  if (info.type === "date") return dateCellRender(current);
  return info.originNode;
};

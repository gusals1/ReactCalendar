import { eventListState } from "@/src/common/store/store";
import { Dayjs } from "dayjs";
import { useRecoilState } from "recoil";

export default function GetListData(value: Dayjs) {
  const [event] = useRecoilState(eventListState);
  // YYYY-MM-DD 형식으로 날짜를 변환
  const dateKey = value.format("YYYY-MM-DD");
  // eventList에서 해당 날짜의 이벤트를 가져옴
  const listData = event[dateKey];

  const returnData = listData ? listData.content : [];
  // listData가 있으면 내용을 반환, 없으면 빈 배열 반환
  return [returnData];
}

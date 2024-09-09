import { atom } from "recoil";
export interface Event {
  content: string[];
}

export interface EventListType {
  [key: string]: Event;
}

export const eventListState = atom<EventListType>({
  key: "eventListState",
  default: {
    "2024-09-07": { content: ["이벤트1", "이벤트 추가 1"] },
    "2024-09-15": { content: ["이벤트2"] },
  },
});

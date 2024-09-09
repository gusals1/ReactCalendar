import { Modal } from "antd";
import { eventListState } from "../../store/store";
import { useForm } from "antd/es/form/Form";
import { useRecoilState } from "recoil";

interface IUseAddEventListProps {
  modalToggle: () => void;
}

export default function useAddEventList({
  modalToggle,
}: IUseAddEventListProps) {
  const [form] = useForm();
  const [, setEventList] = useRecoilState(eventListState);

  const addEventList = async () => {
    try {
      const values = await form.validateFields();

      const { date, event } = values;

      const dateFormat = date.format("YYYY-MM-DD");

      setEventList((prev) => ({
        ...prev,
        [dateFormat]: {
          content: [...(prev[dateFormat]?.content || []), event],
        },
      }));
      modalToggle();
      form.resetFields();
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return { addEventList, form };
}

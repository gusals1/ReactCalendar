import useAddEventList from "@/src/common/hooks/custom/useAddEventList";
import { DatePicker, Form, Input, Modal } from "antd";

interface IDateModalProps {
  isModalOpen: boolean;
  modalToggle: () => void;
}

export default function DateModal({
  isModalOpen,
  modalToggle,
}: IDateModalProps) {
  const { form, addEventList } = useAddEventList({ modalToggle });

  return (
    <Modal
      title="일정 추가"
      open={isModalOpen}
      onOk={addEventList}
      onCancel={modalToggle}
    >
      <Form form={form} layout="vertical" name="eventForm">
        <Form.Item
          name="date"
          label="날짜 선택"
          rules={[{ required: true, message: "날짜를 선택해주세요" }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="event"
          label="어떤 일정이 있으신가요?"
          rules={[{ required: true, message: "일정을 입력하세요" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}

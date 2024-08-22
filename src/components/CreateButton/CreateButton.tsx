import { Button, Form, Modal, Typography } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useState } from 'react';

function CreateButton({
  renderForm,
  title,
}: {
  renderForm?: () => React.ReactNode;
  title: string;
}) {
  const [form] = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    form.resetFields();
    setIsModalOpen((prev) => !prev);
  };

  const handleSubmitForm = () => form.submit();

  const handleFinish = (values: any) => console.log(values);

  return (
    <>
      <Button type="primary" onClick={handleToggleModal}>
        {title}
      </Button>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleSubmitForm}
        onCancel={handleToggleModal}
        cancelText="لغو"
        okText="ذخیره"
        confirmLoading={false}
        centered
      >
        <Form form={form} onFinish={handleFinish}>
          {renderForm && renderForm()}
        </Form>
      </Modal>
    </>
  );
}

export default CreateButton;

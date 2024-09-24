import { UseMutateFunction } from '@tanstack/react-query';
import { Button, Form, Modal, message } from 'antd';
import { FormInstance, useForm } from 'antd/es/form/Form';
import { AxiosResponse } from 'axios';
import { useState } from 'react';

function CreateButton({
  renderForm,
  title,
  mutate,
}: {
  renderForm?: (form: FormInstance) => React.ReactNode;
  title: string;
  mutate: UseMutateFunction<AxiosResponse<any, any>, Error, any, unknown>;
}) {
  const [form] = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    form.resetFields();
    setIsModalOpen((prev) => !prev);
  };

  const handleSubmitForm = () => form.submit();

  const onError = () => message.error('ذخیره فرم با مشکل مواجه شد.');

  const onSuccess = () => message.success('ذخیره فرم با موفقیت انجام شد');

  const handleFinish = (values: any) => {
    //mutate(values, { onSuccess, onError });
    console.log({ values });
  };

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
          {renderForm && renderForm(form)}
        </Form>
      </Modal>
    </>
  );
}

export default CreateButton;

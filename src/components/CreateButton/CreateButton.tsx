import { UseMutateFunction } from '@tanstack/react-query';
import { Button, Form, Modal, message } from 'antd';
import { FormInstance, useForm } from 'antd/es/form/Form';
import { AxiosResponse } from 'axios';
import { useState } from 'react';
import { generateResponseFormData } from '../../utils';

function CreateButton({
  renderForm,
  title,
  mutate,
  refetch,
  confirmLoading = false,
}: {
  renderForm?: (form: FormInstance) => React.ReactNode;
  title: string;
  mutate: UseMutateFunction<AxiosResponse<any, any>, Error, any, unknown>;
  refetch?: any;
  confirmLoading: boolean;
}) {
  const [form] = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    form.resetFields();
    if (!isModalOpen) {
      refetch && refetch();
    }
    setIsModalOpen((prev) => !prev);
  };

  const handleSubmitForm = () => form.submit();

  const onError = () => message.error('ذخیره فرم با مشکل مواجه شد.');

  const onSuccess = () => {
    message.success('ذخیره فرم با موفقیت انجام شد');
    handleToggleModal();
  };

  const handleFinish = (values: any) => {
    const formData = generateResponseFormData(values);

    mutate(formData, { onSuccess, onError });
  };

  return (
    <>
      <Button type="primary" onClick={handleToggleModal}>
        {title}
      </Button>
      <Modal
        width={700}
        title={title}
        open={isModalOpen}
        onOk={handleSubmitForm}
        onCancel={handleToggleModal}
        cancelText="لغو"
        okText="ذخیره"
        confirmLoading={confirmLoading}
        centered
      >
        <Form form={form} onFinish={handleFinish} className="create-form">
          {renderForm && renderForm(form)}
        </Form>
      </Modal>
    </>
  );
}

export default CreateButton;

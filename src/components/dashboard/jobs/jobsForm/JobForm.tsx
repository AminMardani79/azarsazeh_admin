import { Form, Input, Select } from 'antd';

const JobForm = () => {
  return (
    <>
      <Form.Item
        label="عنوان شغل"
        name="name"
        rules={[{ required: true, message: 'لطفا عنوان شغل را وارد کنید.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="مکان"
        name="location"
        rules={[{ required: true, message: 'لطفا مکان را وارد کنید.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="دسته بندی"
        name="category"
        rules={[{ required: true, message: 'لطفا دسته بندی را وارد کنید.' }]}
      >
        <Select
          labelInValue
          defaultValue={{ value: 'lucy', label: 'Lucy (101)' }}
          options={[
            {
              value: 'jack',
              label: 'Jack (100)',
            },
            {
              value: 'lucy',
              label: 'Lucy (101)',
            },
          ]}
        />
      </Form.Item>
    </>
  );
};

export default JobForm;

import { Form, Input, Select } from 'antd';
import { JobCategory } from '../../../../types/job.types';
import { useEffect, useState } from 'react';

const JobForm = ({ jobCategories }: { jobCategories: JobCategory[] }) => {
  const [categoryOptions, setCategoryOptions] = useState<
    { label: string; value: string }[]
  >([]);
  
  useEffect(() => {
    if (jobCategories && jobCategories.length > 0) {
      const options = jobCategories.map((category) => {
        return {
          label: category.title,
          value: category.id,
        };
      });

      setCategoryOptions(options);
    }
  }, [jobCategories]);

  return (
    <>
      <Form.Item
        label="عنوان شغل"
        name="title"
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
          options={categoryOptions}
        />
      </Form.Item>
    </>
  );
};

export default JobForm;

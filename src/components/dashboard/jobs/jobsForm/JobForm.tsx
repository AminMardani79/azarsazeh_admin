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
        label="(انگلیسی) عنوان شغل"
        name="title_en"
        rules={[{ required: true, message: 'لطفا عنوان شغل را وارد کنید.' }]}
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
      <Form.Item
        label="مکان"
        name="location"
        rules={[{ required: true, message: 'لطفا مکان را وارد کنید.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="(انگلیسی) مکان"
        name="location_en"
        rules={[{ required: true, message: 'لطفا مکان را وارد کنید.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="سابقه کاری"
        name="work_experiences"
        rules={[{ required: true, message: 'لطفا سابقه کاری را وارد کنید.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="(انگلیسی) سابقه کاری"
        name="work_experiences_en"
        rules={[{ required: true, message: 'لطفا سابقه کاری را وارد کنید.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="تحصیلات"
        name="education"
        rules={[{ required: true, message: 'لطفا تحصیلات را وارد کنید.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="(انگلیسی) تحصیلات"
        name="education_en"
        rules={[{ required: true, message: 'لطفا تحصیلات را وارد کنید.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="مهارت ها"
        name="skills"
        rules={[{ required: true, message: 'لطفا مهارت ها را وارد کنید.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="(انگلیسی) مهارت ها"
        name="skills_en"
        rules={[{ required: true, message: 'لطفا مهارت ها را وارد کنید.' }]}
      >
        <Input />
      </Form.Item>
    </>
  );
};

export default JobForm;

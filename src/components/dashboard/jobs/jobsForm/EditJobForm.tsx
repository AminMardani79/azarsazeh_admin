import { Button, Col, Form, FormInstance, Input, Row, Select } from 'antd';
import { EditJob } from '../../../../types/job.types';
import { useEffect } from 'react';
import { useCategoryOptions } from '../../../../hooks/useCategoryOptions';

const EditJobForm = ({
  form,
  data,
  confirmLoading,
  categories
}: {
  form: FormInstance<any>;
  data: EditJob;
  confirmLoading: boolean;
  categories: any;
}) => {
  const { categoryOptions } = useCategoryOptions(categories);
  const handleClick = () => form.submit();

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        title: data.title,
        title_en: data.title_en,
        location: data.location,
        location_en: data.location_en,
        work_experiences: data.work_experiences,
        work_experiences_en: data.work_experiences_en,
        education: data.education,
        education_en: data.education_en,
        skills: data.skills,
        skills_en: data.skills_en,
        category: { label: data.category.title, value: data.category.id },
      });
    }
  }, [data]);

  return (
    <Row gutter={[15, 0]}>
      <Col span={24} md={12}>
        <Form.Item
          label="عنوان شغل"
          name="title"
          rules={[{ required: true, message: 'لطفا عنوان شغل را وارد کنید.' }]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col span={24} md={12}>
        <Form.Item
          label="(انگلیسی) عنوان شغل"
          name="title_en"
          rules={[{ required: true, message: 'لطفا عنوان شغل را وارد کنید.' }]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col span={24} md={12}>
        <Form.Item
          label="مکان"
          name="location"
          rules={[{ required: true, message: 'لطفا مکان را وارد کنید.' }]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col span={24} md={12}>
        <Form.Item
          label="(انگلیسی) مکان"
          name="location_en"
          rules={[{ required: true, message: 'لطفا مکان را وارد کنید.' }]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col span={24} md={12}>
        <Form.Item
          label="تجربه کاری"
          name="work_experiences"
          rules={[{ required: true, message: 'لطفا تجربه کاری را وارد کنید.' }]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col span={24} md={12}>
        <Form.Item
          label="(انگلیسی) تجربه کاری"
          name="work_experiences_en"
          rules={[{ required: true, message: 'لطفا تجربه کاری را وارد کنید.' }]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col span={24} md={12}>
        <Form.Item
          label="تحصیلات"
          name="education"
          rules={[{ required: true, message: 'لطفا تحصیلات را وارد کنید.' }]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col span={24} md={12}>
        <Form.Item
          label="(انگلیسی) تحصیلات"
          name="education_en"
          rules={[{ required: true, message: 'لطفا تحصیلات را وارد کنید.' }]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col span={24} md={12}>
        <Form.Item
          label="توانایی ها"
          name="skills"
          rules={[{ required: true, message: 'لطفا توانایی ها را وارد کنید.' }]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col span={24} md={12}>
        <Form.Item
          label="(انگلیسی) توانایی ها"
          name="skills_en"
          rules={[{ required: true, message: 'لطفا توانایی ها را وارد کنید.' }]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col span={24} md={12}>
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
      </Col>
      <Col span={24}>
        <Button
          size="middle"
          type="primary"
          onClick={handleClick}
          loading={confirmLoading}
        >
          ویرایش
        </Button>
      </Col>
    </Row>
  );
};

export default EditJobForm;

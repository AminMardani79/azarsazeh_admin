import { Button, Col, Form, Input, Row } from 'antd';
import { useForm } from 'antd/es/form/Form';
import FileUploader from '../../components/Uploader/ImageUploader';
import { normFile } from '../../utils';

const ProjectCategoryDetailTab = () => {
  const [form] = useForm();

  const handleClick = ()=> form.submit();

  return (
    <Form form={form}>
      <Row>
        <Col span={24} md={6}>
          <Form.Item
            label="نام دسته بندی"
            name="name"
            rules={[
              { required: true, message: 'لطفا نام دسته بندی را وارد کنید.' },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            name="file"
            label="آپلود عکس"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <FileUploader />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Button size='middle' type='primary' onClick={handleClick}>ویرایش</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default ProjectCategoryDetailTab;

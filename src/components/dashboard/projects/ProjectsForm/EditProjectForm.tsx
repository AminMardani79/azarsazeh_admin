import { Button, Col, Form, FormInstance, Input, Row } from 'antd';
import { normFile } from '../../../../utils';
import ImageUploader from '../../../Uploader/ImageUploader';

const EditProjectForm = ({ form }: { form: FormInstance<any> }) => {
  const handleClick = () => form.submit();

  return (
    <Row>
      <Col span={24} md={10}>
        <Form.Item
          label="نام پروژه"
          name="name"
          rules={[{ required: true, message: 'لطفا نام پروژه را وارد کنید.' }]}
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
          <ImageUploader/>
        </Form.Item>
      </Col>
      <Col span={24}>
        <Button size="middle" type="primary" onClick={handleClick}>
          ویرایش
        </Button>
      </Col>
    </Row>
  );
};

export default EditProjectForm;

import { Button, Col, Form, FormInstance, Input, Row } from 'antd';
import FileUploader from '../../../Uploader/ImageUploader';
import { normFile } from '../../../../utils';

const EditEquipmentForm = ({ form }: { form: FormInstance<any> }) => {
    
  const handleClick = () => form.submit();

  return (
    <Row>
      <Col span={24} md={10}>
        <Form.Item
          label="نام تجهیزات"
          name="name"
          rules={[{ required: true, message: 'لطفا نام تجهیزات را وارد کنید.' }]}
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
        <Button size="middle" type="primary" onClick={handleClick}>
          ویرایش
        </Button>
      </Col>
    </Row>
  );
};

export default EditEquipmentForm;

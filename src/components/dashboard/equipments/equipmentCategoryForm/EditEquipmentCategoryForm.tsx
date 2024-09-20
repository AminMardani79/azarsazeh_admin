import { Button, Col, Form, FormInstance, Input, Row } from 'antd';
import { normFile } from '../../../../utils';
import FileUploader from '../../../Uploader/ImageUploader';

const EditEquipmentCategoryForm = ({ form }: { form: FormInstance<any> }) => {
  const handleClick = () => form.submit();
  return (
    <Row>
      <Col span={24} md={6}>
        <Form.Item
          label="نام دسته بندی تجهیزات"
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
        <Button size="middle" type="primary" onClick={handleClick}>
          ویرایش
        </Button>
      </Col>
    </Row>
  );
};

export default EditEquipmentCategoryForm;

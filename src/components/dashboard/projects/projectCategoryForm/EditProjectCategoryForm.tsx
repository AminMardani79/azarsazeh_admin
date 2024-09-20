import {
  Col,
  Input,
  Row,
  Form,
  Button,
  FormInstance,
} from 'antd';
import ImageUploader from '../../../Uploader/ImageUploader';
import { normFile } from '../../../../utils';


const EditProjectCategoryForm = ({ form }: { form: FormInstance<any> }) => {

  const handleClick = () => form.submit();
  return (
    <Row>
      <Col span={24} md={10}>
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
          <ImageUploader />
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

export default EditProjectCategoryForm;

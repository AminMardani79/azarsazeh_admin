import { Button, Col, Form, FormInstance, Input, Row } from 'antd';
import FileUploader from '../../../FileUploader/FileUploader';
import { normFile } from '../../../../utils';
import TextArea from 'antd/es/input/TextArea';

const EditAcademyForm = ({ form }: { form: FormInstance<any> }) => {
  const handleClick = () => form.submit();

  return (
    <Row>
      <Col span={24} md={10}>
        <Form.Item
          label="نام مقاله"
          name="name"
          rules={[{ required: true, message: 'لطفا نام خبر را وارد کنید.' }]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item
          label="توضیحات مقاله"
          name="description"
          rules={[
            { required: true, message: 'لطفا توضیحات خبر را وارد کنید.' },
          ]}
        >
          <TextArea rows={10}/>
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

export default EditAcademyForm;

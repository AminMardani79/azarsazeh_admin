import { Form, Input } from 'antd';
import { normFile } from '../../../../utils';
import FileUploader from '../../../FileUploader/FileUploader';
import TextArea from 'antd/es/input/TextArea';

const AcademyForm = () => {

  return (
    <>
      <Form.Item
        label="نام مقاله"
        name="name"
        rules={[{ required: true, message: 'لطفا نام مقاله را وارد کنید.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="توضیحات مقاله"
        name="description"
        rules={[{ required: true, message: 'لطفا توضیحات مقاله را وارد کنید.' }]}
      >
        <TextArea />
      </Form.Item>
      <Form.Item
        name="file"
        label="آپلود عکس"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <FileUploader/>
      </Form.Item>
    </>
  );
};

export default AcademyForm;

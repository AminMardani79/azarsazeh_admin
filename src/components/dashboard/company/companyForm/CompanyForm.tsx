import { Form, Input } from 'antd';
import { normFile } from '../../../../utils';
import FileUploader from '../../../FileUploader/FileUploader';
import TextArea from 'antd/es/input/TextArea';

const CompanyForm = () => {

  return (
    <>
      <Form.Item
        label="عنوان مطلب"
        name="name"
        rules={[{ required: true, message: 'لطفا عنوان مطلب را وارد کنید.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="توضیحات مطلب"
        name="description"
        rules={[{ required: true, message: 'لطفا توضیحات مطلب را وارد کنید.' }]}
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

export default CompanyForm;

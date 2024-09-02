import { Form, Input } from 'antd';
import FileUploader from '../../../FileUploader/FileUploader';
import { normFile } from '../../../../utils';

const EquipmentForm = () => {

  return (
    <>
      <Form.Item
        label="نام تجهیزات"
        name="name"
        rules={[{ required: true, message: 'لطفا نام تجهیزات را وارد کنید.' }]}
      >
        <Input />
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

export default EquipmentForm;

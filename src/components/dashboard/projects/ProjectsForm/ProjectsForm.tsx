import { Form, Input } from 'antd';
import FileUploader from '../../../FileUploader/FileUploader';

const ProjectsForm = () => {
  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <>
      <Form.Item
        label="نام پروژه"
        name="name"
        rules={[{ required: true, message: 'لطفا نام پروژه را وارد کنید.' }]}
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

export default ProjectsForm;

import { Form, Input } from 'antd';
import { normFile } from '../../../../utils';
import FileUploader from '../../../FileUploader/FileUploader';

const ProjectCategoriesForm = () => {

  return (
    <>
      <Form.Item
        label="نام دسته بندی"
        name="name"
        rules={[{ required: true, message: 'لطفا نام دسته بندی را وارد کنید.' }]}
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

export default ProjectCategoriesForm;

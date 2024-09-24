import { Form, FormInstance, Input } from 'antd';
import { normFile } from '../../../../utils';
import ImageUploader from '../../../Uploader/ImageUploader';
import { useUpdateImages } from '../../../../hooks/useUpdateImages';

const ProjectCategoriesForm = ({ form, uploadedImages }: { form: FormInstance, uploadedImages: [] }) => {
  const { handleUpdateImages } = useUpdateImages(form);

  return (
    <>
      <Form.Item
        label="نام دسته بندی"
        name="name"
        rules={[
          { required: true, message: 'لطفا نام دسته بندی را وارد کنید.' },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="images"
        label="آپلود عکس"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <ImageUploader updateImages={handleUpdateImages} uploadedImages={uploadedImages}/>
      </Form.Item>
    </>
  );
};

export default ProjectCategoriesForm;

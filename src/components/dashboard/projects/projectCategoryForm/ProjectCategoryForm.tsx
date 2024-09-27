import { Form, FormInstance, Input } from 'antd';
import { normFile } from '../../../../utils';
import ImageUploader from '../../../Uploader/ImageUploader';
import { useUpdateImages } from '../../../../hooks/useUpdateImages';

const ProjectCategoriesForm = ({
  form,
  uploadedImages = [],
}: {
  form: FormInstance;
  uploadedImages?: [];
}) => {
  const { handleUpdateImages } = useUpdateImages(form, 'image');

  return (
    <>
      <Form.Item
        label="نام دسته بندی"
        name="title"
        rules={[
          { required: true, message: 'لطفا نام دسته بندی را وارد کنید.' },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="image"
        label="آپلود عکس"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <ImageUploader
          updateImages={handleUpdateImages}
          uploadedImages={uploadedImages}
          maxCount={1}
        />
      </Form.Item>
    </>
  );
};

export default ProjectCategoriesForm;

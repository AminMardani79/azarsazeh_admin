import { Form, FormInstance, Input } from 'antd';
import { normFile } from '../../../../utils';
import { useUpdateImages } from '../../../../hooks/useUpdateImages';
import ImageUploder from '../../../Uploader/ImageUploader';

const EquipmentCategoryForm = ({
  form,
  uploadedImages = [],
}: {
  form: FormInstance;
  uploadedImages?: [];
}) => {
  const { handleUpdateImages } = useUpdateImages(form, "image");
  
  return (
    <>
      <Form.Item
        label="نام دسته بندی تجهیزات"
        name="title"
        rules={[{ required: true, message: 'لطفا نام دسته بندی را وارد کنید.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="(انگلیسی) نام دسته بندی تجهیزات"
        name="title_en"
        rules={[{ required: true, message: 'لطفا نام دسته بندی را وارد کنید.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="image"
        label="آپلود عکس"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <ImageUploder
          updateImages={handleUpdateImages}
          uploadedImages={uploadedImages}
          maxCount={1}
        />
      </Form.Item>
    </>
  );
};

export default EquipmentCategoryForm;

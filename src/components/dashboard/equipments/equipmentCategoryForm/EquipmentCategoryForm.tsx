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
  const { handleUpdateImages } = useUpdateImages(form);
  
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
        name="images"
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

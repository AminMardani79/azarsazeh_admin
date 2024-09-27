import { Form, FormInstance, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useUpdateImages } from '../../../../hooks/useUpdateImages';
import ImageUploder from '../../../Uploader/ImageUploader';
import { normFile } from '../../../../utils';

const CompanyForm = ({ form }: { form: FormInstance }) => {
  const { handleUpdateImages } = useUpdateImages(form, "image");

  return (
    <>
      <Form.Item
        label="عنوان مطلب"
        name="title"
        rules={[{ required: true, message: 'لطفا عنوان مطلب را وارد کنید.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="توضیحات مطلب"
        name="content"
        rules={[{ required: true, message: 'لطفا توضیحات مطلب را وارد کنید.' }]}
      >
        <TextArea />
      </Form.Item>
      <Form.Item
        name="image"
        label="آپلود عکس"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <ImageUploder
          updateImages={handleUpdateImages}
          maxCount={1}
        />
      </Form.Item>
    </>
  );
};

export default CompanyForm;

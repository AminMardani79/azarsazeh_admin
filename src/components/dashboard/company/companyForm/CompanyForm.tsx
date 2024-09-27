import { Form, FormInstance, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useUpdateImages } from '../../../../hooks/useUpdateImages';
import ImageUploder from '../../../Uploader/ImageUploader';
import { normFile } from '../../../../utils';

const CompanyForm = ({ form }: { form: FormInstance }) => {
  const { handleUpdateImages } = useUpdateImages(form);

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
        name="images"
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

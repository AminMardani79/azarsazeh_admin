import { Form, FormInstance, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useUpdateImages } from '../../../../hooks/useUpdateImages';
import { normFile } from '../../../../utils';
import ImageUploder from '../../../Uploader/ImageUploader';

const NewsForm = ({ form }: { form: FormInstance }) => {
  const { handleUpdateImages } = useUpdateImages(form, "image");
  return (
    <>
      <Form.Item
        label="عنوان خبر"
        name="title"
        rules={[{ required: true, message: 'لطفا نام خبر را وارد کنید.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="عنوان ثانویه خبر"
        name="meta_title"
        rules={[{ required: true, message: 'لطفا نام خبر را وارد کنید.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="توضیحات خبر"
        name="content"
        rules={[{ required: true, message: 'لطفا توضیحات خبر را وارد کنید.' }]}
      >
        <TextArea rows={10}/>
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

export default NewsForm;

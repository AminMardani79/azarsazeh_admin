import { Form, FormInstance, Input } from 'antd';
import { useUpdateImages } from '../../../../hooks/useUpdateImages';
import { normFile } from '../../../../utils';
import ImageUploder from '../../../Uploader/ImageUploader';
import TextArea from 'antd/es/input/TextArea';

const AcademyForm = ({ form }: { form: FormInstance }) => {
  const {handleUpdateImages} = useUpdateImages(form, "image");
  return (
    <>
      <Form.Item
        label="نام مقاله"
        name="title"
        rules={[{ required: true, message: 'لطفا نام مقاله را وارد کنید.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="توضیحات مقاله"
        name="content"
        rules={[
          { required: true, message: 'لطفا توضیحات مقاله را وارد کنید.' },
        ]}
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

export default AcademyForm;

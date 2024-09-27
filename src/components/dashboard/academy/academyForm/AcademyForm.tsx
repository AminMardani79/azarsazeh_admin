import { Form, FormInstance, Input } from 'antd';
import { useUpdateImages } from '../../../../hooks/useUpdateImages';
import { normFile } from '../../../../utils';
import ImageUploder from '../../../Uploader/ImageUploader';

const AcademyForm = ({ form }: { form: FormInstance }) => {
  const {handleUpdateImages} = useUpdateImages(form);
  return (
    <>
      <Form.Item
        label="نام مقاله"
        name="title"
        rules={[{ required: true, message: 'لطفا نام مقاله را وارد کنید.' }]}
      >
        <Input />
      </Form.Item>
      {/* <Form.Item
        label="توضیحات مقاله"
        name="content"
        rules={[
          { required: true, message: 'لطفا توضیحات مقاله را وارد کنید.' },
        ]}
      >
        <TextArea />
      </Form.Item> */}
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

export default AcademyForm;

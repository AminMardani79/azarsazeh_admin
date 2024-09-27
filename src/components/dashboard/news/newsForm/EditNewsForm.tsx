import { Button, Col, Form, FormInstance, Input, Row, UploadFile } from 'antd';
import { generateImageObject, normFile } from '../../../../utils';
import TextArea from 'antd/es/input/TextArea';
import { EditNews } from '../../../../types/news.types';
import { useUpdateImages } from '../../../../hooks/useUpdateImages';
import { useEffect, useState } from 'react';
import ImageUploader from '../../../Uploader/ImageUploader';

const EditNewsForm = ({
  form,
  data,
  confirmLoading,
}: {
  form: FormInstance<any>;
  data: EditNews;
  confirmLoading: boolean;
}) => {
  const { handleUpdateImages } = useUpdateImages(form, 'image');
  const [uploadedImage, setUploadedImage] = useState<UploadFile[]>([]);

  const handleClick = () => form.submit();

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        title: data.title,
        content: data.content,
        meta_title: data.meta_title,
      });

      if (data.image) {
        const imageObject = generateImageObject(data.image, '1');
        setUploadedImage([imageObject]);
      }
    }
  }, [data]);

  return (
    <Row gutter={[15, 0]}>
      <Col span={24} md={12}>
        <Form.Item
          label="عنوان خبر"
          name="title"
          rules={[{ required: true, message: 'لطفا عنوان خبر را وارد کنید.' }]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col span={24} md={12}>
        <Form.Item
          label="عنوان ثانویه"
          name="meta_title"
          rules={[
            { required: true, message: 'لطفا عنوان ثانویه را وارد کنید.' },
          ]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col span={24} md={24}>
        <Form.Item
          label="توضیحات"
          name="content"
          rules={[{ required: true, message: 'لطفا توضیحات را وارد کنید.' }]}
        >
          <TextArea rows={10} />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item
          name="images"
          label="آپلود عکس"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <ImageUploader
            uploadedImages={uploadedImage}
            updateImages={handleUpdateImages}
            maxCount={1}
          />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Button
          size="middle"
          type="primary"
          onClick={handleClick}
          loading={confirmLoading}
        >
          ویرایش
        </Button>
      </Col>
    </Row>
  );
};

export default EditNewsForm;

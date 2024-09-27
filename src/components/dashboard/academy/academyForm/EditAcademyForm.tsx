import { Button, Col, Form, FormInstance, Input, Row, UploadFile } from 'antd';
import { generateImageObject, normFile } from '../../../../utils';
import TextArea from 'antd/es/input/TextArea';
import { EditAcademyArticle } from '../../../../types/academy.types';
import ImageUploader from '../../../Uploader/ImageUploader';
import { useUpdateImages } from '../../../../hooks/useUpdateImages';
import { useEffect, useState } from 'react';

const EditAcademyForm = ({
  form,
  data,
  confirmLoading,
}: {
  form: FormInstance<any>;
  data: EditAcademyArticle;
  confirmLoading: boolean;
}) => {
  const { handleUpdateImages } = useUpdateImages(form, 'image');
  const [uploadedImage, setUploadedImage] = useState<UploadFile[]>([]);

  const handleClick = () => form.submit();

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        title: data.title,
      });

      if (data.image) {
        const imageObject = generateImageObject(data.image, '1');
        setUploadedImage([imageObject]);
      }
    }
  }, [data]);

  return (
    <Row>
      <Col span={24} md={10}>
        <Form.Item
          label="نام مقاله"
          name="title"
          rules={[{ required: true, message: 'لطفا نام خبر را وارد کنید.' }]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item
          label="توضیحات مقاله"
          name="content"
          rules={[
            { required: true, message: 'لطفا توضیحات خبر را وارد کنید.' },
          ]}
        >
          <TextArea rows={10} />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item
          name="file"
          label="آپلود عکس"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <ImageUploader
            updateImages={handleUpdateImages}
            uploadedImages={uploadedImage}
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

export default EditAcademyForm;

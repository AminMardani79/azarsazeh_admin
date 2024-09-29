import { Button, Col, Form, FormInstance, Input, Row, UploadFile } from 'antd';
import { generateImageObject, normFile } from '../../../../utils';
import TextArea from 'antd/es/input/TextArea';
import { EditCompanyArticle } from '../../../../types/company.types';
import { useUpdateImages } from '../../../../hooks/useUpdateImages';
import { useEffect, useState } from 'react';
import ImageUploader from '../../../Uploader/ImageUploader';

const EditCompanyForm = ({
  form,
  data,
  confirmLoading,
}: {
  form: FormInstance<any>;
  data: EditCompanyArticle;
  confirmLoading: boolean;
}) => {
  const { handleUpdateImages } = useUpdateImages(form, 'image');
  const [uploadedImage, setUploadedImage] = useState<UploadFile[]>([]);

  const handleClick = () => form.submit();

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        title: data.title,
        title_en: data.title_en,
        content: data.content,
        content_en: data.content_en,
      });

      if (data.image) {
        const imageObject = generateImageObject(data.image, '1');
        setUploadedImage([imageObject]);
      }
    }
  }, [data]);

  return (
    <Row gutter={[15, 0]}>
      <Col span={24} md={10}>
        <Form.Item
          label="عنوان مطلب"
          name="title"
          rules={[{ required: true, message: 'لطفا عنوان مطلب را وارد کنید.' }]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col span={24} md={10}>
        <Form.Item
          label="(انگلیسی) عنوان مطلب"
          name="title_en"
          rules={[{ required: true, message: 'لطفا عنوان مطلب را وارد کنید.' }]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item label="توضیحات مطلب" name="content">
          <TextArea rows={10} />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item label="(انگلیسی) توضیحات مطلب" name="content_en" className='text-area'>
          <TextArea rows={10} />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item
          name="image"
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

export default EditCompanyForm;

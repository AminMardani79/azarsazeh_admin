import { Button, Col, Form, FormInstance, Input, Row, UploadFile } from 'antd';
import { generateImageObject, normFile } from '../../../../utils';
import { EditEquipmentCategory } from '../../../../types/equipment.types';
import { useUpdateImages } from '../../../../hooks/useUpdateImages';
import { useEffect, useState } from 'react';
import ImageUploader from '../../../Uploader/ImageUploader';

const EditEquipmentCategoryForm = ({
  form,
  data,
  confirmLoading,
}: {
  form: FormInstance<any>;
  data: EditEquipmentCategory;
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
      <Col span={24} md={12}>
        <Form.Item
          label="نام دسته بندی تجهیزات"
          name="title"
          rules={[
            { required: true, message: 'لطفا نام دسته بندی را وارد کنید.' },
          ]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item
          name="image"
          label="آپلود عکس"
          valuePropName="image"
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

export default EditEquipmentCategoryForm;

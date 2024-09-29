import {
  Button,
  Col,
  Form,
  FormInstance,
  Input,
  Row,
  Select,
  UploadFile,
  message,
} from 'antd';
import { generateImageObjects, normFile } from '../../../../utils';
import ImageUploader from '../../../Uploader/ImageUploader';
import { useUpdateImages } from '../../../../hooks/useUpdateImages';
import { useEffect, useState } from 'react';
import { EditProject } from '../../../../types/project.types';
import TextArea from 'antd/es/input/TextArea';
import {
  generateCategoryOptions,
  useCategoryOptions,
} from '../../../../hooks/useCategoryOptions';
import { useRemoveProjectImage } from '../../../../services/project.api';

const EditProjectForm = ({
  form,
  data,
  confirmLoading,
  categories,
}: {
  form: FormInstance<any>;
  data: EditProject;
  confirmLoading: boolean;
  categories: any;
}) => {
  const { handleUpdateImages } = useUpdateImages(form, 'images');
  const [uploadedImages, setUploadedImages] = useState<UploadFile[]>([]);
  const { categoryOptions } = useCategoryOptions(categories);

  const { mutate } = useRemoveProjectImage();

  const handleClick = () => form.submit();

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        title: data.title,
        title_en: data.title_en,
        content_en: data.content_en,
        meta_title: data.meta_title,
        meta_title_en: data.meta_title_en,
        categories: generateCategoryOptions(data.categories)[0],
      });

      if (data.images) {
        const imageObjects = generateImageObjects(data.images);
        setUploadedImages([...imageObjects]);
      }
    }
  }, [data]);

  const onSuccess = () => message.success('حذف عکس با موفقیت انجام شد');

  const handleRemoveImage = (data: UploadFile) => {
    if (data.url) mutate(data.uid, { onSuccess });
  };

  return (
    <Row gutter={[15, 0]}>
      <Col span={24} md={12}>
        <Form.Item
          label="نام پروژه"
          name="title"
          rules={[{ required: true, message: 'لطفا نام پروژه را وارد کنید.' }]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col span={24} md={12}>
        <Form.Item
          label="(انگلیسی) نام پروژه"
          name="title_en"
          rules={[{ required: true, message: 'لطفا نام پروژه را وارد کنید.' }]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col span={24} md={12}>
        <Form.Item label="عنوان ثانویه" name="meta_title">
          <Input />
        </Form.Item>
      </Col>
      <Col span={24} md={12}>
        <Form.Item label="(انگلیسی) عنوان ثانویه" name="meta_title_en">
          <Input />
        </Form.Item>
      </Col>
      <Col span={24} md={8}>
        <Form.Item
          label="دسته بندی"
          name="categories"
          rules={[
            { required: true, message: 'لطفا نام دسته بندی را وارد کنید.' },
          ]}
        >
          <Select labelInValue options={categoryOptions} />
        </Form.Item>
      </Col>
      <Col span={24} md={24}>
        <Form.Item
          label="توضیحات"
          name="content"
          rules={[{ required: true, message: 'لطفا توضیحات را وارد کنید.' }]}
          className='text-area'
        >
          <TextArea rows={10} />
        </Form.Item>
      </Col>
      <Col span={24} md={24}>
        <Form.Item
          label="(انگلیسی) توضیحات"
          name="content_en"
          rules={[{ required: true, message: 'لطفا توضیحات را وارد کنید.' }]}
          className='text-area'
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
            uploadedImages={uploadedImages}
            updateImages={handleUpdateImages}
            onRemove={handleRemoveImage}
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

export default EditProjectForm;

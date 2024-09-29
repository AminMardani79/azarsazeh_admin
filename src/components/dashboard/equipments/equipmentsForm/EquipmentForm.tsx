import { Form, FormInstance, Input, Select } from 'antd';
import { useUpdateImages } from '../../../../hooks/useUpdateImages';
import TextArea from 'antd/es/input/TextArea';
import ImageUploder from '../../../Uploader/ImageUploader';
import { useEffect, useState } from 'react';
import { EquipmentCategory } from '../../../../types/equipment.types';

const EquipmentForm = ({
  form,
  categories,
}: {
  form: FormInstance;
  categories: EquipmentCategory[];
}) => {
  const [categoryOptions, setCategoryOptions] = useState<
    { label: string; value: string }[]
  >([]);
  const { handleUpdateImages } = useUpdateImages(form, 'images');

  useEffect(() => {
    if (categories && categories.length > 0) {
      const options = categories.map((category) => {
        return {
          label: category.title,
          value: category.id,
        };
      });

      setCategoryOptions(options);
    }
  }, [categories]);
  return (
    <>
      <Form.Item
        label="نام تجهیزات"
        name="title"
        rules={[{ required: true, message: 'لطفا نام تجهیزات را وارد کنید.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="(انگلیسی) نام تجهیزات"
        name="title_en"
        rules={[{ required: true, message: 'لطفا نام تجهیزات را وارد کنید.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="توضیحات"
        name="content"
        rules={[{ required: true, message: 'لطفا توضیحات را وارد کنید.' }]}
        className="text-area"
      >
        <TextArea rows={10} />
      </Form.Item>
      <Form.Item
        label="(انگلیسی) توضیحات"
        name="content_en"
        rules={[{ required: true, message: 'لطفا توضیحات را وارد کنید.' }]}
        className="text-area"
      >
        <TextArea rows={10} />
      </Form.Item>
      <Form.Item
        label="دسته بندی"
        name="categories"
        rules={[
          { required: true, message: 'لطفا نام دسته بندی را وارد کنید.' },
        ]}
      >
        <Select
          labelInValue
          defaultValue={categoryOptions[0]}
          options={categoryOptions}
        />
      </Form.Item>
      <Form.Item label="آلبوم عکس" name="images">
        <ImageUploder updateImages={handleUpdateImages} />
      </Form.Item>
    </>
  );
};

export default EquipmentForm;

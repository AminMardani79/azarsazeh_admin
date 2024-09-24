import { useEffect } from 'react';
import { FormInstance } from 'antd';

export const useUpdateImages = (form: FormInstance) => {
  const handleUpdateImages = (file: any) => {
    if (!file?.url) {
      const formImages = (form.getFieldValue('images') as any[]) || [];
      const isExistImage = formImages.some((image) => image?.uid === file.uid);

      if (isExistImage) {
        form.setFieldValue('images', [
          ...formImages.filter((image) => image?.uid !== file.uid),
        ]);
      } else {
        formImages.push(file);
        form.setFieldValue('images', [...formImages]);
      }
    }
  };

  useEffect(() => {
    form.setFieldValue('images', []);
  }, []);

  return { handleUpdateImages };
};

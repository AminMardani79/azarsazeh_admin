import { useEffect } from 'react';
import { FormInstance } from 'antd';

export const useUpdateImages = (form: FormInstance, targetKey: string) => {
  const handleUpdateImages = (file: any) => {
    if (!file?.url) {
      const formImages = (form.getFieldValue(targetKey) as any[]) || [];
      const isExistImage = formImages.some((image) => image?.uid === file.uid);

      if (isExistImage) {
        form.setFieldValue(targetKey, [
          ...formImages.filter((image) => image?.uid !== file.uid),
        ]);
      } else {
        formImages.push(file);
        form.setFieldValue(targetKey, [...formImages]);
      }
    }
  };

  useEffect(() => {
    form.setFieldValue(targetKey, []);
  }, []);

  return { handleUpdateImages };
};

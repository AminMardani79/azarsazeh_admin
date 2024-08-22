import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload, message } from 'antd';

const FileUploader = () => {
  const beforeUpload = (file: any) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
      return true;
    }

    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
      return true;
    }

    return false;
  };
  return (
    <Upload name="file" beforeUpload={beforeUpload} maxCount={1}>
      <Button icon={<UploadOutlined />}>انتخاب عکس</Button>
    </Upload>
  );
};

export default FileUploader;

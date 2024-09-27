import { useEffect, useState } from 'react';
import { Col, Form, FormInstance, Input, Row } from 'antd';
import { JobRequest } from '../../../../types/job.types';
import TextArea from 'antd/es/input/TextArea';
import { EyeOutlined } from '@ant-design/icons';

function JobRequestDetail({
  form,
  data,
}: {
  form: FormInstance<any>;
  data: JobRequest;
}) {
  const [resume, setResume] = useState('');

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        fullname: data.fullname,
        job: data.job.title,
        message: data.message,
      });
      setResume(data.resume);
    }
  }, [data]);

  return (
    <Row gutter={[15, 0]}>
      <Col span={24} md={12}>
        <Form.Item label="نام و نام خانوادگی" name="fullname">
          <Input />
        </Form.Item>
      </Col>
      <Col span={24} md={12}>
        <Form.Item label="شغل" name="job">
          <Input />
        </Form.Item>
      </Col>
      <Col span={24} md={24}>
        <Form.Item label="متن پیام" name="message">
          <TextArea rows={10} />
        </Form.Item>
      </Col>
      <Col span={24} md={10}>
        <Form.Item label="مشاهده رزومه" name="title">
          <a href={resume} target='_blank'>
            <EyeOutlined style={{fontSize: '20px'}} />
          </a>
        </Form.Item>
      </Col>
    </Row>
  );
}

export default JobRequestDetail;

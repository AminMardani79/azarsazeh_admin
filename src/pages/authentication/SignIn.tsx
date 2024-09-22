import {
  Button,
  Col,
  Flex,
  Form,
  Image,
  Input,
  message,
  Row,
  theme,
  Typography,
} from 'antd';
import { useMediaQuery } from 'react-responsive';
import { PATH_LANDING } from '../../constants';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../services/auth.api';

const { Title } = Typography;

type FieldType = {
  username?: string;
  password?: string;
};

export const SignInPage = () => {
  const {
    token: { colorPrimary },
  } = theme.useToken();
  const isMobile = useMediaQuery({ maxWidth: 769 });
  const navigate = useNavigate();

  const { mutate, isPending } = useLogin();

  const onSuccess = (values: any) => {
    console.log('Success:', values);
    const xAuthToken = values.token;
    localStorage.setItem("xAuthToken", xAuthToken);
    message.open({
      type: 'success',
      content: 'ورود شما با موفقیت انجام شد',
    });
    
    navigate(PATH_LANDING.root);
  };

  const onError = () => {
    message.open({
      type: 'error',
      content: 'ورود شما با مشکل مواجه شد',
    });
  };

  const onFinish = (values: any) => mutate(values, { onSuccess, onError });

  return (
    <Row style={{ minHeight: isMobile ? 'auto' : '100vh', overflow: 'hidden' }}>
      <Col xs={24} lg={12}>
        <Flex
          vertical
          align="center"
          justify="center"
          className="text-center"
          style={{ background: colorPrimary, height: '100%', padding: '1rem' }}
        >
          <Image src="/azarsazeh_logo.jpg" preview={false} />
        </Flex>
      </Col>
      <Col xs={24} lg={12}>
        <Flex
          vertical
          align={isMobile ? 'center' : 'flex-start'}
          justify="center"
          gap="middle"
          style={{ height: '100%', padding: '2rem' }}
        >
          <Title className="m-0">ورود</Title>
          <Form
            name="sign-up-form"
            layout="vertical"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            initialValues={{
              username: 'demo@email.com',
              password: 'demo123',
            }}
            onFinish={onFinish}
            autoComplete="off"
            requiredMark={false}
          >
            <Row gutter={[8, 0]}>
              <Col xs={24}>
                <Form.Item<FieldType>
                  label="نام کاربری"
                  name="username"
                  rules={[
                    { required: true, message: 'لطفا نام کاربری را وارد کنید' },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item<FieldType>
                  label="رمزعبور"
                  name="password"
                  rules={[
                    { required: true, message: 'لطفا رمز عبور را وارد کنید' },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item>
              <Flex align="center" justify="space-between">
                <Button
                  type="primary"
                  htmlType="submit"
                  size="middle"
                  loading={isPending}
                >
                  ورود
                </Button>
              </Flex>
            </Form.Item>
          </Form>
        </Flex>
      </Col>
    </Row>
  );
};

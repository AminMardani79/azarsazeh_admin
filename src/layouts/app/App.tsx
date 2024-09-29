import {
  Button,
  Dropdown,
  Flex,
  FloatButton,
  Layout,
  MenuProps,
  message,
  theme,
  Tooltip,
  Switch,
  Modal,
  Form,
  Input,
} from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactNode, useEffect, useRef, useState } from 'react';
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  MoonOutlined,
  SunOutlined,
} from '@ant-design/icons';
import {
  CSSTransition,
  SwitchTransition,
  TransitionGroup,
} from 'react-transition-group';
import { useMediaQuery } from 'react-responsive';
import SideNav from './SideNav.tsx';
import HeaderNav from './HeaderNav.tsx';
import FooterNav from './FooterNav.tsx';
import { NProgress } from '../../components';
import { PATH_AUTH } from '../../constants';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../redux/theme/themeSlice.ts';
import { useChangePassword, useLogout } from '../../services/auth.api.ts';
import { useForm } from 'antd/es/form/Form';
import { generateResponseFormData } from '../../utils/index.ts';

const { Content } = Layout;

type AppLayoutProps = {
  children: ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  const {
    token: { borderRadius },
  } = theme.useToken();
  const isMobile = useMediaQuery({ maxWidth: 769 });
  const [collapsed, setCollapsed] = useState(true);
  const [navFill, setNavFill] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] =
    useState(false);
  const [form] = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const nodeRef = useRef(null);
  const floatBtnRef = useRef(null);
  const dispatch = useDispatch();
  const { mytheme } = useSelector((state: any) => state.theme);

  const { mutate } = useLogout();

  const { mutate: changePassword, isPending } = useChangePassword();

  const onSuccess = () => {
    localStorage.clear();
    message.open({
      type: 'success',
      content: 'خروج با موفقیت انجام شد',
    });
    navigate(PATH_AUTH.signin);
  };

  const onError = () => {
    message.open({
      type: 'error',
      content: 'خروج با مشکل مواجه شد',
    });
  };

  const onChangePasswordSuccess = () => {
    message.open({
      type: 'success',
      content: 'تغییر رمز با موفقیت انجام شد.',
    });
    setIsChangePasswordModalOpen(false);
    form.resetFields();
  }

  const handleFinish = (values: any) => {
    const formData = generateResponseFormData(values);
    changePassword(formData, { onSuccess: onChangePasswordSuccess });
  };

  const handleSubmitForm = () => form.submit();

  const items: MenuProps['items'] = [
    {
      key: 'user-profile-link',
      label: 'ویرایش رمز',
      icon: <UserOutlined />,
      onClick: () => setIsChangePasswordModalOpen(true),
    },
    {
      type: 'divider',
    },
    {
      key: 'user-logout-link',
      label: 'خروج',
      icon: <LogoutOutlined />,
      danger: true,
      onClick: () => {
        mutate({}, { onSuccess, onError });
        message.open({
          type: 'loading',
          content: 'درحال خروج',
        });
      },
    },
  ];

  useEffect(() => {
    setCollapsed(isMobile);
  }, [isMobile]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 5) {
        setNavFill(true);
      } else {
        setNavFill(false);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('logout', () => {
      navigate(PATH_AUTH.signin);
      localStorage.clear();
    });
    if (!localStorage.getItem('xAuthToken')) {
      navigate(PATH_AUTH.signin);
    }
  }, []);

  return (
    <>
      <NProgress isAnimating={isLoading} key={location.key} />
      <Layout
        style={{
          minHeight: '100vh',
          // backgroundColor: 'white',
        }}
      >
        <SideNav
          trigger={null}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{
            overflow: 'auto',
            position: 'fixed',
            right: 0,
            top: 0,
            bottom: 0,
            background: 'none',
            border: 'none',
            transition: 'all .2s',
          }}
        />
        <Layout
          style={
            {
              // background: 'none',
            }
          }
        >
          <HeaderNav
            style={{
              marginRight: collapsed ? 0 : '200px',
              padding: '0 0 0 2rem',
              background: navFill ? 'rgba(255, 255, 255, .5)' : 'none',
              backdropFilter: navFill ? 'blur(8px)' : 'none',
              boxShadow: navFill ? '0 0 8px 2px rgba(0, 0, 0, 0.05)' : 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'sticky',
              top: 0,
              zIndex: 1,
              gap: 8,
              transition: 'all .25s',
            }}
          >
            <Flex align="center">
              <Tooltip title={`${collapsed ? 'بازکردن' : 'بستن'} منو`}>
                <Button
                  type="text"
                  icon={
                    collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                  }
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                  }}
                />
              </Tooltip>
            </Flex>
            <Flex align="center" gap="small">
              <Tooltip title={mytheme === 'light' ? 'تم تاریک' : 'تم روشن'}>
                <Switch
                  className=" hidden sm:inline py-1"
                  checkedChildren={<MoonOutlined />}
                  unCheckedChildren={<SunOutlined />}
                  checked={mytheme === 'light' ? true : false}
                  onClick={() => dispatch(toggleTheme())}
                />
              </Tooltip>
              <Dropdown menu={{ items }} trigger={['click']}>
                <Flex>
                  <UserOutlined
                    style={{ fontSize: '25px', cursor: 'pointer' }}
                  />
                </Flex>
              </Dropdown>
            </Flex>
          </HeaderNav>
          <Content
            style={{
              margin: `0 ${collapsed ? 0 : '200px'} 0 0`,
              // background: '#ebedf0',
              borderRadius: collapsed ? 0 : borderRadius,
              transition: 'all .25s',
              padding: '24px 32px',
              minHeight: 360,
            }}
          >
            <TransitionGroup>
              <SwitchTransition>
                <CSSTransition
                  key={`css-transition-${location.key}`}
                  nodeRef={nodeRef}
                  onEnter={() => {
                    setIsLoading(true);
                  }}
                  onEntered={() => {
                    setIsLoading(false);
                  }}
                  timeout={300}
                  classNames="bottom-to-top"
                  unmountOnExit
                >
                  {() => (
                    <div ref={nodeRef} style={{ background: 'none' }}>
                      {children}
                    </div>
                  )}
                </CSSTransition>
              </SwitchTransition>
            </TransitionGroup>
            <div ref={floatBtnRef}>
              <FloatButton.BackTop />
            </div>
          </Content>
          <FooterNav
            style={{
              textAlign: 'center',
              marginLeft: collapsed ? 0 : '200px',
              background: 'none',
            }}
          />
          <Modal
            width={700}
            title="ویرایش رمز عبور"
            open={isChangePasswordModalOpen}
            onOk={handleSubmitForm}
            onCancel={() => {
              setIsChangePasswordModalOpen(false);
              form.resetFields();
            }}
            cancelText="لغو"
            okText="ذخیره"
            confirmLoading={isPending}
            centered
          >
            <Form form={form} onFinish={handleFinish}>
              <Form.Item
                label="رمز عبور فعلی"
                name="old_password"
                rules={[
                  {
                    required: true,
                    message: 'لطفا رمزعبور فعلی خود را وارد کنید',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                label="رمز عبور جدید"
                name="new_password"
                rules={[
                  {
                    required: true,
                    pattern:
                      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
                    message:
                      'لازم است رمز عبور حداقل 8 کاراکتر شامل حروف کوچک, حروف بزرگ, عدد و کاراکتر باشد',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                label="تکرار رمز عبور جدید"
                name="confirm_new_password"
                rules={[
                  {
                    message: 'رمزعبور وارد شده با رمزعبور جدید یکسان نیست',
                  },
                  {
                    validator: (_, value, callback) => {
                      if (
                        !value ||
                        value !== form.getFieldValue('new_password')
                      ) {
                        callback('رمزعبور وارد شده با رمزعبور جدید یکسان نیست');
                      } else {
                        callback();
                      }
                    },
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
            </Form>
          </Modal>
        </Layout>
      </Layout>
    </>
  );
};

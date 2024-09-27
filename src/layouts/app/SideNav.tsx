import React, { useEffect, useRef, useState } from 'react';
import { ConfigProvider, Layout, Menu, MenuProps, SiderProps } from 'antd';
import { ApartmentOutlined, ContactsOutlined, FileTextOutlined, ProductOutlined, ReadOutlined, SolutionOutlined, ToolOutlined } from '@ant-design/icons';
import { Logo } from '../../components';
import { Link, useLocation } from 'react-router-dom';
import { PATH_LANDING } from '../../constants';
import { COLOR } from '../../App.tsx';
import { PATH_ACADEMY, PATH_COMPANY, PATH_CONTACTUS, PATH_EQUIPMENTS, PATH_JOBS, PATH_NEWS, PATH_PROJECTS } from '../../constants/routes.ts';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
};

const items: MenuProps['items'] = [
  getItem('پروژه ها', 'project', <ProductOutlined />, [
    getItem(
      <Link to={PATH_PROJECTS.categories}>دسته بندی</Link>,
      '',
      null
    ),
    getItem(
      <Link to={PATH_PROJECTS.projects}>لیست پروژه ها</Link>,
      'project-list',
      null
    )
  ]),
  getItem('تجهیزات', 'equipments', <ToolOutlined />, [
    getItem(
      <Link to={PATH_EQUIPMENTS.categories}>دسته بندی</Link>,
      'equipment-categories',
      null
    ),
    getItem(
      <Link to={PATH_EQUIPMENTS.equipments}>لیست تجهیزات</Link>,
      'equipment-list',
      null
    )
  ]),
  getItem(
    <Link to={PATH_NEWS.root}>اخبار</Link>, 'news',
    <FileTextOutlined />
  ),
  getItem(
    <Link to={PATH_ACADEMY.root}>آکادمی</Link>, 'academy',
    <ReadOutlined />
  ),
  getItem(
    <Link to={PATH_CONTACTUS.root}>تماس با ما</Link>, 'contact-us',
    <ContactsOutlined />
  ),
  getItem(
    <Link to={PATH_COMPANY.root}>شرکت ما</Link>, 'company',
    <ApartmentOutlined />
  ),
  getItem('همکاری با ما', 'jobs', <SolutionOutlined />, [
    getItem(
      <Link to={PATH_JOBS.jobCategories}>دسته بندی</Link>,
      'categories',
      null
    ),
    getItem(
      <Link to={PATH_JOBS.jobs}>مشاغل</Link>,
      'list',
      null
    ),
    getItem(
      <Link to={PATH_JOBS.jobRequests}>درخواست های همکاری</Link>,
      'requests',
      null
    ),
  ]),
];

const rootSubmenuKeys = ['jobs'];

type SideNavProps = SiderProps;

const SideNav = ({ ...others }: SideNavProps) => {
  const nodeRef = useRef(null);
  const { pathname } = useLocation();
  const [openKeys, setOpenKeys] = useState(['']);
  const [current, setCurrent] = useState('');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  useEffect(() => {
    const paths = pathname.split('/');
    setOpenKeys(paths);
    setCurrent(paths[paths.length - 1]);
  }, [pathname]);

  return (
    <Sider ref={nodeRef} breakpoint="lg" collapsedWidth="0" {...others}>
      <Logo
        color="blue"
        asLink
        href={PATH_LANDING.root}
        justify="center"
        gap="small"
        imgSize={{ h: 28, w: 28 }}
        style={{ padding: '1rem 0' }}
      />
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemBg: 'none',
              itemSelectedBg: COLOR['100'],
              itemHoverBg: COLOR['50'],
              itemSelectedColor: COLOR['600'],
            },
          },
        }}
      >
        <Menu
          mode="inline"
          items={items}
          onClick={onClick}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          selectedKeys={[current]}
          style={{ border: 'none' }}
        />
      </ConfigProvider>
    </Sider>
  );
};

export default SideNav;

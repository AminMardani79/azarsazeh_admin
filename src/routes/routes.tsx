import { createBrowserRouter, useLocation } from 'react-router-dom';
import {
  AccountDeactivePage,
  Error400Page,
  Error403Page,
  Error404Page,
  Error500Page,
  Error503Page,
  ErrorPage,
  PasswordResetPage,
  SignInPage,
  SignUpPage,
  UserProfileActionsPage,
  UserProfileActivityPage,
  UserProfileDetailsPage,
  UserProfileFeedbackPage,
  UserProfileHelpPage,
  UserProfileInformationPage,
  UserProfilePreferencesPage,
  UserProfileSecurityPage,
  VerifyEmailPage,
  WelcomePage,
  ProjectCategoriesPage,
  EditProjectPage,
  EditProjecCategoryPage,
  EquipmentCategoriesPage,
  EditEquipmentCategorytPage,
  NewsPage,
  EditNewsPage,
  AcademyPage,
  EditAcademyPage,
  CompanyPage,
  EditCompanyPage,
  EditEquipmentPage
} from '../pages';
import {
  DashboardLayout,
  UserAccountLayout,
} from '../layouts';
import React, { ReactNode, useEffect } from 'react';
import { AboutPage } from '../pages/About.tsx';
import { ContactusPage } from '../pages/contactUs/Contactus.tsx';
import { ContactusDetailPage } from '../pages/contactUs/ContactusDetail.tsx';
import { JobCategoriesPage } from '../pages/jobs/jobCategories/JobCategories.tsx';
import { JobsPage } from '../pages/jobs/jobsList/Jobs.tsx';
import { EditJobCategoryPage } from '../pages/jobs/jobCategories/EditJobCategory.tsx';
import { EditJobPage } from '../pages/jobs/jobsList/EditJob.tsx';
import { ProjectPage } from '../pages/projects/ProjectsPage.tsx';
import { EquipmentPage } from '../pages/equipments/EquipmentPage.tsx';

// Custom scroll restoration function
export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    }); // Scroll to the top when the location changes
  }, [pathname]);

  return null; // This component doesn't render anything
};

type PageProps = {
  children: ReactNode;
};

// Create an HOC to wrap your route components with ScrollToTop
const PageWrapper = ({ children }: PageProps) => {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
};

// Create the router
const router = createBrowserRouter([
  {
    path: '/',
    element: <PageWrapper children={<DashboardLayout />} />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: '',
        element: <ProjectCategoriesPage />,
      },
      {
        path: 'project-list',
        element: <ProjectPage />,
      },
      {
        path: 'project-categories/:id',
        element: <EditProjecCategoryPage />,
      },
      {
        path: 'project-list/:id',
        element: <EditProjectPage />,
      },
    ],
  },
  {
    path: '/equipments',
    element: <PageWrapper children={<DashboardLayout />} />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'equipment-categories',
        element: <EquipmentCategoriesPage />,
      },
      {
        path: 'equipment-list',
        element: <EquipmentPage />,
      },
      {
        path: 'equipment-categories/:id',
        element: <EditEquipmentCategorytPage />,
      },
      {
        path: 'equipment-list/:id',
        element: <EditEquipmentPage />,
      },
    ],
  },
  {
    path: '/jobs',
    element: <PageWrapper children={<DashboardLayout />} />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'categories',
        element: <JobCategoriesPage />,
      },
      {
        path: 'list',
        element: <JobsPage />,
      },
      {
        path: 'categories/:id',
        element: <EditJobCategoryPage />,
      },
      {
        path: 'list/:id',
        element: <EditJobPage />,
      },
    ],
  },
  {
    path: '/news',
    element: <PageWrapper children={<DashboardLayout />} />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: '',
        element: <NewsPage />,
      },
      {
        path: ':id',
        element: <EditNewsPage />,
      }
    ],
  },
  {
    path: '/academy',
    element: <PageWrapper children={<DashboardLayout />} />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: '',
        element: <AcademyPage />,
      },
      {
        path: ':id',
        element: <EditAcademyPage />,
      }
    ],
  },
  {
    path: '/contact-us',
    element: <PageWrapper children={<DashboardLayout />} />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: '',
        element: <ContactusPage />,
      },
      {
        path: ':id',
        element: <ContactusDetailPage />,
      }
    ],
  },
  {
    path: '/company',
    element: <PageWrapper children={<DashboardLayout />} />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: '',
        element: <CompanyPage />,
      },
      {
        path: ':id',
        element: <EditCompanyPage />,
      }
    ],
  },
  {
    path: '/user-profile',
    element: <PageWrapper children={<UserAccountLayout />} />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: 'details',
        element: <UserProfileDetailsPage />,
      },
      {
        path: 'preferences',
        element: <UserProfilePreferencesPage />,
      },
      {
        path: 'information',
        element: <UserProfileInformationPage />,
      },
      {
        path: 'security',
        element: <UserProfileSecurityPage />,
      },
      {
        path: 'activity',
        element: <UserProfileActivityPage />,
      },
      {
        path: 'actions',
        element: <UserProfileActionsPage />,
      },
      {
        path: 'help',
        element: <UserProfileHelpPage />,
      },
      {
        path: 'feedback',
        element: <UserProfileFeedbackPage />,
      },
    ],
  },
  {
    path: '/auth',
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'signup',
        element: <SignUpPage />,
      },
      {
        path: 'signin',
        element: <SignInPage />,
      },
      {
        path: 'welcome',
        element: <WelcomePage />,
      },
      {
        path: 'verify-email',
        element: <VerifyEmailPage />,
      },
      {
        path: 'password-reset',
        element: <PasswordResetPage />,
      },
      {
        path: 'account-delete',
        element: <AccountDeactivePage />,
      },
    ],
  },
  {
    path: 'errors',
    errorElement: <ErrorPage />,
    children: [
      {
        path: '400',
        element: <Error400Page />,
      },
      {
        path: '403',
        element: <Error403Page />,
      },
      {
        path: '404',
        element: <Error404Page />,
      },
      {
        path: '500',
        element: <Error500Page />,
      },
      {
        path: '503',
        element: <Error503Page />,
      },
    ],
  },
  {
    path: '/about',
    element: <PageWrapper children={<DashboardLayout />} />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: '',
        element: <AboutPage />,
      },
    ],
  },
]);

export default router;

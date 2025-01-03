import React from 'react';
import { Result } from 'antd';
import { BackToHomeButton, LogoutButton } from 'components/shared/Button';

const Page403: React.FC = () => {
  return (
    <Result
      className="app-result-page"
      status="403"
      title="403"
      subTitle={'Bạn không có quyền được truy cập trang này'}
      extra={
        <>
          <BackToHomeButton />
          <LogoutButton />
        </>
      }
    />
  );
};

export default Page403;

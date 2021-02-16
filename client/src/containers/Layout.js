import React, { Suspense } from 'react';

import '../sass/application.scss';
import Spinner from '../components/shared/Spinner';
import Header from '../components/navigation/Header';

import MainRoutes from '../routes/MainRoutes';

const Layout = () => {
  return (
    <div className="govuk-template__body govuk-pipeline_body">
      <Header />
      <div className="govuk-width-container">
        <main className="govuk-main-wrapper " id="main-content" role="main">
          <Suspense fallback={<Spinner />}>
            <MainRoutes />
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default Layout;

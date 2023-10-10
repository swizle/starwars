/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Link,
  useLocation,
} from 'react-router-dom';
import { Breadcrumb } from 'antd';

import styles from './breadcrumbComponent.module.scss';
import './breadcrumbComponent.scss';

function BreadcrumbComponent() {
  const location = useLocation();

  const pathnames = location.pathname.split('/').filter((x) => x);

  const items = pathnames.map((breadcrumb, index) => ({
    title: (
      <Link
        key={`${index}-${breadcrumb.toLowerCase()}`}
        to={`/${pathnames.slice(0, index + 1).join('/')}`}
        className={styles.title}
      >
        {breadcrumb.charAt(0).toUpperCase() + breadcrumb.slice(1).replace(/%20/g, ' ')}
      </Link>
    ),
  }));

  const breadcrumbItems = items.slice();

  if (pathnames[0] !== 'home') {
    breadcrumbItems.unshift({ title: <Link to="/home">HOME</Link> });
  }

  return (
    <Breadcrumb separator="/" items={breadcrumbItems} />
  );
}

export default BreadcrumbComponent;

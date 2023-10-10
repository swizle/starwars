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

  const items = pathnames.map((beadcrumb, index) => ({
    title: (
      <Link
        key={`${index}-${beadcrumb.toLowerCase()}`}
        to={`/${pathnames.slice(0, index + 1).join('/')}`}
        className={styles.title}
      >
        {beadcrumb.charAt(0).toUpperCase() + beadcrumb.slice(1).replace(/%20/g, ' ')}
      </Link>
    ),
  }));

  return (
    <Breadcrumb separator=">">
      {items.map((item) => (
        <Breadcrumb.Item key={item.title}>{item.title}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}

export default BreadcrumbComponent;

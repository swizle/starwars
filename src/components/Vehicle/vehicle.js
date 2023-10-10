import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

import styles from './vehicle.module.scss';

function Vehicle({ vehicle }) {
  const vehicleInfo = [
    { label: 'Модель', value: vehicle.model },
    { label: 'Стоимость ', value: vehicle.cost_in_credits },
    { label: 'Максимальная скорость в атмосфере', value: `${vehicle.max_atmosphering_speed}км/ч` },
    { label: 'Экипаж', value: vehicle.crew },
    { label: 'Пассажиры', value: vehicle.passengers },
  ];

  return (
    <Card title={vehicle.name} className={styles.vehicle} extra={<Link to={`/vehicles/${vehicle.name}`}>Подробнее...</Link>}>
      {vehicleInfo.map((infoItem) => (
        <p key={infoItem.label} className={styles.vehicleInfo}>
          {infoItem.label}
          {' '}
          :
          {' '}
          {infoItem.value}
        </p>
      ))}
    </Card>
  );
}

export default Vehicle;

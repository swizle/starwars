import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

import styles from './vehicle.module.scss';

function Vehicle({ vehicle }) {
  const vehicleInfo = [
    { label: 'Name', value: vehicle.name },
    { label: 'Model', value: vehicle.model },
    { label: 'Manufacturer', value: vehicle.manufacturer },
    { label: 'Cost in credits', value: vehicle.cost_in_credits },
    { label: 'Length', value: vehicle.length },
    { label: 'Max atmosphering speed', value: vehicle.max_atmosphering_speed },
    { label: 'Crew', value: vehicle.crew },
    { label: 'passengers', value: vehicle.passengers },
    { label: 'cargo_capacity', value: vehicle.cargo_capacity },
    { label: 'consumables', value: vehicle.consumables },
    { label: 'vehicle_class', value: vehicle.vehicle_class },
  ];

  return (
    <Card title={vehicle.name} className={styles.vehicle} extra={<Link to={`/vehicles/${vehicle.name}`}>Open Info</Link>}>
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

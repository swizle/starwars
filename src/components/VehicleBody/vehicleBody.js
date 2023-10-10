import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'antd';
import axios from 'axios';

import styles from './vehicleBody.module.scss';

async function fetchVehicleData(vehicleName, setVehicleData) {
  try {
    const response = await axios.get(`https://swapi.dev/api/vehicles/?search=${vehicleName}`);
    setVehicleData(response.data.results[0]);
  } catch (error) {
    console.error('Error fetching vehicle data:', error);
  }
}

function VehicleBody() {
  const { vehicleName } = useParams();
  const [vehicleData, setVehicleData] = useState(null);

  useEffect(() => {
    fetchVehicleData(vehicleName, setVehicleData);
  }, [vehicleName]);

  const vehicleInfo = [
    { label: 'Name', value: vehicleData?.name },
    { label: 'Model', value: vehicleData?.model },
    { label: 'Manufacturer', value: vehicleData?.manufacturer },
    { label: 'Cost in credits', value: vehicleData?.cost_in_credits },
    { label: 'Length', value: vehicleData?.length },
    { label: 'Max atmosphering speed', value: vehicleData?.max_atmosphering_speed },
    { label: 'Crew', value: vehicleData?.crew },
    { label: 'Passengers', value: vehicleData?.passengers },
    { label: 'Cargo capacity', value: vehicleData?.cargo_capacity },
    { label: 'Consumables', value: vehicleData?.consumables },
    { label: 'Vehicle class', value: vehicleData?.vehicle_class },
  ];

  return (
    <Card title={vehicleData?.name} className={styles.vehicle}>
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

export default VehicleBody;

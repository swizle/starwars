/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Spin } from 'antd';
import axios from 'axios';

import styles from './vehicleBody.module.scss';

function VehicleBody() {
  const { vehicleName } = useParams();
  const [vehicleData, setVehicleData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchVehicleData() {
      try {
        const response = await axios.get(`https://swapi.dev/api/vehicles/?search=${vehicleName}`);
        setVehicleData(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching vehicle data:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchVehicleData();
  }, [vehicleName]);

  const vehicleInfo = [
    { label: 'Модель', value: vehicleData?.model },
    { label: 'Изготовитель', value: vehicleData?.manufacturer },
    { label: 'Стоимость ', value: vehicleData?.cost_in_credits },
    { label: 'Длина', value: `${vehicleData?.length}м` },
    { label: 'Максимальная скорость в атмосфере', value: `${vehicleData?.max_atmosphering_speed}км/ч` },
    { label: 'Экипаж', value: vehicleData?.crew },
    { label: 'Пассажиры', value: vehicleData?.passengers },
    { label: 'Грузоподъемность', value: `${vehicleData?.cargo_capacity}кг` },
    { label: 'Расходные материалы', value: vehicleData?.consumables },
    { label: 'Класс транспорта', value: vehicleData?.vehicle_class },
  ];

  return (
    <Card title={vehicleData?.name} className={styles.vehicle}>
      {isLoading ? (
        <Spin />
      ) : (
        vehicleData ? (
          vehicleInfo.map((infoItem) => (
            <p key={infoItem.label} className={styles.vehicleInfo}>
              {infoItem.label}
              {' '}
              :
              {' '}
              {infoItem.value}
            </p>
          ))
        ) : (
          <p className={styles.vehicleInfo}>Данные о транспортном средстве отсутствуют.</p>
        )
      )}
    </Card>
  );
}

export default VehicleBody;

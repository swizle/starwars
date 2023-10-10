/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Spin, Tooltip } from 'antd';
import axios from 'axios';

import styles from './character.module.scss';

function Character({ character }) {
  const [isLoading, setIsLoading] = useState(false);
  const [vehicleData, setVehicleData] = useState(null);

  useEffect(() => {
    if (character.vehicles[0]) {
      const fetchVehicle = async () => {
        try {
          setIsLoading(true);
          const response = await axios.get(character.vehicles[0]);
          setVehicleData(response.data);
        } catch (error) {
          console.error('Error fetching vehicle:', error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchVehicle();
    }
  }, [character.vehicles]);

  const characterInfo = [
    { label: 'Рост', value: `${character.height}см` },
    { label: 'Вес', value: `${character.mass}кг` },
    { label: 'Цвет волос', value: character.hair_color },
    { label: 'Цвет кожи', value: character.skin_color },
    { label: 'Цвет глаз', value: character.eye_color },
    { label: 'Год рождения', value: character.birth_year },
    { label: 'Пол', value: character.gender },
  ];

  return (
    <Card title={character.name} className={styles.character}>
      {characterInfo.map((infoItem) => (
        <p key={infoItem.label} className={styles.characterInfo}>
          {infoItem.label}
          {' '}
          :
          {' '}
          {infoItem.value}
        </p>
      ))}
      {isLoading ? (
        <p className={styles.characterInfo}>
          Транспортное средство :
          {' '}
          <Spin />
        </p>
      ) : (
        vehicleData ? (
          <p className={styles.characterInfo}>
            Транспортное средство :
            <Tooltip title="Узнать подробнее о ТС">
              <Link to={`/vehicles/${vehicleData.name}`}>
                {' '}
                {vehicleData.name}
              </Link>
            </Tooltip>
          </p>
        ) : (
          <p className={styles.characterInfo}>
            Транспортное средство : ничего не водит
          </p>
        )
      )}
    </Card>
  );
}

export default Character;

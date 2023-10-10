import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import axios from 'axios';

import styles from './character.module.scss';

function Character({ character }) {
  const [vehicleData, setVehicleData] = useState(null);

  useEffect(() => {
    if (character.vehicles[0]) {
      const fetchVehicle = async () => {
        try {
          const response = await axios.get(character.vehicles[0]);
          setVehicleData(response.data);
        } catch (error) {
          console.error('Error fetching vehicle:', error);
        }
      };

      fetchVehicle();
    }
  }, [character.vehicles]);

  const characterInfo = [
    { label: 'Height', value: character.height },
    { label: 'Mass', value: character.mass },
    { label: 'Hair Color', value: character.hair_color },
    { label: 'Skin Color', value: character.skin_color },
    { label: 'Eye Color', value: character.eye_color },
    { label: 'Birth Year', value: character.birth_year },
    { label: 'Gender', value: character.gender },
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
      {vehicleData ? (
        <p className={styles.characterInfo}>
          Vehicles :
          <Link to={`/vehicles/${vehicleData.name}`}>car</Link>
        </p>
      ) : (
        <p className={styles.characterInfo}>
          Vehicles : dont ride
        </p>
      )}
    </Card>
  );
}

export default Character;

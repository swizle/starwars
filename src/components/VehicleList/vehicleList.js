import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, Spin } from 'antd';

import styles from './vehicleList.module.scss';
import './vehicleList.scss';

import Vehicle from '../Vehicle';

import { getVehicles } from '../../actions';

function VehicleList() {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const vehiclesPerPage = 10;

  const isLoading = useSelector((state) => state.isLoading);
  const vehicles = useSelector((state) => state.vehicles);

  useEffect(() => {
    dispatch(getVehicles(currentPage));
  }, [currentPage, dispatch]);

  const handlePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.characters}>
      {isLoading
        ? (
          <Spin />
        )
        : (
          <>
            {vehicles.map((vehicle) => (
              <Vehicle key={vehicle.name} vehicle={vehicle} />
            ))}
            <Pagination
              className={styles.pagination}
              current={currentPage}
              total={39}
              pageSize={vehiclesPerPage}
              showSizeChanger={false}
              onChange={(page) => handlePage(page)}
            />
          </>
        )}
    </div>
  );
}

export default VehicleList;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, Spin } from 'antd';

import styles from './characterList.module.scss';
import './characterList.scss';

import Character from '../Character';

import { getCharacters } from '../../actions';

function CharacterList() {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 10;

  const isLoading = useSelector((state) => state.isLoading);
  const characters = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(getCharacters(currentPage));
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
            {characters.map((character) => (
              <Character key={character.name} character={character} />
            ))}
            <Pagination
              className={styles.pagination}
              current={currentPage}
              total={82}
              pageSize={charactersPerPage}
              showSizeChanger={false}
              onChange={(page) => handlePage(page)}
            />
          </>
        )}
    </div>
  );
}

export default CharacterList;

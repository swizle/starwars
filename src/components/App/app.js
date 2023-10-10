import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';

import styles from './app.module.scss';

import BreadcrumbComponent from '../BreadcrumbComponent';
import CharacterList from '../CharacterList';
import VehicleList from '../VehicleList';
import VehicleBody from '../VehicleBody';

function App() {
  return (
    <Router>
      <header>
        <h1 className={styles.title}>
          <Link to="/home" className={styles.title}>Star Wars</Link>
        </h1>
      </header>
      <main>
        <section className={styles.home}>
          <BreadcrumbComponent />
          <Routes className={styles.container}>
            <Route path="/">
              <Route
                path=""
                element={(
                  <Navigate to="/home" />
                )}
              />
              <Route
                path="/home"
                element={(
                  <>
                    <Link to="/characters" className={styles.title}>Characters</Link>
                    <Link to="/vehicles" className={styles.title}>Vehicles</Link>
                  </>
                )}
              />
            </Route>

            <Route path="/characters" element={<CharacterList />} exact />

            <Route path="/vehicles">
              <Route
                path=""
                element={<VehicleList />}
                exact
              />
              <Route
                path=":vehicleName"
                element={<VehicleBody />}
                exact
              />
            </Route>
          </Routes>
        </section>
      </main>
    </Router>
  );
}

export default App;

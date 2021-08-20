import React, {Fragment, useEffect, useState} from 'react';
import './App.css';

const App = () => {
  const [lat, setLat] = useState(null);
  const [lot, setLot] = useState(null);
  const [error,setError] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
        position => {
          console.log(position);
          setLat(position.coords.latitude);
          setLot(position.coords.longitude);
        }
        ,
        err => setError(err.message),
        {timeout: 10000},
    );
  }, []);

  return (
      <div>
        {(!lat && !lot && !error) && <h1>Loading</h1>}
        {error && <h1>User denied GeoLocation</h1>}
        {(lat && lot) && (
            <Fragment>
              <h1>Latitude: {lat}</h1>
              <h1>Longtitude: {lot}</h1>
            </Fragment>
          )}
      </div>
  );
};

export default App;

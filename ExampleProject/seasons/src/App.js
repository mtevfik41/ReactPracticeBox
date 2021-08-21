import React, {Fragment, useEffect, useState} from 'react';
import './App.css';
import SeasonDisplay from './components/SeasonDisplay';

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
        <Fragment>
          <SeasonDisplay lat={lat} lot={lot} error={error}/>
        </Fragment>
      </div>
  );
};

export default App;

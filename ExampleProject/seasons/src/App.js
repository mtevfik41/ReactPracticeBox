import React, {useState} from 'react';
import SeasonDisplay from './components/SeasonDisplay';
import './App.css';

const App = () => {
  const [lat, setLat] = useState('');
  const [lot, setLot] = useState('');
  window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position)
        setLat(position.coords.latitude);
        setLot(position.coords.longitude)}
      ,
      err => console.error(err),
      {timeout:10000}
  )
  return (
    <div>
      <h1>Latitude: {lat}</h1>
      <h1>Longtitude: {lot}</h1>
      <SeasonDisplay/>
    </div>
  );
}

export default App;

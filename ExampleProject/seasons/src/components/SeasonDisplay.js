import React, {Fragment} from 'react';
import '../App.css';
const seasonConfig = {
  summer: {
    text:"Let's hit the beach!",
    iconName:'sun icon',
  },
  winter: {
    text: "Burr it is cold!",
    iconName: 'snowflake icon',
  }
}

const getSeason = (lat,month) => {
  if(month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  }
  return lat > 0 ? 'winter' : 'summer';
}

const SeasonDisplay = ({lat,lot,error}) => {
  const season = getSeason(lat,new Date().getMonth());
  const {text,iconName} = seasonConfig[season]
  const latText = lat > 0 ? 'You are in northern hemisphere' : 'You are in southern hemisphere'
  return (
      <div style={divStyle}>
        {(!lat && !lot && !error) && (
            <Fragment>
              <div className="ui active centered inline loader"/>
              <p style={pStyle}>Loading</p>
            </Fragment>
        )}
        {error && <h1>User denied GeoLocation</h1>}
        {(lat && lot) && (
            <Fragment>
              <i className={iconName} style={iconTopStyle}/>
              <h1>{text}</h1>
              <h1>Coords: ({lat},{lot})</h1>
              <h1>{latText}</h1>
              <i className={iconName} style={iconBottomStyle}/>
            </Fragment>
        )}
      </div>
  )
}
const pStyle = {
  marginTop: '10px'
}

const iconTopStyle = {
  position: 'absolute',
  fontSize:'10rem',
  top:'10px',
  left:'10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
const iconBottomStyle = {
  position: 'absolute',
  fontSize: '10rem',
  bottom:'10px',
  right:'10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}
const divStyle = {
  backgroundColor:'rgba(19,163,163,.6)',
  color:'#fff',
  height:'100vh',
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'center'
}

export default SeasonDisplay;